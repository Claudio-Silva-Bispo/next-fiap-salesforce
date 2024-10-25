import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const Rosto: React.FC = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lastMoveTime, setLastMoveTime] = useState<number>(0);
  const [lastXPosition, setLastXPosition] = useState<number | null>(null);
  const [isScrollActive, setIsScrollActive] = useState<boolean>(false); // Controle de ativação/desativação
  const moveThreshold = 30; // Sensibilidade maior para detectar movimento
  const moveCooldown = 500; // Cooldown reduzido para aumentar a velocidade de detecção

  useEffect(() => {
    async function loadModels() {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      startVideo();
    }

    loadModels();
  }, []);

  const startVideo = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setVideoElement(videoRef.current); // Atribui o vídeo ao estado
          }
        })
        .catch(err => {
          console.error('Erro ao acessar a câmera: ', err);
        });
    }
  };

  // Função para detectar movimento do rosto
  const detectFaceMovement = (landmarks: faceapi.FaceLandmarks68) => {
    const nose = landmarks.getNose(); // Pegando o nariz como referência para o centro do rosto
    const currentXPosition = nose[0].x; // Posição X do nariz (centro do rosto)

    // Verifica se existe uma posição anterior e se o tempo de cooldown passou
    if (lastXPosition !== null) {
      const movement = currentXPosition - lastXPosition; // Diferença entre a posição atual e a anterior
      const currentTime = new Date().getTime();

      if (currentTime - lastMoveTime > moveCooldown) {
        // Se o movimento for maior que o threshold, rola a página
        if (movement > moveThreshold) {
          window.scrollBy(0, 200); // Rola para baixo
          setLastMoveTime(currentTime);
        } else if (movement < -moveThreshold) {
          window.scrollBy(0, -200); // Rola para cima
          setLastMoveTime(currentTime);
        }
      }
    }

    // Atualiza a última posição X
    setLastXPosition(currentXPosition);
  };

  useEffect(() => {
    if (videoElement) {
      videoElement.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(videoElement);
        document.body.append(canvas);

        const displaySize = { width: videoElement.width, height: videoElement.height };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          if (isScrollActive) { // Verifica se a rolagem está ativada
            const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions())
              .withFaceLandmarks();

            const resizedDetections = faceapi.resizeResults(detections, displaySize);

            canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

            if (detections.length > 0) {
              const landmarks = detections[0].landmarks;
              detectFaceMovement(landmarks); // Detecta movimento do rosto
            }
          }
        }, 100); // Intervalo de detecção ajustado para aumentar a velocidade de resposta
      });
    }
  }, [videoElement, lastXPosition, isScrollActive]);

  return (
    <div>
      <video ref={videoRef} width="720" height="560" autoPlay muted />
      <h1>Mova seu rosto para rolar a página!</h1>
      
      {/* Botão para ativar/desativar o recurso */}
      <button onClick={() => setIsScrollActive(!isScrollActive)}>
        {isScrollActive ? 'Desativar Rolagem' : 'Ativar Rolagem'}
      </button>
      
      {/* Seções com cores diferentes */}
      <section style={{ height: '100vh', backgroundColor: '#FF6347' }}>
        <h2>Seção 1 - Vermelho</h2>
      </section>
      
      <section style={{ height: '100vh', backgroundColor: '#4682B4' }}>
        <h2>Seção 2 - Azul</h2>
      </section>
      
      <section style={{ height: '100vh', backgroundColor: '#32CD32' }}>
        <h2>Seção 3 - Verde</h2>
      </section>
    </div>
  );
};

export default Rosto;
