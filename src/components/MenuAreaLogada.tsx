import React, { useState } from 'react';
import AdicionarUsuario from './AdicionarUsuario';
import AdicionarExperiencia from './AdicionarExperiencia';

interface SidebarProps {
  setSection: (section: Section) => void;
}

export type Section = 'usuarios' | 'contatos' | 'feedbacks' | 'descoberta' | 'experiencia' | 'addUser' | 'addExperiencia' | 'editUser' | 'deleteUser' | 'Documentação';

const MenuAreaLogada: React.FC<SidebarProps> = ({ setSection }) => {

    // Abrir o modal para adiconar novos usuários
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const [isAddExperienciaModalOpen, setIsAddExperienciaModalOpen] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    window.location.href = '/'; 
  };

  return (

    <section>

        <aside className="fixed top-0 left-0 w-full sm:w-60 h-full p-6 bg-gray-50 text-gray-800 pt-52">
        <nav className="space-y-8 text-sm">
            <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-widest uppercase text-gray-600 mb-5">Dashboard</h2>
            <div className="flex flex-col space-y-1">

                <h2 className='text-sm font-semibold tracking-widest uppercase text-gray-600'>Relatórios</h2>
                <button onClick={() => setSection('usuarios')} className="text-left">Usuários</button>
                <button onClick={() => setSection('contatos')} className="text-left">Contatos</button>
                <button onClick={() => setSection('feedbacks')} className="text-left">Feedbacks</button>
                <button onClick={() => setSection('experiencia')} className="text-left">Experiência</button>
                <button onClick={() => setSection('descoberta')} className="text-left">Descoberta</button>
            </div>
            </div>

            <div className="space-y-2">
            
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">Administrador</h2>
            
            <div className="flex flex-col space-y-1">
                
                <button onClick={() => setIsAddUserModalOpen(true)} className="text-left">Adicionar Usuário</button>

                <button onClick={() => setIsAddExperienciaModalOpen(true)} className="text-left">Adicionar Experiência</button>
                
            </div>
            </div>

            <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">Configurações</h2>
            <div className="flex flex-col space-y-1">
                <button onClick={() => setSection('Documentação')} className="text-left">Documentação</button>
                
            </div>
            </div>

            <div className="space-y-2">
            <button onClick={handleLogout} className="text-left text-red-600">Sair</button>
            </div>
        </nav>
        </aside>

    {isAddUserModalOpen && <AdicionarUsuario onClose={() => setIsAddUserModalOpen(false)} />}

    {isAddExperienciaModalOpen && <AdicionarExperiencia onClose={() => setIsAddExperienciaModalOpen(false)} />}
    </section>
  );
};

export default MenuAreaLogada;
