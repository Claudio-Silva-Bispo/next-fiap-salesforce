import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const BlinkScroll: React.FC = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lastBlinkTime, setLastBlinkTime] = useState<number>(0);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(true);
  const blinkThreshold = 0.25; // Threshold para piscada

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

  // Função para calcular a relação de aspecto do olho (EAR)
  const calculateEAR = (eye: faceapi.Point[]) => {
    const vertical1 = Math.hypot(eye[1].x - eye[5].x, eye[1].y - eye[5].y);
    const vertical2 = Math.hypot(eye[2].x - eye[4].x, eye[2].y - eye[4].y);
    const horizontal = Math.hypot(eye[0].x - eye[3].x, eye[0].y - eye[3].y);
    return (vertical1 + vertical2) / (2.0 * horizontal);
  };

  // Função para detectar piscada
  const detectBlink = (landmarks: faceapi.FaceLandmarks68) => {
    const leftEye = landmarks.getLeftEye();
    const rightEye = landmarks.getRightEye();

    const earLeft = calculateEAR(leftEye);
    const earRight = calculateEAR(rightEye);

    return (earLeft < blinkThreshold && earRight < blinkThreshold);
  };

  useEffect(() => {
    if (videoElement) {
      videoElement.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(videoElement);
        document.body.append(canvas);

        const displaySize = { width: videoElement.width, height: videoElement.height };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks();

          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

          if (detections.length > 0) {
            const landmarks = detections[0].landmarks;

            // Detectar piscada
            if (detectBlink(landmarks)) {
              const currentTime = new Date().getTime();
              if (currentTime - lastBlinkTime > 1000) { // Limite para evitar múltiplas detecções rápidas
                window.scrollBy(0, 200); // Rolar para baixo
                setLastBlinkTime(currentTime); // Atualiza o tempo da última piscada
              }
            }
          }
        }, 100);
      });
    }
  }, [videoElement]);

  const toggleCamera = () => {
    setIsCameraActive(prev => !prev);
    if (videoRef.current) {
      videoRef.current.srcObject = null; // Limpa a fonte do vídeo ao desligar a câmera
    } else {
      startVideo(); // Reinicia a câmera se estiver ativando novamente
    }
  };

  return (
    <div>
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '200px',  // Tamanho menor
          height: '150px',
          border: '2px solid #fff',
          borderRadius: '10px',
          display: isCameraActive ? 'block' : 'none' // Esconde o vídeo se a câmera estiver desligada
        }} 
      />
      <h1>Piscar para rolar!</h1>
      <button onClick={toggleCamera}>
        {isCameraActive ? 'Desligar Câmera' : 'Ligar Câmera'}
      </button>
    </div>
  );
};

export default BlinkScroll;
