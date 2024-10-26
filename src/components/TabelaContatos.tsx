import React from 'react';

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

interface TabelaUsuariosProps {
  data: UserData[];
}

const TabelaUsuarios: React.FC<TabelaUsuariosProps> = ({ data }) => {
  return (
    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
      <thead>
        <tr className="bg-gray-300">
          <th className="p-3">Nome</th>
          <th className="p-3">E-mail</th>
          <th className="p-3">Telefone</th>
          <th className="p-3">Serviço</th>
          <th className="p-3">Localizacão</th>
          <th className="p-3">Mensagem</th>
          <th className="p-3">Ações</th>
        </tr>
      </thead>

      <tbody className="border-b bg-gray-50 border-gray-300">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-3 py-2">{item.name}</td>
            <td className="px-3 py-2">{item.email}</td>
            <td className="px-3 py-2">{item.phone}</td>
            <td className="px-3 py-2">{item.service}</td>
            <td className="px-3 py-2">{item.location}</td>
            <td className="px-3 py-2">{item.message}</td>
            <td className="px-3 py-2">
              <button className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
              <button className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaUsuarios;
