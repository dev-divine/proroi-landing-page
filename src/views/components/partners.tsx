import partner01 from '../../assets/partners/partner-01.png'
import partner02 from '../../assets/partners/partner-02.png'
import partner03 from '../../assets/partners/partner-03.png'
import partner04 from '../../assets/partners/partner-04.png'
import partner05 from '../../assets/partners/partner-05.png'
import partner06 from '../../assets/partners/partner-06.png'
import partner07 from '../../assets/partners/partner-07.png'
import partner08 from '../../assets/partners/partner-08.png'

export function Partners() {
  return (
    <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner01}
        alt="Transistor"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner02}
        alt="Reform"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner03}
        alt="Tuple"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner04}
        alt="SavvyCal"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner05}
        alt="Statamic"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner06}
        alt="Statamic"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner07}
        alt="Statamic"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        src={partner08}
        alt="Statamic"
        width={158}
        height={48}
      />
    </div>
  )
}
