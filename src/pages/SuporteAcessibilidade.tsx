import React from 'react';

const SuporteAcessibilidade: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white border rounded shadow-lg">
        <h2 className="mb-4 text-4xl font-semibold p-5">Teclas de Atalho</h2>
        <ul className="list-disc list-inside p-5">
          <li><strong>Shift + A:</strong> Alternar entre o menu aberto e fechado.</li>
          <li><strong>Shift + B:</strong> Ativar navegação da régua.</li>
          <li><strong>Shift + C:</strong> Ativar/desativar o chat.</li>
          <li><strong>Shift + D:</strong> Ativar scroll para baixo.</li>
          <li><strong>Shift + E:</strong> Ativar comando de voz para aumentar fonte da página.</li>
          <li><strong>Shift + F:</strong> Fechar o chat ou qualquer outro modal específico.</li>
          <li><strong>Shift + G:</strong> Ativar Scroll na tela (rolar para cima ou para baixo).</li>
          <li><strong>Shift + H:</strong> Abrir menu de suporte.</li>
          <li><strong>Shift + I:</strong> Ativar scroll para cima.</li>
          <li><strong>Shift + J:</strong> Desativar completamente o scroll pelo teclado.</li>
          <li><strong>Shift + K:</strong> Ativar tema escuro.</li>
          <li><strong>Shift + L:</strong> Ativar tema claro.</li>
          <li><strong>Shift + M:</strong> Abrir/fechar o menu lateral direita.</li>
          <li><strong>Shift + N:</strong> Subir a régua.</li>
          <li><strong>Shift + O:</strong> Para descer.</li>
          <li><strong>Shift + P:</strong> Fechar modal da régua.</li>
          <li><strong>Shift + Q:</strong> Desativar leitura dos textos ao mover com tab.</li>
          <li><strong>Shift + R:</strong> Desativar personalização da fonte da página.</li>
          <li><strong>Shift + S:</strong> Menu de suporte.</li>
          <li><strong>Shift + T:</strong> Desativar de vez o audio.</li>
          <li><strong>Shift + U:</strong> Desativar ou ativar fala no navegador.</li>
          <li><strong>Shift + V:</strong> Ativar navegação por voz.</li>
          <li><strong>Shift + X:</strong> Ativar novamente leitura dos textos.</li>
          <li><strong>Shift + Y:</strong> Ativar fala no menu de suporte.</li>
          <li><strong>Esc:</strong> Fechar o menu ou modal ativo.</li>
          <li><strong>Espaço:</strong> Desativar menus.</li>
        </ul>
      </div>
    </div>
  );
};

export default SuporteAcessibilidade;
