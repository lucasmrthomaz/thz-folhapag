'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [protocolo, setProtocolo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gera um número de protocolo aleatório
    const novoProtocolo = `SUP${Math.floor(Math.random() * 1000000)}`;
    setProtocolo(novoProtocolo);
    setShowModal(true);
  };

  return <div className="p-5">
    <h1 className="text-3xl mb-5 font-sans font-thin">SUPORTE</h1>
    
    <div className="mb-8">
      <Link href="/base-conhecimento" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Base de Conhecimento / FAQ
      </Link>
    </div>

    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Assunto</label>
        <input type="text" required className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Categoria</label>
        <select className="w-full p-2 border rounded">
          <option>Problema Técnico</option>
          <option>Dúvida</option>
          <option>Sugestão</option>
          <option>Outros</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Prioridade</label>
        <select className="w-full p-2 border rounded">
          <option>Baixa</option>
          <option>Média</option>
          <option>Alta</option>
          <option>Urgente</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Descrição</label>
        <textarea required className="w-full p-2 border rounded h-32" />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Solicitar Suporte
      </button>
    </form>

    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Chamado Registrado com Sucesso!</h2>
          <p className="mb-4">Seu número de protocolo é:</p>
          <p className="text-2xl font-bold text-center text-blue-600 mb-6">{protocolo}</p>
          <button 
            onClick={() => setShowModal(false)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Fechar
          </button>
        </div>
      </div>
    )}
  </div>
}