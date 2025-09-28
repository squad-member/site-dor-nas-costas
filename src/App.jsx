// Página de vendas React com Tailwind e estrutura de alta conversão
// Inclui: logo, mockup, CTAs, garantia, provas, blocos visuais

export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-white text-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Elimine Suas Dores nas Costas em Poucos Dias
        </h1>
        <h2 className="text-lg md:text-2xl mb-6">
          Sem remédios caros, sem fisioterapia, sem academia — técnica natural focada no músculo iliopsoas
        </h2>

        <div className="flex justify-center mb-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SEU_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-3xl rounded-xl shadow-lg"
          ></iframe>
        </div>

        <a 
          href="https://hotmart.com/SEU-LINK-AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-[#859B48] text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-[#6f8239]">
            Quero Alívio Agora
          </button>
        </a>
      </section>

      {/* Bloco 2 - Manifesto */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Você não precisa conviver com a dor
          </h2>
          <p className="text-lg mb-6">
            A raiz da dor nas costas muitas vezes não é a coluna — é um músculo esquecido chamado iliopsoas.
          </p>
          <p className="italic">
            "Essa descoberta muda tudo. E você pode começar hoje."
          </p>
        </div>
      </section>

      {/* Bloco 3 - Benefícios */}
      <section className="bg-white text-black py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🔓 Libere seu corpo da dor</h3>
            <p>Com apenas 15 minutos por dia, veja sua mobilidade voltar ao normal.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🛏️ Durma melhor</h3>
            <p>Sem acordar travado ou com dores na lombar.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🧘‍♂️ Pratique em casa</h3>
            <p>Sem equipamentos, sem academia — com orientação clara e segura.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📉 Evite cirurgia e remédios</h3>
            <p>Tratamento natural focado na raiz do problema, e não nos sintomas.</p>
          </div>
        </div>
      </section>

      {/* Bloco 4 - Mockup + Oferta */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <img 
          src="/Área de Membros Premium.png" 
          alt="Mockup Produto" 
          className="mx-auto w-full max-w-xl rounded-2xl shadow-lg mb-6" 
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Manual Eliminando Dor nas Costas</h2>
        <p className="text-lg mb-4">
          Protocolo testado que atua direto na síndrome do iliopsoas — com alívio já nos primeiros dias.
        </p>
        <p className="text-xl font-bold text-[#859B48]">De R$ 97 por apenas R$ 33,00</p>
        <a 
          href="https://hotmart.com/SEU-LINK-AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-[#859B48] text-black px-8 py-3 rounded-2xl mt-4 text-lg shadow hover:bg-white">
            Comprar Agora
          </button>
        </a>
      </section>

      {/* Bloco 5 - Bônus */}
      <section className="bg-[#1D361F] py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Bônus Exclusivos (opcionais)</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#859B48] text-black p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🥗 Dieta Anti-inflamatória de 7 Dias</h3>
            <p className="mb-2">Reduza dores e inchaços com um cardápio funcional e delicioso.</p>
            <p className="text-black font-bold">Apenas R$ 19,00</p>
          </div>
          <div className="bg-[#859B48] text-black p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🧘 Guia de Postura e Coluna Saudável</h3>
            <p className="mb-2">Posturas e alongamentos que mantêm sua coluna protegida todos os dias.</p>
            <p className="text-black font-bold">Apenas R$ 19,00</p>
          </div>
        </div>
      </section>

      {/* Bloco - Bônus Pós 7 Dias */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-800">🎁 Bônus Especial Liberado Após 7 Dias</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Como recompensa por aplicar o método durante 7 dias, você desbloqueia o acesso ao <strong>Plano Avançado de Manutenção da Coluna</strong>.
        </p>
        <p className="mb-4">Esse plano exclusivo inclui:</p>
        <ul className="list-disc list-inside text-left max-w-xl mx-auto text-white mb-6">
          <li>✅ Rotina semanal de prevenção da dor</li>
          <li>✅ Checklists e lembretes visuais</li>
          <li>✅ Protocolos rápidos para manter a coluna saudável no longo prazo</li>
        </ul>
        <p className="text-lg font-bold text-green-700">Valor real: R$ 47 — você recebe 100% grátis após o 7º dia</p>
      </section>

      {/* Bloco 6 - Garantia */}
      <section className="py-12 px-6 text-center bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Garantia Condicional de 7 Dias</h2>
        <p className="mb-4 max-w-2xl mx-auto">Aplique o método e, se não sentir nenhuma melhora, basta nos mostrar sua aplicação e devolvemos seu dinheiro. Sem burocracia.</p>
        <p className="italic text-gray-600">Você só precisa aplicar para colher os resultados.</p>
      </section>

      {/* Bloco 7 - FAQ */}
      <section className="bg-[#859B48] text-black py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">❓ Perguntas Frequentes</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Preciso de algum equipamento para aplicar o método?</h3>
            <p>Não. Todo o conteúdo é pensado para ser feito em casa, com o peso do próprio corpo.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Serve para qualquer idade?</h3>
            <p>Sim, o método é leve, adaptável e seguro para todas as idades.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Em quanto tempo começo a sentir melhora?</h3>
            <p>Alguns usuários relatam alívio já nos primeiros 3 dias. A maioria sente melhora até o 7º dia.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Posso fazer mesmo com hérnia de disco?</h3>
            <p>Sim. Os exercícios são seguros e não exigem impacto. Sempre respeite seus limites.</p>
          </div>
        </div>
      </section>

      {/* Bloco 8 - CTA Final */}
      <section className="bg-black py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Pronto para dizer adeus à dor nas costas?</h2>
        <p className="mb-4 text-lg text-white">Clique no botão abaixo e comece hoje mesmo. R$ 33,00 com acesso imediato à primeira parte.</p>
        <a href="https://hotmart.com/SEU-LINK-AQUI" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#859B48] text-black px-8 py-3 rounded-2xl text-lg shadow hover:bg-white hover:text-black">Quero Começar Agora</button>
        </a>
      </section>
    </div>
  );
}
