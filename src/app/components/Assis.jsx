"use client"; // Agregar esta línea al principio

import { useState } from 'react';
import Image from 'next/image';
import chat from '@/app/imgs/image 132.png';

export default function Assis() {
  // Estado para manejar la visibilidad del chatbox
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Función para abrir/cerrar el chat
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Botón del chatbox, un círculo con imagen */}
      <div
        className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        onClick={toggleChat}
      >
        <Image src={chat} alt="Chat icon" className="w-10 h-10" />
      </div>

      {/* Chatbox que aparece al hacer click */}
      {isChatOpen && (
        <div className="mt-4 w-80 h-96 bg-[#21251f] rounded-lg shadow-lg p-4 relative">
          <h3 className="text-lg font-semibold mb-2 text-[#FAFAFA]">Chat</h3>
          <div className="overflow-y-auto h-auto bg-gray-500 p-2 rounded">
            {/* Aquí va el contenido del chat */}
            <p className="text-sm text-[#FAFAFA]">Este es el chatbox. Próximamente será funcional.</p>
          </div>
          {/* Botón para cerrar el chat */}
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={toggleChat}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
