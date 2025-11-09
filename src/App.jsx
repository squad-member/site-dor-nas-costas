import { useEffect, useState } from 'react';

export default function App() {
  // Timer: 15 minutos (900s)
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  // Efeito para diminuir o timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Formatar para mm:ss
  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  
useEffect(() => {
  

  if (timeLeft <= 0) return;
  const timer = setInterval(() => {
    setTimeLeft(prev => prev - 1);
  }, 1000);
  return () => clearInterval(timer);
}, [timeLeft]);


  


  return (
 
 
    <div className="w-full bg-gradient-to-b from-red-600 to-red-700 py-4 text-white text-center font-bold text-sm md:text-base">
      <div className="flex justify-center items-center gap-2 md:gap-6 ">
        <span className="text-yellow-400 text-xl">⚠️</span>
        <span className="uppercase tracking-wider">Essa oferta termina em:</span>
        <div className="flex gap-3 text-white text-xl md:text-2xl">
          <div className="text-center">
            <div>{Math.floor(timeLeft / 86400).toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">DIA{Math.floor(timeLeft / 86400) !== 1 ? 'S' : ''}</div>
          </div>
          <div className="text-center">
            <div>{Math.floor((timeLeft % 86400) / 3600).toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">HORAS</div>
          </div>
          <div className="text-center">
            <div>{Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">MINUTOS</div>
          </div>
          <div className="text-center">
            <div>{(timeLeft % 60).toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm">SEGUNDOS</div>
          </div>
        </div>
    </div>







 {/* Hero Section */}
<section id="hero" className="text-center py-24 px-6 bg-white text-black">
  <h1 className="text-3xl md:text-5xl font-bold mb-4">
    <span className="text-[#1D361F]">Elimine</span> Suas <span className="text-[#859B48]">Dores nas Costas</span> em <span className="underline decoration-[#859B48] decoration-4">Poucos Dias</span>
  </h1>

  <h2 className="text-lg md:text-2xl mb-6">
    Sem <span className="font-bold text-[#1D361F]">remédios caros</span>, sem <span className="font-bold text-[#1D361F]">fisioterapia</span>, sem <span className="font-bold text-[#1D361F]">academia</span> — técnica natural focada no <span className="italic text-[#859B48]">músculo iliopsoas</span>
  </h2>

 <div className="flex justify-center mb-6">
  <div className="relative p-2 rounded-2xl animate-glow w-full max-w-5xl">
    <iframe
      src="https://www.youtube.com/embed/1pDXuXhb0O4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-[360px] md:h-[450px] rounded-xl"
    ></iframe>
  </div>
</div>


{/* Botão de Ação + Urgência */}
  <a href="#final-cta" rel="noopener noreferrer">
    <button className="bg-[#859B48] text-black px-8 py-4 rounded-2xl text-xl font-semibold shadow-xl hover:bg-white animate-pulse-glow transition-all duration-300">
      Quero Alívio Agora
    </button>
  </a>
  <p className="text-red-600 font-bold mt-4">🚨 Vagas Limitadas — Garanta já o seu acesso!</p>

  {/* Animações customizadas */}
  <style jsx>{`
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px #859B48;
      }
      50% {
        box-shadow: 0 0 40px #859B48;
      }
    }
    .animate-glow {
      animation: glow 2.5s ease-in-out infinite;
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0px #859B48; }
      50% { box-shadow: 0 0 25px #859B48; }
    }
    .animate-pulse-glow {
      animation: pulseGlow 1.8s infinite;
    }
  `}</style>
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

{/* Bloco - Transformação após o uso */}
<section className="bg-black text-white py-16 px-6 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#ADFF2F] animate-glow-title">
      Imagine Como Você Vai se Sentir Após Usar o Método
    </h2>
    <p className="text-xl mb-6">
      Acordar leve, sem dores. Levantar da cama com facilidade. Voltar a caminhar, brincar com os filhos ou netos, trabalhar com mais disposição. 
    </p>
    <p className="text-xl mb-6">
      Seu corpo vai recuperar a mobilidade, sua mente terá mais tranquilidade e a sua rotina vai deixar de ser limitada pela dor.
    </p>
    <p className="text-lg text-[#859B48] italic">
      Tudo isso em poucos dias, aplicando técnicas simples e naturais.
    </p>
  </div>

  <style jsx>{`
    @keyframes glowTitle {
      0%, 100% {
        text-shadow: 0 0 10px #ADFF2F;
      }
      50% {
        text-shadow: 0 0 20px #ADFF2F;
      }
    }
    .animate-glow-title {
      animation: glowTitle 2.5s ease-in-out infinite;
    }
  `}</style>
</section>

{/* Seção - Benefícios Alcançados */}
<section className="bg-white text-black py-16 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#1D361F]">💪 O Que Você Vai Alcançar</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-[#859B48] text-black p-6 rounded-xl shadow-lg">
      <h3 className="font-bold text-xl mb-2">🚶 Mais mobilidade e disposição</h3>
      <p>Volte a fazer atividades simples do dia a dia sem sentir dor.</p>
    </div>
    <div className="bg-[#859B48] text-black p-6 rounded-xl shadow-lg">
      <h3 className="font-bold text-xl mb-2">😌 Redução significativa da dor</h3>
      <p>Sinta o alívio já nos primeiros dias com técnicas comprovadas.</p>
    </div>
    <div className="bg-[#859B48] text-black p-6 rounded-xl shadow-lg">
      <h3 className="font-bold text-xl mb-2">🧘 Qualidade de vida restaurada</h3>
      <p>Durma melhor, viva melhor e recupere sua confiança no corpo.</p>
    </div>
  </div>
</section>

{/* Seção Comparativa: Que tipo de pessoa você quer ser? */}
<section className="bg-black text-white py-20 px-6">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14"> Mas e agora, Que tipo de Pessoa Você Quer Ser?</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center items-start">
    
    {/* Antes: Preso na Dor */}
    <div className="bg-[#330000] p-10 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-bold text-red-400 mb-6">🙁 Preso na Dor</h3>
      <ul className="text-left text-lg list-disc list-inside text-red-200 space-y-3">
        <li>Dores crônicas que limitam sua rotina</li>
        <li>Fadiga constante e falta de disposição</li>
        <li>Dependência de remédios caros</li>
        <li>Noites mal dormidas e desconforto</li>
        <li>Insegurança ao fazer atividades simples</li>
        <li>Medo de precisar de cirurgia no futuro</li>
        <li>Sensação de envelhecimento precoce</li>
      </ul>
    </div>

    {/* Depois: Livre, Saudável e Confiante */}
    <div className="bg-[#003300] p-10 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-bold text-green-400 mb-6">😄 Livre, Saudável e Confiante</h3>
      <ul className="text-left text-lg list-disc list-inside text-green-200 space-y-3">
        <li>Corpo leve, solto e sem dor</li>
        <li>Energia renovada para o dia a dia</li>
        <li>Autonomia para se mover com liberdade</li>
        <li>Postura melhor e mais confiança</li>
        <li>Mais qualidade de sono e descanso</li>
        <li>Prevenção de dores futuras de forma natural</li>
        <li>Bem-estar emocional e autoestima elevada</li>
      </ul>
    </div>
  </div>
</section>




     {/* Índice do Ebook */}
<section className="bg-[#1D361F] text-[#859B48] py-16 px-6 text-left">
<div className="max-w-5xl mx-auto bg-[#859B48] text-black p-10 rounded-3xl shadow-xl">
<h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">📘 Conteúdo do Ebook</h2>
<div className="space-y-6 text-lg leading-relaxed">
<div>
<span className="text-3xl font-bold text-[#1D361F]">01</span> — <strong>Introdução:</strong> Descubra a origem do problema e por que a maioria das abordagens falha.
</div>
<div>
<span className="text-3xl font-bold text-[#1D361F]">02</span> — <strong>Músculo Iliopsoas:</strong> Conheça o músculo-chave por trás das dores nas costas.
</div>
<div>
<span className="text-3xl font-bold text-[#1D361F]">03</span> — <strong>Síndrome de Iliopsoas:</strong> Entenda os sinais, causas e implicações dessa condição.
</div>
<div>
<span className="text-3xl font-bold text-[#1D361F]">04</span> — <strong>Como Tratar:</strong> Estratégias naturais e eficazes para eliminar a dor sem remédios ou cirurgias.
</div>
<div>
<span className="text-3xl font-bold text-[#1D361F]">05</span> — <strong>Sequência de Exercícios:</strong> Rotina prática com instruções passo a passo para aplicar em casa.
</div>
</div>
</div>
</section>

{/* Seção de Avaliações */}
<section className="bg-white text-black py-16 px-6 text-center">
  <h2 className="text-3xl font-extrabold mb-8">⭐ As Nossas Avaliações</h2>
  <div className="overflow-hidden relative max-w-7xl mx-auto">
    <div className="flex animate-carousel whitespace-nowrap gap-6">
      <img src="/avaliacao1.jpg" alt="Avaliação 1" className="h-auto w-[700px] inline-block" />
      <img src="/avaliacao2.jpg" alt="Avaliação 2" className="h-auto w-[700px] inline-block" />
      <img src="/avaliacao3.jpg" alt="Avaliação 3" className="h-auto w-[700px] inline-block" />
      <img src="/avaliacao4.jpg" alt="Avaliação 4" className="h-auto w-[700px] inline-block" />
      {/* Loop duplicado para efeito contínuo */}
      <img src="/avaliacao1.jpg" alt="Avaliação 1" className="h-auto w-[700px] inline-block" />
      <img src="/avaliacao2.jpg" alt="Avaliação 2" className="h-auto w-[700px] inline-block" />
      <img src="/avaliacao3.jpg" alt="Avaliação 3" className="h-auto w-[700px] inline-block" />
      <img src="/avaliacao4.jpg" alt="Avaliação 4" className="h-auto w-[700px] inline-block" />
    </div>
  </div>

  <style jsx>{`
    @keyframes carousel {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-carousel {
      animation: carousel 30s linear infinite;
    }
  `}</style>
</section>







{/* Bloco 4 - Mockup + Oferta */}
<section id="cta" className="bg-black text-white py-12 px-6 text-center">
<h2 className="text-2xl md:text-3xl font-bold mb-4">Manual Eliminando Dor nas Costas</h2>
<p className="text-lg mb-4">Protocolo testado que atua direto na síndrome do iliopsoas — com alívio já nos primeiros dias.</p>
<p className="text-xl font-bold text-[#859B48]">De R$ 97 por apenas R$ 33,00</p>
<p className="mt-4 text-lg font-semibold text-[#859B48]">
  📨 Compre e ganhe <span className="underline">acesso imediato no seu e-mail!</span>
</p>
<a href="#final-cta" rel="noopener noreferrer">
<button className="bg-[#859B48] text-black px-8 py-3 rounded-2xl mt-4 text-lg shadow hover:bg-white animate-pulse-heart">
Comprar Agora
</button>
</a>
</section>


<style jsx>{`
@keyframes pulse-heart {
0%, 100% { transform: scale(1); box-shadow: 0 0 15px #859B48; }
50% { transform: scale(1.1); box-shadow: 0 0 25px #859B48; }
}
.animate-pulse-heart {
animation: pulse-heart 1.2s infinite;
}
`}</style>

  {/* Seção - Ofertas Promocionais */}
<section className="bg-[#1D361F] text-white py-16 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">🎁 Ofertas Promocionais por Tempo Limitado</h2>
  <p className="text-lg max-w-3xl mx-auto mb-10">Compre agora e ganhe acesso imediato no seu e-mail!</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
    <div className="bg-[#859B48] text-black p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">🥗 Dieta Anti-inflamatória de 7 Dias</h3>
      <p>Reduza dores com um cardápio funcional e prático.</p>
      <p className="mt-3">
        <span className="line-through mr-2 text-gray-700">R$ 39,00</span>
        <span className="text-lg font-bold">R$ 19,00</span>
      </p>
    </div>
    <div className="bg-[#859B48] text-black p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">🧘 Guia de Postura e Coluna Saudável</h3>
      <p>Cuide da sua coluna com exercícios e hábitos simples.</p>
      <p className="mt-3">
        <span className="line-through mr-2 text-gray-700">R$ 39,00</span>
        <span className="text-lg font-bold">R$ 19,00</span>
      </p>
    </div>
  </div>
  <a href="#final-cta" rel="noopener noreferrer">
    <button className="bg-[#859B48] text-black px-8 py-3 rounded-2xl text-lg shadow hover:bg-white animate-pulse-heart">
      Quero Essas Ofertas Agora!
    </button>
  </a>
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

     {/* FAQ Section */}
<section className="bg-[#859B48] text-black py-16 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">❓ Perguntas Frequentes</h2>
<div className="grid gap-6">
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="font-bold text-lg mb-2">📌 Preciso de algum equipamento para aplicar o método?</h3>
<p>Não. Todo o conteúdo é pensado para ser feito em casa, com o peso do próprio corpo.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="font-bold text-lg mb-2">👵 Serve para qualquer idade?</h3>
<p>Sim, o método é leve, adaptável e seguro para todas as idades.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="font-bold text-lg mb-2">⏳ Em quanto tempo começo a sentir melhora?</h3>
<p>Alguns usuários relatam alívio já nos primeiros 3 dias. A maioria sente melhora até o 7º dia.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="font-bold text-lg mb-2">🩺 Posso fazer mesmo com hérnia de disco?</h3>
<p>Sim. Os exercícios são seguros e não exigem impacto. Sempre respeite seus limites.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow-lg"> 
  <h3 className="font-bold text-lg mb-2">Como posso contactar o suporte?</h3>
  <p>
    Pode nos contactar pelo Instagram:&nbsp;
    <a
      href="https://www.instagram.com/manu.aleliminandodornascostas/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
     
    </a>
  </p>
</div>

</div>
</div>
</section>

{/* CTA Final */}
<section id="final-cta" className="bg-black py-12 px-6 text-center">
<h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Pronto para dizer adeus à dor nas costas?</h2>
<p className="mb-4 text-lg text-white">Clique no botão abaixo e comece hoje mesmo. R$ 33,00 com acesso imediato à primeira parte.</p>
<a href="https://pay.hotmart.com/D101999072A?checkoutMode=10&_gl=1*cemlmr*_gcl_au*MTc0NTYzMzM1MC4xNzU4NTY5NzkxLjE5MDE3MTQzNzkuMTc1OTc2MDg3My4xNzU5NzY0MDE0*FPAU*MTc0NTYzMzM1MC4xNzU4NTY5Nzkx*_ga*MTI3NjMwNDA4My4xNzQzMzY0Nzc4*_ga_GQH2V1F11Q*czE3NTk3NjA2OTgkbzkkZzEkdDE3NTk3NjQzOTkkajYkbDAkaDA.&bid=1759830430944" target="_blank" rel="noopener noreferrer">
<button className="animate-pulse-heart bg-[#859B48] text-black px-8 py-3 rounded-2xl text-lg shadow hover:bg-white hover:text-black">
Quero Começar Agora
</button>
</a>
</section>


<style jsx>{`
@keyframes pulse-heart {
0%, 100% { transform: scale(1); box-shadow: 0 0 15px #859B48; }
50% { transform: scale(1.1); box-shadow: 0 0 25px #859B48; }
}
.animate-pulse-heart {
animation: pulse-heart 1.2s infinite;
}
`}</style>






</div>
);
}