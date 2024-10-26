import React from 'react';

interface UserData {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  genero: string;
  segmento: string;
  tamanho: string;
  areaProduto: string;
  funcao: string;
  estrategiaMarketing: string;
  ia: string;
  estrategiaAtendimento: string;
  aumentoProdutividade: string;
  comunicacao: string;
  ambienteIntegrado: string;
  capacitacao: string;
  reducaoCusto: string;
  conversao: string;
  vendas: string;
  ferramentas: string;
  timeVendas: string;
  estrategiaEmpresa: string;
  marca: string;
  jornada: string;
  marketingOportunidade: string;
}

interface TabelaDescobertaProps {
  data: UserData[];
}

const TabelaDescoberta: React.FC<TabelaDescobertaProps> = ({ data }) => {
  return (
    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
      <thead>
        <tr className="bg-gray-300">
          <th className="p-3">Nome</th>
          <th className="p-3">Telefone</th>
          <th className="p-3">E-mail</th>
          <th className="p-3">Genero</th>
          <th className="p-3">Segmento</th>
          <th className="p-3">Tamanho</th>
          <th className="p-3">Área</th>
          <th className="p-3">Funcao</th>
          <th className="p-3">Estrategia Marketing</th>
          <th className="p-3">IA</th>
          <th className="p-3">Estrategia Atendimento</th>
          <th className="p-3">Aumento Produtividade</th>
          <th className="p-3">Comunicacao</th>
          <th className="p-3">Ambiente Integrado</th>
          <th className="p-3">Capacitacao</th>
          <th className="p-3">Reducao Custo</th>
          <th className="p-3">Conversao</th>
          <th className="p-3">Vendas</th>
          <th className="p-3">Ferramentas</th>
          <th className="p-3">Time Vendas</th>
          <th className="p-3">Estrategia Empresa</th>
          <th className="p-3">Marca</th>
          <th className="p-3">Jornada</th>
          <th className="p-3">Marketing Oportunidade</th>
        </tr>
      </thead>
      <tbody className="border-b bg-gray-50 border-gray-300">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-3 py-2">{item.nome}</td>
            <td className="px-3 py-2">{item.telefone}</td>
            <td className="px-3 py-2">{item.email}</td>
            <td className="px-3 py-2">{item.genero}</td>
            <td className="px-3 py-2">{item.tamanho}</td>
            <td className="px-3 py-2">{item.segmento}</td>
            <td className="px-3 py-2">{item.areaProduto}</td>
            <td className="px-3 py-2">{item.funcao}</td>
            <td className="px-3 py-2">{item.estrategiaMarketing}</td>
            <td className="px-3 py-2">{item.ia}</td>
            <td className="px-3 py-2">{item.estrategiaAtendimento}</td>
            <td className="px-3 py-2">{item.aumentoProdutividade}</td>
            <td className="px-3 py-2">{item.comunicacao}</td>
            <td className="px-3 py-2">{item.ambienteIntegrado}</td>
            <td className="px-3 py-2">{item.capacitacao}</td>
            <td className="px-3 py-2">{item.reducaoCusto}</td>
            <td className="px-3 py-2">{item.conversao}</td>
            <td className="px-3 py-2">{item.vendas}</td>
            <td className="px-3 py-2">{item.ferramentas}</td>
            <td className="px-3 py-2">{item.timeVendas}</td>
            <td className="px-3 py-2">{item.estrategiaEmpresa}</td>
            <td className="px-3 py-2">{item.marca}</td>
            <td className="px-3 py-2">{item.jornada}</td>
            <td className="px-3 py-2">{item.marketingOportunidade}</td>
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

export default TabelaDescoberta;
