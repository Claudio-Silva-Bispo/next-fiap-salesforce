import React, { useState, useEffect } from 'react';

// Definição dos tipos para as mensagens
type ChatMessage = {
    text: string;
    type: 'user' | 'bot';
};

// Componente Chat
const Chat: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

    // Função para lidar na abertura do modal
    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    // Função para lidar no envio de mensagens
    const handleSend = () => {
        if (message.trim()) {
            setChatHistory((prev) => [...prev, { text: message, type: 'user' }]);
            setMessage('');
            // Aqui você pode adicionar a lógica para enviar a mensagem ao chatbot e obter a resposta
            // Exemplo: setChatHistory((prev) => [...prev, { text: "Resposta do bot", type: 'bot' }]);
        }
    };

    // Função para lidar no reconhecimento de voz
    const handleVoiceInput = () => {
        const recognition = new (window as any).SpeechRecognition();
        recognition.continuous = false; // Para não continuar ouvindo
        recognition.interimResults = false; // Para não mostrar resultados intermediários

        recognition.onstart = () => {
            console.log("Reconhecimento de voz iniciado...");
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const result = event.results[0][0].transcript;
            setMessage(result); // Define o texto reconhecido no campo de mensagem
            handleSend(); // Envia a mensagem automaticamente
        };

        recognition.onerror = (event: SpeechRecognitionError) => {
            console.error("Erro no reconhecimento de voz:", event.error);
            alert(`Erro: ${event.error}`); // Alerta se houver erro
        };

        recognition.onend = () => {
            console.log("Reconhecimento de voz encerrado.");
        };

        recognition.start(); // Inicia o reconhecimento de voz
    };

    // Função para fechar o modal ao pressionar a tecla 'f'
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.shiftKey && (event.key === 'C' || event.key === 'c')) {
            event.preventDefault();
            toggleChat();
        } else if (event.shiftKey && (event.key === 'F' || event.key === 'f') && isOpen) {
            event.preventDefault();
            toggleChat();
        }
    };

    // Adiciona evento de tecla ao montar o componente
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div>
            <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
                <button onClick={toggleChat} style={{ fontSize: '24px' }}>
                    💬
                </button>
            </div>
            {isOpen && (
                <div style={modalStyles}>
                    <div style={headerStyles}>
                        <h2>Chatbot</h2>
                        <button onClick={toggleChat}>X</button>
                    </div>
                    <div style={chatStyles}>
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={chat.type}>
                                {chat.text}
                            </div>
                        ))}
                    </div>
                    <input 
                        type="text" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
                        placeholder="Digite sua mensagem..."
                    />
                    <button onClick={handleVoiceInput}>🎤</button>
                </div>
            )}
        </div>
    );
};

// Estilos para o modal e componentes
const modalStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: '60px',
    left: '20px',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const headerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const chatStyles: React.CSSProperties = {
    maxHeight: '200px',
    overflowY: 'scroll',
    margin: '10px 0',
    border: '1px solid #eee',
    padding: '5px',
};

export default Chat;
