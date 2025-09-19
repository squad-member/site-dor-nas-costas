// Página de vendas React com Tailwind e estrutura de alta conversão
// Inclui: logo, mockup, CTAs, garantia, provas, blocos visuais

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 px-6 bg-gradient-to-b from-blue-100 to-gray-50">
        <img src="/gigi.png" alt="Logo" className="mx-auto w-24 mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Elimine Suas Dores nas Costas em Poucos Dias</h1>
        <h2 className="text-lg md:text-2xl mb-6">Sem remédios caros, sem fisioterapia, sem academia — técnica natural focada no músculo iliopsoas</h2>
        <a href="https://hotmart.com/SEU-LINK-AQUI" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-green-700">Quero Alívio Agora</button>
        </a>
      </section>

      {/* Bloco 2 - Manifesto */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Você não precisa conviver com a dor</h2>
        <p className="text-lg text-center mb-6">A raiz da dor nas costas muitas vezes não é a coluna — é um músculo esquecido chamado iliopsoas.</p>
        <p className="text-center italic">"Essa descoberta muda tudo. E você pode começar hoje."</p>
      </section>

      {/* Bloco 3 - Benefícios */}
      <section className="bg-blue-50 py-12 px-6">
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
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Manual Eliminando Dor nas Costas</h2>
        <p className="text-lg mb-4">Protocolo testado que atua direto na síndrome do iliopsoas — com alívio já nos primeiros dias.</p>
        <p className="text-xl font-bold text-green-700">De R$ 97 por apenas R$ 33,00</p>
        <a href="https://hotmart.com/SEU-LINK-AQUI" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-8 py-3 rounded-2xl mt-4 text-lg shadow hover:bg-green-700">Comprar Agora</button>
        </a>
      </section>

      {/* Bloco 5 - Bônus */}
      <section className="bg-blue-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Bônus Exclusivos (opcionais)</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🥗 Dieta Anti-inflamatória de 7 Dias</h3>
            <p className="mb-2">Reduza dores e inchaços com um cardápio funcional e delicioso.</p>
            <p className="text-green-600 font-bold">Apenas R$ 19,00</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🧘 Guia de Postura e Coluna Saudável</h3>
            <p className="mb-2">Posturas e alongamentos que mantêm sua coluna protegida todos os dias.</p>
            <p className="text-green-600 font-bold">Apenas R$ 19,00</p>
          </div>
        </div>
      </section>

      {/* Bloco 6 - Garantia */}
      <section className="py-12 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4">Garantia Condicional de 7 Dias</h2>
        <p className="mb-4 max-w-2xl mx-auto">Aplique o método e, se não sentir nenhuma melhora, basta nos mostrar sua aplicação e devolvemos seu dinheiro. Sem burocracia.</p>
        <p className="italic text-gray-600">Você só precisa aplicar para colher os resultados.</p>
      </section>

      {/* Bloco 7 - CTA Final */}
      <section className="bg-green-100 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para dizer adeus à dor nas costas?</h2>
        <p className="mb-4 text-lg">Clique no botão abaixo e comece hoje mesmo. R$ 33,00 com acesso imediato à primeira parte.</p>
        <a href="https://hotmart.com/SEU-LINK-AQUI" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-8 py-3 rounded-2xl text-lg shadow hover:bg-green-700">Quero Começar Agora</button>
        </a>
      </section>
    </div>
  );
}
