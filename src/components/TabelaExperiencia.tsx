import React, { useState } from 'react';
import EditarExperienciaModal from './EditarExperienciaModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';
import AnaliseFeedback from './AnaliseFeedback';

interface UserData {
  id: string;
  nome: string;
  email: string;
  nota: string;
  mensagem: string;
}

interface TabelaExperienciaProps {
  data: UserData[];
  onRefresh: () => void;
}

const TabelaExperiencia: React.FC<TabelaExperienciaProps> = ({ data, onRefresh }) => {
  const [experienciaEditando, setExperienciaEditando] = useState<UserData | null>(null);
  const [experienciaExcluindo, setExperienciaExcluindo] = useState<UserData | null>(null);
  const [comentarioFeedback, setComentarioFeedback] = useState<string | null>(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleEditClick = (experiencia: UserData) => {
    setExperienciaEditando(experiencia);
  };

  const handleDeleteClick = (experiencia: UserData) => {
    setExperienciaExcluindo(experiencia);
  };

  const handleFeedbackClick = (item: UserData) => {
    setComentarioFeedback(item.mensagem); // Passa a mensagem para o estado
    setIsFeedbackModalOpen(true);
  };
  

  const handleSave = async (updatedExperiencia: UserData) => {
    try {
      const response = await fetch('/api/atualizarExperiencia', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedExperiencia),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar dados');
      }
      setExperienciaEditando(null);
      onRefresh();
    } catch (error) {
      console.error('Erro ao salvar dado:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (experienciaExcluindo) {
      try {
        const response = await fetch('/api/excluirExperiencia', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: experienciaExcluindo.id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir dados');
        }
        setExperienciaExcluindo(null);
        onRefresh();
      } catch (error) {
        console.error('Erro ao excluir dado:', error);
      }
    }
  };

  return (
    <>
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3">Nome</th>
            <th className="p-3">E-mail</th>
            <th className="p-3">Nota</th>
            <th className="p-3">Mensagem</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody className="border-b bg-gray-50 border-gray-300">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-3 py-2">{item.nome}</td>
              <td className="px-3 py-2">{item.email}</td>
              <td className="px-3 py-2">{item.nota}</td>
              <td className="px-3 py-2">{item.mensagem}</td>
              <td className="px-3 py-2">
                <button onClick={() => handleEditClick(item)} className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
                <button onClick={() => handleDeleteClick(item)} className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
                <button onClick={() => handleFeedbackClick(item)} className="ml-2 px-2 py-1 text-white bg-green-600 rounded">
                  Análise
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {experienciaEditando && (
        <EditarExperienciaModal
          experiencia={experienciaEditando}
          onClose={() => setExperienciaEditando(null)}
          onSave={handleSave}
        />
      )}
      {experienciaExcluindo && (
        <ConfirmarExclusaoModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setExperienciaExcluindo(null)}
        />
      )}
      {isFeedbackModalOpen && comentarioFeedback && ( 
        <AnaliseFeedback 
          isOpen={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
          comentario={comentarioFeedback}
        />
      )}
    </>
  );
};

export default TabelaExperiencia;
