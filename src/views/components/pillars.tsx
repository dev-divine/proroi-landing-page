import pillarImage from '@assets/pillar.png'

export function Pillars() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <h3 className="mb-4 text-center text-4xl font-extrabold text-main-purple drop-shadow-md">
        Nossos pilares
      </h3>

      <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-8 sm:flex-nowrap sm:justify-between">
        <div className="flex max-w-60 flex-col items-center justify-start ">
          <p className="mb-2 text-2xl font-bold text-secondary drop-shadow-md">
            TRÁFEGO
          </p>
          <img
            src={pillarImage}
            alt="Imagem de um pilla"
            className="h-40 w-16"
          />
          <p className="mt-3 text-center text-sm italic">
            Tráfego significa pessoas entrando em sua loja e conhecendo o seu
            produto. Trazemos pessoas para sua vitrine online através de
            ferramentas específicas.
          </p>
        </div>

        <div className="flex max-w-60 flex-col items-center justify-start">
          <p className="mb-2 text-2xl font-bold text-secondary drop-shadow-md">
            ENGAJAMENTO
          </p>
          <img
            src={pillarImage}
            alt="Imagem de um pilla"
            className="h-40 w-16"
          />
          <p className="mt-3 text-center text-sm italic">
            Público que compra, é público que se identifica com a sua marca.
            Produzimos suas páginas de uma forma que se conecte com o seu
            cliente alvo.
          </p>
        </div>

        <div className="flex max-w-60 flex-col items-center justify-start ">
          <p className="mb-2 text-2xl font-bold text-secondary drop-shadow-md">
            CONVERSÃO
          </p>
          <img
            src={pillarImage}
            alt="Imagem de um pilla"
            className="h-40 w-16"
          />
          <p className="mt-3 text-center text-sm italic">
            A Conversão é o momento em que o público converte-se através de uma
            compra. Acompanhamos e conduzimos sua audiência ao longo de toda a
            experiência de compra.
          </p>
        </div>

        <div className="flex max-w-60 flex-col items-center justify-start">
          <p className="mb-2 text-2xl font-bold text-secondary drop-shadow-md">
            RETENÇÃO
          </p>
          <img
            src={pillarImage}
            alt="Imagem de um pilla"
            className="h-40 w-16"
          />
          <p className="mt-3 text-center text-sm italic">
            O processo não termina após a venda, ele se inicia novamente. O
            cliente precisa se manter engajado e informado sobre novas
            oportunidades, dessa forma, garantimos mais indicações e novas
            compras.
          </p>
        </div>
      </div>
    </div>
  )
}
