import { services } from '@app/data/services'

export function Services() {
  return (
    <div
      id="srvcs"
      className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"
    >
      <h3 className="mb-4 text-center text-4xl font-extrabold text-main-purple drop-shadow-md">
        Nossos serviços
      </h3>

      <p className="mx-auto mb-16 max-w-[70%] text-center text-lg font-medium">
        Desenvolvemos estratégias de marketing 100% personalizadas para a
        necessidade de cada empresa, englobando o melhor das seguintes áreas
      </p>

      <dl className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {services.map((service) => (
          <div
            className="mx-auto flex max-w-sm flex-col items-center rounded-lg border border-purple-800 bg-purple-900 px-6 py-8 text-center shadow-lg transition duration-300 ease-in-out hover:bg-purple-800 sm:mx-0"
            key={service.name}
          >
            <service.icon
              className="mb-6 h-10 w-10 text-white"
              aria-hidden="true"
            />
            <div key={service.name} className="relative">
              <dt className="text-lg font-semibold text-white">
                {service.name}
              </dt>
              <dd className="mt-2 text-base text-purple-200">
                {service.description}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}
