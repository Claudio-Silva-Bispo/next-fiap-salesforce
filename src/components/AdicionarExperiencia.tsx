import React, { useState } from 'react';

interface AdicionarExperienciaProps {
  onClose: () => void;
}

const AdicionarUsuario: React.FC<AdicionarExperienciaProps> = ({ onClose }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nota, setNota] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Dados que será enviado: ' + nome + email + nota + mensagem )

    const response = await fetch('/api/criarExperiencia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, email, nota, mensagem }),
    });

    if (response.ok) {
      // Handle success
      alert('Dados adicionado com sucesso');
      onClose();
    } else {
      // Handle error
      alert('Erro ao adicionar dados');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Adicionar Feedback para análise</h2>
       
        <form 
        onSubmit={handleSubmit}
        name="save-form"
        method="post"
        id="form-save">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="telefone">Nota</label>
            <input
              type="text"
              id="telefone"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="senha">Mensagem</label>
            <input
              type="text"
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdicionarUsuario;
