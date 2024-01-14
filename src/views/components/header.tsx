import { Navigation } from '@views/components/navigation'
import { Partners } from '@views/components/partners'
import backgroundImage from '@assets/hero-backgrouund.png'

import '../../styles/move-animation.css'

export function Header() {
  return (
    <div className="bg-white">
      <Navigation />

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-500 via-purple-500 to-purple-700 pb-16 pt-14 sm:pb-20">
          {/* Imagem de fundo */}
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="absolute left-0 top-0 z-[-1] h-full w-full bg-cover bg-center"
          >
            {/* Garante que a imagem cubra toda a seção */}
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src={backgroundImage}
              alt="iamgem de fundo"
              className="cover h full absolute z-[-10] w-full"
            />
            <div className="mx-auto max-w-5xl py-36 md:py-32 lg:pb-56 lg:pt-52">
              <div className="flex flex-wrap justify-between text-center md:flex-nowrap">
                <div className="animate move-animation-left mx-auto min-w-96 gap-20 text-center md:mx-0">

                  <h2 className=" text-left text-4xl font-bold tracking-tight text-gray-400 sm:max-w-sm md:max-w-md md:text-left lg:max-w-lg xl:max-w-xl">
                    BEM VINDO A
                  </h2>
                  <h1 className="max-w-[270px] text-left text-4xl font-bold tracking-tight text-white sm:max-w-sm md:max-w-md ph:text-left ph:text-8xl lg:max-w-lg xl:max-w-xl">
                    PROROI
                  </h1>
                  <p className="mb-5 mt-3 max-w-[270px] text-left text-lg text-gray-100 drop-shadow-lg sm:max-w-sm md:max-w-md ph:mx-0 ph:text-left lg:max-w-lg xl:max-w-xl">
                    O nosso negócios é acelerar os seus{' '}
                    <span className="font-bold">resultados!</span>
                  </p>
                  <p className="max-w-[270px] text-left text-white drop-shadow-md sm:max-w-sm md:max-w-md ph:mx-0 ph:text-left lg:max-w-lg xl:max-w-xl">
                    Vamos elaborar o melhor plano de ação para aumentar a sua
                    receita e do seu negócio no menor tempo possível.
                  </p>
                  <div className="mt-10 max-w-[270px] rounded-[36px] border border-blue-900 bg-secondary px-5 py-3 font-bold text-white sm:mx-3 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <p>+ de R$2.000.000 investidos em anúncios pagos</p>
                  </div>
                </div>

                <form className="animate move-animation-right mx-auto mt-16 w-full max-w-sm rounded-lg bg-transparent bg-white bg-opacity-15 p-4 shadow md:mt-0">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    O método definitivo para potencializar suas vendas.
                  </h2>
                  <div className="my-4 pt-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Digite seu nome"
                      className="mb-3 w-full rounded-md border-2 p-2 outline-none focus:border-secondary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Digite e-mail"
                      className="mb-3 w-full rounded-md border-2 p-2 outline-none focus:border-secondary"
                    />
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="WhatsApp"
                      className="mb-3 w-full rounded-md border-2 p-2 outline-none focus:border-secondary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full rounded-md bg-secondary p-3 font-bold text-white drop-shadow-md hover:bg-opacity-90"
                  >
                    CONTRATAR CONSULTORIA
                  </button>
                </form>
              </div>
            </div>

            <Partners />
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
