import React, { useEffect, useState } from 'react';

const RulerNavigation = () => {
  const [isActive, setIsActive] = useState(false); // Ativa/desativa a régua
  const [position, setPosition] = useState(0); // Posição vertical da régua
  const [showModal, setShowModal] = useState(false); // Controla a exibição do modal
  const rulerHeight = 200; // Altura da régua (em pixels)

  // Atualiza a posição da régua conforme o scroll da página
  const handleScroll = () => {
    if (isActive) {
      const scrollPos = window.scrollY;
      setPosition(scrollPos);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.shiftKey && (event.key === 'B' || event.key === 'b')) {
      setIsActive(true); // Ativa a régua com Shift + B
      setShowModal(true); // Exibe o modal quando a régua é ativada
    }
    if (event.shiftKey && (event.key === 'F' || event.key === 'f')) {
      setIsActive(false); // Desativa a régua com Shift + F
    }
    if (event.shiftKey && (event.key === 'P' || event.key === 'p')) {
      setShowModal(false); // Fecha o modal com Shift + P
    }
    if (isActive) {
      if (event.key === 'O' || event.key === 'o') {
        // Sobe a régua
        setPosition((prevPos) => Math.max(prevPos - 50, 0));
        window.scrollBy(0, -50); // Faz o scroll subir também
      } else if (event.key === 'N' || event.key === 'n') {
        // Desce a régua
        setPosition((prevPos) => prevPos + 50);
        window.scrollBy(0, 50); // Faz o scroll descer também
      }
    }
  };

  // Fecha o modal ao clicar fora dele
  const handleClickOutside = (event: MouseEvent) => {
    const modal = document.getElementById('modal');
    if (modal && !modal.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll); // Captura o movimento de rolagem
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div>
      {/* Modal explicativo sobre a régua */}
      {showModal && (
        <div
          id="modal"
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Use 'O' para subir a régua e 'N' para descer. </p>
            <p>Pressione Shift + F para desativar a régua e SHIFT + 'P' para desativar esse informativo.</p>
            <p>Navegação também é possível com uso do mouse.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Overlay de blur acima da régua */}
      <div
        className="fixed inset-0 z-30"
        style={{
          top: 0,
          height: `${position}px`,
          backdropFilter: 'blur(8px)', // Aplica blur acima da régua
          pointerEvents: 'none',
        }}
      />

      {/* Régua de leitura */}
      <div
        className="fixed left-0 right-0 z-40"
        style={{
          top: `${position}px`,
          height: `${rulerHeight}px`,
          border: '2px solid black',
        }}
      />

      {/* Overlay de blur abaixo da régua */}
      <div
        className="fixed inset-0 z-30"
        style={{
          top: `${position + rulerHeight}px`,
          bottom: 0,
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default RulerNavigation;
