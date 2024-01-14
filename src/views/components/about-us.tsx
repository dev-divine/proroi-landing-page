import owners from '@assets/owners-5.png'

export function AboutUs() {
  return (
    <div id="abt-us" className="relative mt-16 bg-white sm:mt-24">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-[55%] lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="h-full w-full rounded-r-3xl bg-gray-50 object-cover shadow"
              src={owners}
              alt="CTOs da empresa Proroi"
            />
          </div>
        </div>

        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-[486px] lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="mb-5 text-4xl font-semibold leading-7 text-main-purple sm:text-5xl">
              Quem somos
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              A história e as pessoas por trás da nossa empresa
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              Somos uma agência de marketing digital centrada em estabelecer
              conexões, originária da cidade de Caruaru, em Pernambuco.
            </p>
            <div className="mt-4 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Atualmente, ampliamos nosso alcance para atender empresas tanto
                dentro quanto fora do estado. Embora atuemos em diversos
                setores, temos uma atenção especial para o amplo público ligado
                à produção de confecções. Nosso compromisso é incessante na
                busca por aprimoramentos e na constante atualização para
                acompanhar as dinâmicas do mercado.
              </p>

              <p className="mt-4">
                Além de nos destacarmos por uma abordagem estratégica voltada
                para o tráfego pago, oferecemos uma gama diversificada de
                serviços. Isso inclui gestão de redes sociais, produção de
                vídeos, fotografia, copy, estratégias de marketing, e design.
                Estamos empenhados em proporcionar soluções abrangentes para
                impulsionar a presença digital e o sucesso de nossos clientes.
              </p>

              <p className="mt-16 text-2xl font-bold tracking-tight text-main-purple">
                SAIBA MAIS SOBRE O TRÁFEGO PAGO
              </p>

              <p className="mt-4">
                O que é TRÁFEGO PAGO? É uma estratégia de marketing on-line que
                permite você alcançar seu público alvo de forma direta e eficaz.
                Ao invés de esperar que as pessoas encontrem você (através das
                redes sociais, sites de vendas etc.) de forma orgânica, você
                paga para exibir seus anúncios para um público qualificado!
              </p>
              <h2 className="mt-12 text-2xl font-bold tracking-tight text-main-purple">
                COMO FUNCIONA?
              </h2>
              <p className="mt-4">
                O primeiro passo é identificar as plataformas de anúncios mais
                relevantes para o seu público alvo. Google Ads, Meta Ads,
                LinkedIn, YouTube, essas são as plataformas mais populares.
              </p>
              <p>
                Antes de lançar uma campanha é fundamental definir os objetivos
                a serem alcançados. Seja aumentar vendas, captar leads,
                fortalecimento de marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
