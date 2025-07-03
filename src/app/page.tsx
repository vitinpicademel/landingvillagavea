"use client";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";

export default function Home() {
  const [showVideoTop, setShowVideoTop] = useState(false);
  const [showVideoBrisas, setShowVideoBrisas] = useState(false);
  const [formNome, setFormNome] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCelular, setFormCelular] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      const nav = document.getElementById('main-nav');
      if (!header || !nav) return;
      if (window.scrollY > window.innerHeight * 0.7) {
        header.classList.add('backdrop-blur-md', 'shadow-sm');
        header.classList.remove('bg-transparent');
        nav.classList.remove('text-white');
        nav.classList.add('text-black');
      } else {
        header.classList.remove('backdrop-blur-md', 'shadow-sm');
        header.classList.add('bg-transparent');
        nav.classList.remove('text-black');
        nav.classList.add('text-white');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mensagem = `Olá, meu nome é ${formNome}. Queria mais informações sobre o Villa Gávea!`;
    const url = `https://wa.me/5534997711600?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header id="main-header" className="hidden md:block fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 h-[107px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Villa Gávea" width={100} height={34} />
          </div>
          {/* Menu */}
          <nav id="main-nav" className="hidden md:flex gap-8 text-sm font-semibold text-white">
            <a href="#oque" className="hover:text-red-700 transition">O QUE É</a>
            <a href="#brisas" className="hover:text-red-700 transition">BRISAS VILLA GÁVEA</a>
            <a href="#imagens" className="hover:text-red-700 transition">IMAGENS</a>
            <a href="#localizacao" className="hover:text-red-700 transition">LOCALIZAÇÃO</a>
            <a href="#quemsomos" className="hover:text-red-700 transition">QUEM SOMOS</a>
          </nav>
          <a href="#interesse" className="ml-4 bg-red-700 text-white px-5 py-2 rounded font-bold shadow hover:bg-red-800 transition">TENHO INTERESSE</a>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Banner Principal - CHEGAMOS AO FUTURO */}
        <section className="relative flex flex-col justify-end items-center min-h-[65vh] sm:min-h-screen pt-0 pb-0 overflow-hidden sm:pt-28 sm:pb-12">
          <Image src="/bc.png" alt="Fundo" quality={100} fill style={{objectFit: 'cover', zIndex: 0}} />
          {/* Topo do banner: logo e menu */}
          <div className="w-full flex justify-between items-center px-4 pt-6 absolute top-0 left-0 z-10">
            <Image src="/logo.png" alt="Villa Gávea" width={140} height={48} className="h-10 w-auto" />
            <button className="bg-red-700 rounded p-2 flex items-center justify-center">
              <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          {/* Texto principal sobre o banner */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full mt-32 mb-8">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-white text-center leading-tight drop-shadow-lg" style={{textShadow: '0 2px 16px rgba(0,0,0,0.5)'}}>CHEGAMOS AO FUTURO</h1>
          </div>
        </section>

        {/* Seção destaque com vídeo */}
        <section id="oque" className="relative w-full flex flex-col items-center justify-center min-h-[600px] md:min-h-[900px] bg-white px-3 sm:px-4 pb-2 sm:pb-8 -mt-12" style={{scrollMarginTop: '90px'}}>
          <div className="absolute top-0 left-0 w-full h-[300px] sm:h-[400px] md:h-[700px] bg-[#a10e0e] rounded-b-[32px] md:rounded-b-[80px] z-0"></div>
          <span className="relative z-10 text-base sm:text-xl md:text-3xl text-white text-center mb-1 mt-0 md:mt-10 block font-normal tracking-wide">O QUE É O VILLA GÁVEA</span>
          <div className="w-12 h-1 bg-orange-400 rounded-full mx-auto mb-4 mt-2"></div>
          <h2 className="relative z-10 text-2xl sm:text-2xl md:text-[64px] font-bold uppercase tracking-[-0.8px] text-white text-center mb-2 md:mb-10 leading-tight">
            UM MARCO NA HISTÓRIA DE UBERABA
          </h2>
          <a href="#interesse" className="relative z-10 bg-white/10 border border-white text-white font-bold px-6 py-3 rounded shadow hover:bg-white/20 transition block text-center text-lg w-full max-w-xs mx-auto mb-4 mt-2">TENHO INTERESSE</a>
          <div className="relative z-10 w-full max-w-full sm:max-w-[95vw] md:max-w-[1340px] h-[180px] sm:h-[320px] md:h-[662px] flex justify-center items-center mx-auto rounded-xl overflow-hidden shadow-2xl">
            {!showVideoTop ? (
              <div style={{position: 'relative', width: '100%', height: '100%', cursor: 'pointer'}} onClick={() => setShowVideoTop(true)}>
                <img src="/thumb.png" alt="Thumbnail do vídeo" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)'}} />
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 40, height: 40, background: 'rgba(255,255,255,0.85)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FFC107"/>
                    <polygon points="20,16 34,24 20,32" fill="white"/>
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UEFKEf-SLlI?autoplay=1"
                title="Conhecendo o Brisas Villa Gávea"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full bg-black rounded-lg md:rounded-2xl"
                style={{boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)'}}
              ></iframe>
            )}
          </div>
        </section>

        {/* Seção Brisas Villa Gávea */}
        <section id="brisas" className="bg-white pt-4 md:pt-24 pb-10 md:pb-24 px-3 sm:px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Coluna da esquerda: título e subtítulo */}
            <div>
              <h2 className="text-lg sm:text-2xl md:text-5xl font-extrabold mb-2 text-center md:text-left">
                <span className="text-pink-600">BRISAS VILLA GÁVEA.</span><br />
                <span className="text-gray-900 font-light">O FUTURO RENASCEU.</span>
              </h2>
            </div>
            {/* Coluna da direita: texto descritivo */}
            <div className="md:border-l md:pl-8 border-gray-300 text-gray-700 text-sm sm:text-base md:text-lg mt-4 md:mt-0 text-center md:text-left">
              MAIS RETORNO AO INVESTIMENTO E OUTRO NÍVEL EM QUALIDADE DE VIDA. ESTE É O INÍCIO DE UMA NOVA VIDA. E O RENASCIMENTO DE UMA OPORTUNIDADE QUE VOCÊ NÃO PODE PERDER.
            </div>
          </div>
          {/* Cards dos apartamentos */}
          <div className="max-w-6xl mx-auto mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col w-full max-w-full">
              <div className="relative h-48 sm:h-80 md:h-96 w-full">
                <img src="/mlkin.jpeg" alt="Brisa da Fonte" className="w-full h-full object-cover" />
                <span className="absolute top-2 left-0 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-r-xl shadow border-2 border-black" style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.15)'}}>PRONTO PRA MORAR</span>
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <img src="/logo.png" alt="Logo" className="h-7 sm:h-10 mb-1" />
                  <span className="text-white text-base sm:text-2xl font-light drop-shadow">Brisa da Fonte</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-6 py-4 sm:py-8 gap-2 sm:gap-0">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3h18v18M3 9h18" /></svg>
                  <span className="text-xs sm:text-sm">APARTAMENTOS A PARTIR DE <b>76M²</b></span>
                </div>
                <a href="https://wa.me/5534997711600?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Brisas%20Villa%20G%C3%A1vea." target="_blank" rel="noopener noreferrer" className="bg-orange-400 text-white font-bold px-4 py-3 rounded shadow hover:bg-orange-500 transition block text-center text-xs sm:text-base w-full sm:w-auto">SAIBA MAIS</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col w-full max-w-full">
              <div className="relative h-48 sm:h-80 md:h-96 w-full">
                <img src="/pessoall.jpeg" alt="Brisa do Bosque" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <img src="/logo.png" alt="Logo" className="h-7 sm:h-10 mb-1" />
                  <span className="text-white text-base sm:text-2xl font-light drop-shadow">Brisa do Bosque</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-6 py-4 sm:py-8 gap-2 sm:gap-0">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3h18v18M3 9h18" /></svg>
                  <span className="text-xs sm:text-sm">APARTAMENTOS A PARTIR DE <b>123M²</b></span>
                </div>
                <a href="https://wa.me/5534997711600?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Brisas%20Villa%20G%C3%A1vea." target="_blank" rel="noopener noreferrer" className="bg-orange-400 text-white font-bold px-4 py-3 rounded shadow hover:bg-orange-500 transition block text-center text-xs sm:text-base w-full sm:w-auto">SAIBA MAIS</a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Imagens */}
        <section id="imagens" className="relative py-24 px-4 overflow-hidden">
          {/* Fundo laranja com círculos */}
          <div className="absolute inset-0 bg-orange-400 z-0">
            <div className="absolute left-[-200px] top-[-100px] w-[600px] h-[600px] bg-orange-300 rounded-full opacity-30"></div>
            <div className="absolute right-[-200px] bottom-[-100px] w-[600px] h-[600px] bg-orange-300 rounded-full opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
            <span className="uppercase text-white/80 tracking-widest text-lg mb-2">IMAGENS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
              SEJA MUITO BEM VINDO.<br />
              <span className="text-orange-200">TUDO ISSO É PRA VOCÊ.</span>
            </h2>
            <div className="w-full flex flex-col sm:flex-row overflow-x-auto justify-center items-center gap-8" style={{marginTop: '32px', minWidth: 'unset'}}>
              <div className="rounded-2xl overflow-hidden shadow-xl w-full sm:w-[760px] h-[220px] sm:h-[389px] bg-white flex-shrink-0">
                <img src="/frente.jpeg" alt="Imagem 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl w-full sm:w-[760px] h-[220px] sm:h-[389px] bg-white flex-shrink-0">
                <img src="/locporcima.jpeg" alt="Imagem 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Localização */}
        <section id="localizacao" className="pt-24 px-0 bg-white" style={{marginBottom: 0, paddingBottom: 0}}>
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <span className="uppercase text-gray-500 tracking-widest text-lg mb-2 flex items-center justify-center">
              LOCALIZAÇÃO
            </span>
            <span className="w-12 h-1 bg-orange-400 rounded-full inline-block mb-6"></span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">
              PERTO DO QUE UBERABA TEM DE MELHOR.<br />
              <span className="font-black">TUDO NO MESMO LUGAR.</span>
            </h2>
          </div>
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{marginBottom: 0, paddingBottom: 0}}>
            <img src="/loc.jpeg" alt="Localização Villa Gávea" className="w-full h-[713px] object-cover sm:h-auto align-bottom" style={{display: 'block', marginBottom: 0}} />
          </div>
        </section>

        {/* Seção Conhecendo o Brisas Villa Gávea */}
        <section className="w-full flex flex-col items-center relative" style={{
          paddingTop: 0,
          marginTop: 0,
          paddingBottom: '5rem',
          zIndex: 1,
          background: 'transparent'
        }}>
          <div style={{
            width: '2518px',
            height: '690px',
            background: '#b833b8',
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translateX(-50%)',
            zIndex: 0
          }}></div>
          {/* Círculos decorativos grandes */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute left-[-200px] top-[-100px] w-[600px] h-[600px] bg-pink-400 rounded-full opacity-20"></div>
            <div className="absolute right-[-200px] bottom-[-100px] w-[600px] h-[600px] bg-pink-400 rounded-full opacity-20"></div>
          </div>
          <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center mx-auto px-4" style={{minHeight: '690px'}}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight md:leading-[1.1] mb-10 mt-16 md:mt-24" style={{letterSpacing: '-1px'}}>
              CONHECENDO O <br />
              <span className="font-black">BRISAS VILLA GÁVEA</span>
            </h2>
            <div className="flex justify-center items-center" style={{marginTop: '24px'}}>
              {/* Thumbnail customizada para o vídeo */}
              {!showVideoBrisas ? (
                <div style={{position: 'relative', width: 389, height: 662, cursor: 'pointer'}} onClick={() => setShowVideoBrisas(true)}>
                  <img src="/ap.jpeg" alt="Thumbnail do vídeo" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)'}} />
                  <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 80, height: 80, background: 'rgba(255,255,255,0.85)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#FFC107"/>
                      <polygon points="20,16 34,24 20,32" fill="white"/>
                    </svg>
                  </div>
                </div>
              ) : (
                <iframe
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/lv7k8rh6eP4?autoplay=1"
                  title="Conhecendo o Brisas Villa Gávea"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl shadow-xl object-cover bg-black"
                  style={{boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)'}}
                ></iframe>
              )}
            </div>
          </div>
        </section>

        {/* Seção Quem Somos */}
        <section id="quemsomos" className="py-24 px-4 bg-white font-sans relative overflow-hidden">
          {/* Gradiente suave no fundo */}
          <div className="absolute inset-0 z-0" style={{background: 'linear-gradient(120deg, #fff 60%, #f7e7ce 100%)', opacity: 0.7}}></div>
          {/* Círculos decorativos mais suaves */}
          <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-pink-100 rounded-full opacity-20 z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-50 rounded-full opacity-10 z-0"></div>
          {/* SVG de linhas curvas douradas */}
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 z-0" width="420" height="420" fill="none" viewBox="0 0 420 420" style={{opacity: 0.18}}>
            <path d="M40 380 Q210 200 380 380" stroke="#bfa14a" strokeWidth="3" fill="none" />
            <path d="M80 340 Q210 200 340 340" stroke="#bfa14a" strokeWidth="2" fill="none" />
          </svg>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Coluna da esquerda: texto estilizado */}
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-[#222] mb-2 leading-tight tracking-tight uppercase">QUEM SOMOS</h2>
              {/* Linha dourada abaixo do título */}
              <div className="w-24 h-1 rounded-full mb-8" style={{background: 'linear-gradient(90deg, #bfa14a 0%, #fffbe6 100%)'}}></div>
              <div className="text-3xl md:text-4xl font-bold" style={{color: '#d90429', textTransform: 'uppercase', marginBottom: '1rem'}}>Donna Negociações Imobiliárias</div>
              <div className="text-xl md:text-2xl text-gray-800 mb-6 font-normal">Mais do que imóveis, realizamos sonhos.</div>
              <div className="text-lg md:text-xl text-gray-900 mb-2 font-semibold">Por que escolher a Donna?</div>
              <ul className="text-lg md:text-xl text-gray-700 space-y-2 list-disc list-inside text-left mb-2 font-light">
                <li>Atendimento humano e personalizado</li>
                <li>Transparência e segurança em cada etapa</li>
                <li>Paixão por transformar casas em lares</li>
                <li>O imóvel certo, com o cuidado que você merece.</li>
              </ul>
            </div>
            {/* Coluna da direita: imagem */}
            <div className="flex justify-center items-center flex-col relative" style={{position: 'relative'}}>
              {/* Barra roxa alinhada ao topo da imagem */}
              <div style={{
                position: 'absolute',
                left: 20,
                top: 90,
                width: 60,
                height: 4,
                background: '#A000C8',
                borderRadius: '2px',
                zIndex: 2
              }}></div>
              <img src="/homem.png" alt="Homem" style={{width: '720px', height: '709px', objectFit: 'contain'}} />
            </div>
          </div>
          {/* Barra de separação atravessando a página */}
          <div style={{width: '100vw', height: '2px', background: '#e0e0e0', margin: '0 calc(50% - 50vw)', borderRadius: '2px'}}></div>
        </section>

        {/* Seção Formulário de Interesse */}
        <section id="interesse" className="py-24 px-4 bg-white flex flex-col items-center relative overflow-hidden">
          {/* Gradiente suave no fundo */}
          <div className="absolute inset-0 z-0" style={{background: 'linear-gradient(120deg, #fff 60%, #ffe3f3 100%)', opacity: 0.7}}></div>
          {/* Círculos decorativos */}
          <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-pink-100 rounded-full opacity-20 z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-50 rounded-full opacity-10 z-0"></div>
          {/* SVG de linhas curvas douradas */}
          <svg className="absolute left-0 top-1/2 -translate-y-1/2 z-0" width="420" height="420" fill="none" viewBox="0 0 420 420" style={{opacity: 0.18}}>
            <path d="M40 380 Q210 200 380 380" stroke="#bfa14a" strokeWidth="3" fill="none" />
            <path d="M80 340 Q210 200 340 340" stroke="#bfa14a" strokeWidth="2" fill="none" />
          </svg>
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center relative z-10">
            <span className="uppercase text-gray-400 tracking-widest text-lg mb-2 text-center">TENHO INTERESSE</span>
            {/* Barra rosa abaixo do título */}
            <div className="w-16 h-1 bg-pink-400 rounded-full mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">
              SAIBA MAIS SOBRE<br />
              <span className="font-black">O BRISAS</span>
            </h2>
            {/* Cartão do formulário com sombra e borda arredondada */}
            <form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-6 bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12" style={{backdropFilter: 'blur(2px)'}}>
              <div className="flex flex-col gap-2">
                <label className="uppercase text-xs text-gray-600 font-semibold tracking-widest" htmlFor="nome">Seu nome</label>
                <input id="nome" type="text" placeholder="Seu nome" value={formNome} onChange={e => setFormNome(e.target.value)} className="px-4 py-4 rounded bg-gray-100 text-gray-800 placeholder-gray-400 font-semibold outline-none w-full text-lg" required />
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="uppercase text-xs text-gray-600 font-semibold tracking-widest" htmlFor="email">Seu e-mail</label>
                  <input id="email" type="email" placeholder="Seu e-mail" value={formEmail} onChange={e => setFormEmail(e.target.value)} className="px-4 py-4 rounded bg-gray-100 text-gray-800 placeholder-gray-400 font-semibold outline-none w-full text-lg" required />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="uppercase text-xs text-gray-600 font-semibold tracking-widest" htmlFor="celular">Seu celular</label>
                  <input id="celular" type="tel" placeholder="Seu celular" value={formCelular} onChange={e => setFormCelular(e.target.value)} className="px-4 py-4 rounded bg-gray-100 text-gray-800 placeholder-gray-400 font-semibold outline-none w-full text-lg" required />
                </div>
              </div>
              <button type="submit" className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold py-4 rounded shadow-lg text-lg mt-4 transition block text-center">QUERO SABER MAIS</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-[#A000C8] text-white py-6 text-center text-sm mt-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} Villa Gávea Uberaba. Todos os direitos reservados.</span>
          <span>Desenvolvido para fins de demonstração.</span>
        </div>
      </footer>
    </div>
  );
}
