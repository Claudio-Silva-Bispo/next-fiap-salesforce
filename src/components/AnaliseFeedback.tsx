import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  comentario: string; // O texto do comentário que você quer analisar
}

const AnaliseFeedback: React.FC<ModalProps> = ({ isOpen, onClose, comentario }) => {
  const [avaliacao, setAvaliacao] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFeedback = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/analisar-sentimento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ COMENTARIO: comentario }), // Envie o texto do comentário
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Dados retornados da API:", data); // Log da resposta
      setAvaliacao(data.AVALIACAO); // Certifique-se de que `data.AVALIACAO` está correto
    } catch (error) {
      console.error('Erro ao buscar feedback:', error);
      setAvaliacao(null); // Manter null em caso de erro
    } finally {
      setLoading(false);
    }
  };

  // Chamar a função quando o modal abrir
  useEffect(() => {
    if (isOpen && comentario) {
      console.log("Chamando a API com o comentário:", comentario);
      fetchFeedback();
    }
  }, [isOpen, comentario]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Avaliação do Feedback</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <p>{avaliacao !== null ? `Nota: ${avaliacao}` : 'Erro ao carregar avaliação'}</p>
        )}
        <button
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default AnaliseFeedback;
