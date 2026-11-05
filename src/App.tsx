/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';


const CAROUSEL_ITEMS = [
  {
    src: '/imagens/tarefa-sopro-barquinho.webp',
    alt: 'Tarefa de casa 01: Sopro do barquinho',
    width: 700,
    height: 990,
  },
  {
    src: '/imagens/pagina-relatorio-escola.webp',
    alt: 'Relatório fonoaudiológico para a escola (Word)',
    width: 700,
    height: 906,
  },
  {
    src: '/imagens/tarefa-corrida-bolinhas.webp',
    alt: 'Tarefa de casa 02: Corrida de bolinhas',
    width: 700,
    height: 990,
  },
  {
    src: '/imagens/pagina-anamnese.webp',
    alt: 'Anamnese fonoaudiológica, criança de 2 a 6 anos (Word)',
    width: 700,
    height: 906,
  },
  {
    src: '/imagens/pagina-plano-terapeutico.webp',
    alt: 'Plano terapêutico: atraso de linguagem (Word)',
    width: 700,
    height: 906,
  },
  {
    src: '/imagens/tarefa-bolhas-no-copo.webp',
    alt: 'Tarefa de casa 03: Bolhas no copo',
    width: 700,
    height: 990,
  },
  {
    src: '/imagens/pagina-contrato.webp',
    alt: 'Contrato com a família (Word)',
    width: 700,
    height: 906,
  },
  {
    src: '/imagens/pagina-orientacoes.webp',
    alt: 'Orientações para casa: trocas na fala',
    width: 700,
    height: 906,
  },
  {
    src: '/imagens/pagina-planilha.webp',
    alt: 'Planilha: quanto cobrar na fono infantil (Excel)',
    width: 700,
    height: 906,
  },
];

export default function App() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [showPremiumOfferModal, setShowPremiumOfferModal] = useState(false);
  const [showCompletoDiscountModal, setShowCompletoDiscountModal] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoEl = entry.target as HTMLVideoElement;
            const playPromise = videoEl.play();
            if (playPromise && playPromise.catch) {
              playPromise.catch(() => {});
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        io.observe(video);
      }
    });

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="topbar">
        <span>🗣️ Para fonoaudiólogas que atendem crianças</span>
      </div>

      <main>
        {/* 1. HERÓI · sem preço */}
        <header className="hero">
          <div className="col">
            <img
              className="hero-logo"
              src="/imagens/logo.webp"
              alt="Maleta da Fono Infantil"
              width={591}
              height={426}
            />
            <span className="tag">
              <i></i>App + Word + tarefas ilustradas
            </span>
            <h1>
              <mark>500+ Recursos Prontos</mark> para Fono Infantil: Tudo o Que Você Precisa, do Primeiro Atendimento ao Relatório Escolar!
            </h1>
            <p className="sub">
              Pare de montar relatório do zero. Você marca a avaliação no <b>app</b> e o documento sai pronto pra
              editar, e a família leva pra casa uma <b>tarefa ilustrada</b> que ela finalmente faz.
            </p>
            <img
              className="mock"
              src="/assets/aistudio/Kit_FonoKids_Premium_Interativo_e3e1f77f.png"
              alt="Maleta da Fono Infantil: maleta com as tarefas de casa, os relatórios, o app no celular e objetos de fonoaudiologia"
              width={1496}
              height={906}
              fetchPriority="high"
              decoding="async"
            />
            <ul className="hero-list">
              <li>
                41 documentos editáveis em Word: contrato, anamneses, relatório pra escola, devolutiva, plano de saúde
              </li>
              <li>App que monta o relatório a partir da sua avaliação, no celular ou no computador</li>
              <li>100 tarefas de casa ilustradas com o Léo e a Bia, pra mandar no WhatsApp dos pais</li>
              <li>Planos terapêuticos por queixa: atraso de linguagem, TEA, fonológico, gagueira e mais</li>
            </ul>
            <div className="buy">
              <a className="btn" href="#bonus">
                Quero a Maleta da Fono Infantil
                <small>Ver a oferta · acesso na hora</small>
              </a>
              <p className="micro">Você recebe tudo no e-mail, logo após o pagamento</p>
              <a className="more-link" href="#maleta">
                Ver tudo o que vem na maleta ↓
              </a>
            </div>
            <div className="stats" aria-label="A maleta em números">
              <div>
                <b>82</b>
                <span>documentos</span>
              </div>
              <div>
                <b>200</b>
                <span>tarefas de casa</span>
              </div>
              <div>
                <b>10</b>
                <span>relatórios no app</span>
              </div>
              <div>
                <b>14</b>
                <span>dias de garantia</span>
              </div>
            </div>
          </div>
        </header>

        {/* 2. VEJA POR DENTRO */}
        <section className="block">
          <div className="col flow center">
            <span className="eyebrow">Páginas reais da maleta</span>
            <h2>Veja por dentro antes de comprar</h2>
            <div className="strip-viewport" aria-label="Páginas da Maleta da Fono Infantil">
              <div className="strip-track" role="list">
                {[...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS].map((item, idx) => (
                  <div className="strip-item" role="listitem" key={`${item.src}-${idx}`}>
                    <img
                      className="shot"
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="eager"
                      decoding="async"
                      onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="hint">Clique em qualquer página para ampliar 🔍</p>
            <div className="buy">
              <a className="btn" href="#planos">
                Quero essa maleta
                <small>Ver a oferta</small>
              </a>
            </div>
          </div>
        </section>

        {/* 3. O APP POR DENTRO */}
        <section className="block tight">
          <div className="col flow center">
            <span className="eyebrow">O app por dentro</span>
            <h2>Da avaliação ao relatório pra escola, sem começar do zero</h2>
            <div className="app">
              <article>
                <img
                  className="mock"
                  src="/imagens/app-1-crianca.webp"
                  alt="Tela do app: ficha da criança"
                  loading="lazy"
                  decoding="async"
                />
                <span className="step">
                  <i>1</i>Cadastre
                </span>
                <h3>A criança e a queixa</h3>
                <p>Nome, idade, escola e responsáveis, uma vez só.</p>
              </article>
              <article>
                <video
                  ref={(el) => {
                    videoRefs.current[0] = el;
                  }}
                  className="mock"
                  src="/imagens/app-2-avaliacao.mp4"
                  poster="/imagens/app-2-avaliacao.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Tela do app: avaliação de fala e fonologia"
                />
                <span className="step">
                  <i>2</i>Avalie
                </span>
                <h3>Marque o que observou</h3>
                <p>Linguagem, fala, motricidade orofacial, fluência.</p>
              </article>
              <article>
                <video
                  ref={(el) => {
                    videoRefs.current[1] = el;
                  }}
                  className="mock"
                  src="/imagens/app-3-relatorio.mp4"
                  poster="/imagens/app-3-relatorio.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Tela do app: relatório para a escola pronto para editar"
                />
                <span className="step">
                  <i>3</i>Gere
                </span>
                <h3>O relatório sai pronto</h3>
                <p>Pra escola, pros pais, pro plano de saúde. Você revisa e baixa em Word ou PDF.</p>
              </article>
              <article>
                <video
                  ref={(el) => {
                    videoRefs.current[2] = el;
                  }}
                  className="mock"
                  src="/imagens/app-4-tarefa.mp4"
                  poster="/imagens/app-4-tarefa.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Tela do app: tarefa de casa com botão de enviar no WhatsApp"
                />
                <span className="step">
                  <i>4</i>Envie
                </span>
                <h3>A tarefa da semana</h3>
                <p>Escolha pela queixa e mande no WhatsApp dos pais.</p>
              </article>
            </div>
            <p className="muted">Funciona no celular e no computador. Os dados das crianças ficam só no seu aparelho.</p>
          </div>
        </section>

        {/* 4. DORES */}
        <section className="block tight">
          <div className="col flow center">
            <span className="eyebrow">Você se identifica?</span>
            <h2>A faculdade ensinou a avaliar. Ninguém ensinou a papelada.</h2>
            <div className="pains">
              <article>
                <h3>Ficha improvisada na véspera</h3>
                <p>Toda semana montando anamnese e ficha de sessão do zero.</p>
              </article>
              <article>
                <h3>Relatório que toma o domingo</h3>
                <p>A escola pede, os pais pedem, o plano pede. E cada um de um jeito.</p>
              </article>
              <article>
                <h3>Os pais não fazem nada em casa</h3>
                <p>A orientação vai num papelzinho e a criança volta igual na semana seguinte.</p>
              </article>
              <article>
                <h3>Falta, reposição e cobrança</h3>
                <p>Sem contrato, você fica sem jeito de cobrar a sessão desmarcada em cima da hora.</p>
              </article>
            </div>
            <p className="pains-why">
              <strong>Isso não é falta de preparo.</strong> O curso ensina a parte clínica e deixa de fora os
              documentos, a orientação à família e o lado prático do consultório. A maleta entrega essa parte pronta.
            </p>
          </div>
        </section>

        {/* 5. ANTES E DEPOIS */}
        <section className="block tight">
          <div className="col flow center">
            <h2>O que muda na próxima sessão</h2>
            <div className="vs">
              <div className="sem">
                <h3>Sem a maleta</h3>
                <ul>
                  <li>Orientação escrita no verso de uma folha</li>
                  <li>Relatório pra escola feito do zero, à noite</li>
                  <li>A família esquece o que era pra fazer</li>
                  <li>Falta sem aviso e sem cobrança</li>
                </ul>
              </div>
              <div className="com">
                <h3>Com a maleta</h3>
                <ul>
                  <li>Tarefa ilustrada com passo a passo e registro da semana</li>
                  <li>Relatório montado a partir da sua avaliação</li>
                  <li>A criança volta com o exercício treinado</li>
                  <li>Contrato com regra de falta e reposição</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PARA QUEM É */}
        <section className="block tight">
          <div className="col flow center">
            <h2>É pra você que…</h2>
            <div className="fit">
              <ul>
                <li>acabou de se formar e vai atender as primeiras crianças</li>
                <li>atende autismo, atraso de fala e trocas e monta tudo do zero</li>
                <li>atende em casa (domiciliar) e precisa de tudo no celular</li>
                <li>tem consultório próprio e quer padronizar os documentos</li>
                <li>atende por convênio ou reembolso e precisa de relatório pro plano</li>
              </ul>
            </div>
            <p className="fit-note">Se você se identificou com pelo menos 2 itens, a maleta foi feita pra você.</p>
          </div>
        </section>

        {/* 7. MÉTODO */}
        <section className="block tight">
          <div className="col flow center">
            <span className="mech-name">Método Sessão ao Relatório</span>
            <h2>Tudo na ordem em que a criança passa pelo seu consultório</h2>
            <div className="mech">
              <div>
                <p>
                  <b>Chegada</b>
                  <span>Contrato, termos e anamnese da idade certa.</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Avaliação</b>
                  <span>Roteiro por queixa e idade e fichas de registro.</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Plano terapêutico</b>
                  <span>Objetivos e condutas para cada queixa.</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Sessão e evolução</b>
                  <span>Ficha de sessão, evolução do mês e tarefa de casa.</span>
                </p>
              </div>
              <div className="hl">
                <p>
                  <b>Documentos pra fora</b>
                  <span>O que a escola, a família e o plano de saúde pedem, montado a partir da sua avaliação.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. O QUE VOCÊ RECEBE */}
        <section className="block tight" id="maleta">
          <div className="col flow center">
            <span className="eyebrow">O que vem na maleta</span>
            <h2>+200 recursos, separados por etapa do atendimento</h2>
            <div className="parts">
              <div className="group">
                <h3>1 · Chegada e avaliação · 15 itens</h3>
                <details>
                  <summary>
                    <span className="num">01</span>
                    <p>
                      <b>
                        Contrato e termos <em className="fmt">Word</em>
                      </b>
                      <span>4 modelos</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>Contrato com a família (faltas, reposição, reajuste e pagamento)</li>
                      <li>Termo de consentimento e LGPD</li>
                      <li>Autorização de contato com a escola e a equipe</li>
                      <li>Autorização de uso de imagem</li>
                    </ul>
                  </div>
                </details>
                <details>
                  <summary>
                    <span className="num">02</span>
                    <p>
                      <b>
                        Anamneses <em className="fmt">Word</em>
                      </b>
                      <span>4 modelos</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>Bebê (0 a 2 anos), criança (2 a 6) e escolar (6 a 12)</li>
                      <li>Questionário para a professora</li>
                    </ul>
                  </div>
                </details>
                <details>
                  <summary>
                    <span className="num">03</span>
                    <p>
                      <b>
                        Roteiro de avaliação por queixa e idade <em className="fmt">Word</em>
                      </b>
                      <span>1 guia</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>O que observar, qual instrumento usar, onde adquirir e quantas sessões</li>
                    </ul>
                  </div>
                </details>
                <details>
                  <summary>
                    <span className="num">04</span>
                    <p>
                      <b>
                        Fichas de registro da avaliação <em className="fmt">Word</em>
                      </b>
                      <span>6 fichas</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>
                        Triagem, linguagem, fala e fonologia, motricidade orofacial e respiração, fluência, marcos do
                        desenvolvimento
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="group">
                <h3>2 · Terapia · 10 itens</h3>
                <details>
                  <summary>
                    <span className="num">05</span>
                    <p>
                      <b>
                        Planos terapêuticos por queixa <em className="fmt">Word</em>
                      </b>
                      <span>6 planos</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>
                        Atraso de linguagem, TEA, transtorno fonológico, gagueira, respiração oral e motricidade,
                        leitura e escrita
                      </li>
                    </ul>
                  </div>
                </details>
                <details>
                  <summary>
                    <span className="num">06</span>
                    <p>
                      <b>
                        Sessão e evolução <em className="fmt">Word</em>
                      </b>
                      <span>4 modelos</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>Ficha de sessão, evolução mensal, controle de frequência, reavaliação e alta</li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="group">
                <h3>3 · Documentos pra fora · 8 itens + app</h3>
                <details>
                  <summary>
                    <span className="num">07</span>
                    <p>
                      <b>
                        Relatórios e documentos <em className="fmt">Word</em>
                        <em className="fmt app-t">no app</em>
                      </b>
                      <span>8 modelos</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>Relatório de avaliação e devolutiva aos pais</li>
                      <li>Relatório pra escola e sugestões de adaptação pra sala de aula</li>
                      <li>Relatório pro plano de saúde ou reembolso</li>
                      <li>
                        Encaminhamento (otorrino, audiologia, neuro, psicologia, TO), declaração de comparecimento e
                        alta
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="group">
                <h3>4 · Família · 106 itens</h3>
                <details>
                  <summary>
                    <span className="num">08</span>
                    <p>
                      <b>
                        100 tarefas de casa ilustradas <em className="fmt">PDF + imagem</em>
                        <em className="fmt app-t">no app</em>
                      </b>
                      <span>com o Léo e a Bia, em 6 áreas</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <div className="areas">
                      <span className="bg-[#3B8FD9]">
                        Sopro e respiração <b>12</b>
                      </span>
                      <span className="bg-[#8A63D2]">
                        Lábios, língua e bochechas <b>18</b>
                      </span>
                      <span className="bg-[#E0624B]">
                        Sons da fala <b>24</b>
                      </span>
                      <span className="bg-[#1FA392]">
                        Consciência fonológica <b>18</b>
                      </span>
                      <span className="bg-[#C98A00]">
                        Vocabulário e frases <b>18</b>
                      </span>
                      <span className="bg-[#D9488F]">
                        Escuta e atenção <b>10</b>
                      </span>
                    </div>
                    <ul>
                      <li>Objetivo, material de casa, 4 passos ilustrados, quantas vezes e dica pra família</li>
                      <li>Registro da semana com carinhas, pra família trazer de volta</li>
                    </ul>
                  </div>
                </details>
                <details>
                  <summary>
                    <span className="num">09</span>
                    <p>
                      <b>
                        Orientações pra casa <em className="fmt">PDF</em>
                      </b>
                      <span>6 folhas, uma por queixa</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>Pra entregar aos pais no fim da sessão</li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="group">
                <h3>5 · Consultório · 2 itens</h3>
                <details>
                  <summary>
                    <span className="num">10</span>
                    <p>
                      <b>
                        Planilhas <em className="fmt">Excel</em>
                      </b>
                      <span>2 planilhas</span>
                    </p>
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>Quanto cobrar: sessão, pacote de avaliação e relatório</li>
                      <li>Pacientes, sessões e recebimentos, com recibo pra reembolso e IR</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div className="buy">
              <a className="btn" href="#planos">
                Quero a maleta completa
                <small>Ver a oferta</small>
              </a>
            </div>
          </div>
        </section>

        {/* 9. BÔNUS */}
        <section className="block deep" id="bonus">
          <div className="col flow center !gap-3">
            <h2>Isso já seria suficiente.</h2>
            <p className="muted text-sm">Mas no plano completo você ainda leva 6 bônus:</p>
            <div className="bonus">
              <article>
                <img
                  className="mock"
                  src="/imagens/bonus-1.webp"
                  alt="Capa do bônus 1: Primeira Sessão sem Medo"
                  width={1000}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  onClick={() =>
                    setSelectedImage({
                      src: '/imagens/bonus-1.webp',
                      alt: 'Capa do bônus 1: Primeira Sessão sem Medo',
                    })
                  }
                />
                <div className="bonus-body">
                  <div className="bonus-meta">
                    <span className="n">Bônus 1</span>
                    <span className="v">
                      <del>R$ 19,90</del>
                      <b>Grátis</b>
                    </span>
                  </div>
                  <h3>Primeira sessão sem medo</h3>
                  <p>Roteiro da conversa com os pais e mensagens prontas de WhatsApp.</p>
                </div>
              </article>

              <article>
                <img
                  className="mock"
                  src="/imagens/bonus-2.webp"
                  alt="Capa do bônus 2: Marcos da Fala de 0 a 8 anos"
                  width={982}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  onClick={() =>
                    setSelectedImage({
                      src: '/imagens/bonus-2.webp',
                      alt: 'Capa do bônus 2: Marcos da Fala de 0 a 8 anos',
                    })
                  }
                />
                <div className="bonus-body">
                  <div className="bonus-meta">
                    <span className="n">Bônus 2</span>
                    <span className="v">
                      <del>R$ 14,90</del>
                      <b>Grátis</b>
                    </span>
                  </div>
                  <h3>Painel dos marcos da fala</h3>
                  <p>Do nascimento aos 8 anos, ilustrado, pra mostrar na devolutiva.</p>
                </div>
              </article>

              <article>
                <img
                  className="mock"
                  src="/imagens/bonus-3.webp"
                  alt="Capa do bônus 3: 60 Atividades de Sessão"
                  width={1000}
                  height={695}
                  loading="lazy"
                  decoding="async"
                  onClick={() =>
                    setSelectedImage({
                      src: '/imagens/bonus-3.webp',
                      alt: 'Capa do bônus 3: 60 Atividades de Sessão',
                    })
                  }
                />
                <div className="bonus-body">
                  <div className="bonus-meta">
                    <span className="n">Bônus 3</span>
                    <span className="v">
                      <del>R$ 24,90</del>
                      <b>Grátis</b>
                    </span>
                  </div>
                  <h3>60 atividades de sessão</h3>
                  <p>Por objetivo, com material simples que você já tem no consultório.</p>
                </div>
              </article>

              <article>
                <img
                  className="mock"
                  src="/imagens/bonus-4.webp"
                  alt="Capa do bônus 4: Pranchas de Comunicação TEA"
                  width={925}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  onClick={() =>
                    setSelectedImage({
                      src: '/imagens/bonus-4.webp',
                      alt: 'Capa do bônus 4: Pranchas de Comunicação TEA',
                    })
                  }
                />
                <div className="bonus-body">
                  <div className="bonus-meta">
                    <span className="n">Bônus 4</span>
                    <span className="v">
                      <del>R$ 19,90</del>
                      <b>Grátis</b>
                    </span>
                  </div>
                  <h3>Pranchas de comunicação pra TEA</h3>
                  <p>Figuras ilustradas com o Léo e a Bia pra usar na sessão ou tablet.</p>
                </div>
              </article>

              <article>
                <img
                  className="mock"
                  src="/imagens/bonus-5.webp"
                  alt="Capa do bônus 5: Guia do Reembolso e Plano de Saúde"
                  width={1000}
                  height={682}
                  loading="lazy"
                  decoding="async"
                  onClick={() =>
                    setSelectedImage({
                      src: '/imagens/bonus-5.webp',
                      alt: 'Capa do bônus 5: Guia do Reembolso e Plano de Saúde',
                    })
                  }
                />
                <div className="bonus-body">
                  <div className="bonus-meta">
                    <span className="n">Bônus 5</span>
                    <span className="v">
                      <del>R$ 19,90</del>
                      <b>Grátis</b>
                    </span>
                  </div>
                  <h3>Guia do reembolso e plano de saúde</h3>
                  <p>Passo a passo pro reembolso, recibo correto e como evitar negativas.</p>
                </div>
              </article>

              <article>
                <img
                  className="mock"
                  src="/imagens/bonus-6.webp"
                  alt="Capa do bônus 6: Kit Atendimento Domiciliar e Online"
                  width={952}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  onClick={() =>
                    setSelectedImage({
                      src: '/imagens/bonus-6.webp',
                      alt: 'Capa do bônus 6: Kit Atendimento Domiciliar e Online',
                    })
                  }
                />
                <div className="bonus-body">
                  <div className="bonus-meta">
                    <span className="n">Bônus 6</span>
                    <span className="v">
                      <del>R$ 14,90</del>
                      <b>Grátis</b>
                    </span>
                  </div>
                  <h3>Kit atendimento domiciliar e online</h3>
                  <p>Checklist, cláusulas pro contrato e 15 atividades que funcionam online.</p>
                </div>
              </article>
            </div>
            <p className="sum-line">
              Valor dos 6 bônus: <b>R$ 114,40</b>. Todos grátis no plano completo.
            </p>
          </div>
        </section>

        {/* 10. OFERTA */}
        <section className="block deep tight" id="planos">
          <div className="col flow center">
            <span className="eyebrow">Pagamento único</span>
            <h2>
              Escolha a <mark>melhor oferta</mark>
            </h2>
            <div className="plans">
              <div className="plan">
                <h3>Plano Básico</h3>
                <ul className="ticks">
                  <li>41 documentos editáveis em Word</li>
                  <li>Acesso por 1 ano</li>
                  <li>7 dias de garantia</li>
                  <li className="off">App com relatório automático</li>
                  <li className="off">100 tarefas de casa ilustradas</li>
                  <li className="off">6 bônus</li>
                </ul>
                <p className="alert">⚠️ Versão resumida: só os documentos, sem o app, as tarefas e os bônus.</p>
                <p className="big mt-[14px]">
                  <sup>R$</sup>17,90
                </p>
                <p className="terms">Pagamento único</p>
                <button
                  type="button"
                  className="btn-quiet"
                  onClick={() => setShowPremiumOfferModal(true)}
                >
                  Quero só o básico
                </button>
              </div>

              <div className="plan top">
                <span className="flag">⭐ Mais escolhido · melhor negócio</span>
                <h3>Plano Completo</h3>
                <img
                  className="mock mt-[14px] mb-[4px]"
                  src="/assets/aistudio/Kit_FonoKids_Premium_Interativo_e3e1f77f.png"
                  alt="Tudo o que vem no plano completo da Maleta da Fono Infantil"
                  width={1496}
                  height={906}
                  loading="lazy"
                  decoding="async"
                />
                <ul className="ticks">
                  <li>41 documentos editáveis em Word + 2 planilhas prontas para uso</li>
                  <li>App que transforma suas avaliações em relatórios profissionais</li>
                  <li>500 tarefas de casa ilustradas com Léo e Bia</li>
                  <li>
                    6 bônus exclusivos: primeira sessão, marcos da fala, 60 atividades, pranchas TEA, reembolso e
                    atendimentos domiciliares e online
                  </li>
                  <li>Acesso vitalício + atualizações gratuitas</li>
                  <li>Garantia de 7 dias: seu investimento protegido</li>
                </ul>
                <div className="value" aria-label="Valor separado">
                  <div>
                    <span>41 documentos + planilhas</span>
                    <span>R$ 67,00</span>
                  </div>
                  <div>
                    <span>App com relatório automático</span>
                    <span>R$ 47,00</span>
                  </div>
                  <div>
                    <span>100 tarefas de casa</span>
                    <span>R$ 47,00</span>
                  </div>
                  <div>
                    <span>6 bônus</span>
                    <span>R$ 114,40</span>
                  </div>
                  <div className="t">
                    <span>Valor separado</span>
                    <span>R$ 275,40</span>
                  </div>
                </div>
                <p className="from">
                  De <del>R$ 197,00</del> por apenas
                </p>
                <p className="big">
                  <sup>R$</sup>37,00
                </p>
                <p className="terms">à vista no Pix, ou parcelado no cartão</p>
                <span className="saved">Você economiza R$ 160,00</span>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowCompletoDiscountModal(true)}
                >
                  Sim! Quero o completo
                  <small>Acesso liberado em minutos</small>
                </button>
              </div>
            </div>
            <p className="secure">
              <span>🔒 Pagamento 100% seguro</span>
              <span>Pix ou cartão</span>
              <span>Acesso enviado por e-mail na hora</span>
            </p>
            <p className="muted">Valor de lançamento.</p>
          </div>
        </section>

        {/* 11. COMO FUNCIONA + GARANTIA */}
        <section className="block">
          <div className="col flow">
            <h2 className="center">Como funciona</h2>
            <div className="steps">
              <div>
                <p>
                  <b>Finalize a compra</b>
                  <span>Pix ou cartão, em ambiente 100% seguro.</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Receba no e-mail</b>
                  <span>O link do app e dos arquivos chega em poucos minutos.</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Coloque sua logo e atenda</b>
                  <span>Use já na próxima criança que chegar.</span>
                </p>
              </div>
            </div>
            <div className="guard">
              <div className="seal">
                7
                <small>
                  dias de
                  <br />
                  garantia
                </small>
              </div>
              <p>
                <b>Risco zero.</b> Você tem 7 dias para conhecer tudo. Se não gostar, devolvemos 100% do valor, sem
                perguntas.
              </p>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="block tight">
          <div className="col flow">
            <h2 className="center">Perguntas frequentes</h2>
            <div className="faq">
              <details>
                <summary>Serve pra quem acabou de se formar?</summary>
                <p>Sim. O roteiro de avaliação e o método mostram a ordem do atendimento, do primeiro contato à alta.</p>
              </details>
              <details>
                <summary>Os documentos são editáveis? Posso pôr minha logo?</summary>
                <p>Sim. Os documentos vêm em Word, com espaço pra sua logo, seu nome e seu CRFa.</p>
              </details>
              <details>
                <summary>A maleta traz testes padronizados?</summary>
                <p>
                  Não. Testes comerciais têm direito autoral. O roteiro mostra qual usar em cada queixa e idade e onde
                  adquirir. As fichas da maleta são de registro.
                </p>
              </details>
              <details>
                <summary>O app guarda os dados das crianças na internet?</summary>
                <p>
                  Não. Os dados ficam só no seu celular ou computador, e você pode fazer uma cópia de segurança quando
                  quiser.
                </p>
              </details>
              <details>
                <summary>Serve pra quem atende convênio?</summary>
                <p>
                  Sim. Tem relatório pro plano de saúde e pra reembolso, além de recibo e controle de sessões.
                </p>
              </details>
              <details>
                <summary>É físico ou digital? Preciso de programa pago?</summary>
                <p>
                  Digital. O app abre no navegador, sem instalar nada. Os arquivos abrem no Word e no Excel, no Google
                  Docs ou nos apps gratuitos do celular.
                </p>
              </details>
              <details>
                <summary>O pagamento é único? E se eu não gostar?</summary>
                <p>
                  Sim, sem mensalidade. E você tem 7 dias de garantia: pediu, devolvemos 100% do valor.
                </p>
              </details>
            </div>
            <div className="buy">
              <a className="btn" href="#planos">
                Quero a Maleta da Fono Infantil
                <small>+200 recursos + 6 bônus por R$ 37</small>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="col">
          <p>
            Material de apoio profissional para fonoaudiólogas. Não substitui a avaliação e a conduta da profissional
            responsável pelo caso. Uso individual: é proibido revender ou distribuir os arquivos.
          </p>
          <p>Este site não é afiliado ao Facebook nem à Meta.</p>
          <p>© 2026 Maleta da Fono Infantil. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Lightbox para ampliar páginas reais da maleta */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl overflow-auto rounded-2xl bg-white p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#3E2A73] text-lg font-bold text-white shadow-md hover:bg-[#4A3485]"
              aria-label="Fechar visualização"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="mx-auto block max-h-[82vh] w-auto rounded-lg"
            />
            <p className="mt-2 text-center text-sm font-bold text-[#2B2540]">{selectedImage.alt}</p>
          </div>
        </div>
      )}
      {/* Modal de Oferta Especial: Plano Premium com Desconto por R$ 19,50 */}
      {showPremiumOfferModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 overflow-y-auto"
          onClick={() => setShowPremiumOfferModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-premium-title"
        >
          <div
            className="plan top relative w-full max-w-[520px] my-auto p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="flag">🔥 Oferta Especial Desbloqueada</span>
            <button
              type="button"
              onClick={() => setShowPremiumOfferModal(false)}
              className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F0EAFB] text-sm font-extrabold text-[#5B3BA6] hover:bg-[#E7E0F3]"
              aria-label="Fechar oferta"
            >
              ✕
            </button>

            <div className="text-center mt-2">
              <span className="inline-block rounded-md bg-[#FCE6E6] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#C62828]">
                Espere! Por apenas + R$ 1,60 você leva TUDO
              </span>
              <h3 id="modal-premium-title" className="mt-2 text-2xl font-extrabold text-[#2B2540]">
                Plano Premium com Desconto
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#6B6385]">
                Leve tudo do Plano Completo pelo menor valor já liberado:
              </p>
            </div>

            <ul className="ticks mt-4">
              <li>41 documentos editáveis em Word + 2 planilhas prontas para uso</li>
              <li>App que transforma suas avaliações em relatórios profissionais</li>
              <li>500 tarefas de casa ilustradas com Léo e Bia</li>
              <li>
                6 bônus exclusivos: primeira sessão, marcos da fala, 60 atividades, pranchas TEA, reembolso e
                atendimentos domiciliares e online
              </li>
              <li>Acesso vitalício + atualizações gratuitas</li>
              <li>Garantia de 7 dias: seu investimento protegido</li>
            </ul>

            <div className="mt-4 rounded-2xl bg-[#F8F5FD] border border-[#E7E0F3] p-4 text-center">
              <p className="from !mt-0 text-sm">
                De <del>R$ 37,00</del> por apenas
              </p>
              <p className="big !mt-1 text-[#15803D]">
                <sup>R$</sup>19,50
              </p>
              <p className="terms">à vista no Pix, ou parcelado no cartão</p>
              <span className="saved mt-2">Você leva o pacote completo com super desconto!</span>
            </div>

            <button
              type="button"
              className="btn !mt-4"
              onClick={() => setShowPremiumOfferModal(false)}
            >
              Quero o Plano Premium por R$ 19,50
              <small>Liberar tudo do Plano Completo agora</small>
            </button>

            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => setShowPremiumOfferModal(false)}
                className="inline-block cursor-pointer bg-transparent border-0 text-xs font-bold text-[#6B6385] underline underline-offset-2 hover:text-[#2B2540]"
              >
                Não, obrigado. Quero continuar só com o Plano Básico (sem app, tarefas e bônus) por R$ 17,90
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Desconto Exclusivo: Plano Completo por R$ 23,82 */}
      {showCompletoDiscountModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 overflow-y-auto"
          onClick={() => setShowCompletoDiscountModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-completo-title"
        >
          <div
            className="plan top relative w-full max-w-[520px] my-auto p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="flag">🎉 Parabéns! Desconto Exclusivo Liberado</span>
            <button
              type="button"
              onClick={() => setShowCompletoDiscountModal(false)}
              className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F0EAFB] text-sm font-extrabold text-[#5B3BA6] hover:bg-[#E7E0F3]"
              aria-label="Fechar desconto"
            >
              ✕
            </button>

            <div className="text-center mt-2">
              <span className="inline-block rounded-md bg-[#E3F6F3] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0E7466]">
                Presente especial para finalizar agora
              </span>
              <h3 id="modal-completo-title" className="mt-2 text-2xl font-extrabold text-[#2B2540]">
                Plano Completo com Desconto
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#6B6385]">
                Você ganhou um desconto imediato para levar todo o pacote completo:
              </p>
            </div>

            <ul className="ticks mt-4">
              <li>41 documentos editáveis em Word + 2 planilhas prontas para uso</li>
              <li>App que transforma suas avaliações em relatórios profissionais</li>
              <li>500 tarefas de casa ilustradas com Léo e Bia</li>
              <li>
                6 bônus exclusivos: primeira sessão, marcos da fala, 60 atividades, pranchas TEA, reembolso e
                atendimentos domiciliares e online
              </li>
              <li>Acesso vitalício + atualizações gratuitas</li>
              <li>Garantia de 7 dias: seu investimento protegido</li>
            </ul>

            <div className="mt-4 rounded-2xl bg-[#F8F5FD] border border-[#E7E0F3] p-4 text-center">
              <p className="from !mt-0 text-sm">
                De <del>R$ 37,00</del> por apenas
              </p>
              <p className="big !mt-1 text-[#15803D]">
                <sup>R$</sup>23,82
              </p>
              <p className="terms">à vista no Pix, ou parcelado no cartão</p>
              <span className="saved mt-2">Desconto especial aplicado automaticamente!</span>
            </div>

            <button
              type="button"
              className="btn !mt-4"
              onClick={() => setShowCompletoDiscountModal(false)}
            >
              Garantir Plano Completo por R$ 23,82
              <small>Acesso imediato no seu e-mail</small>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
