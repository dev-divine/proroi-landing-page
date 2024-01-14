import './styles/index.css'

import { Header } from '@views/components/header'
import { VideoCarousel } from '@views/components/video-carousel'
import { Pillars } from '@views/components/pillars'
import { AboutUs } from '@views/components/about-us'
import { Services } from '@views/components/services'
import { Faq } from '@views/components/faq'
import { Footer } from '@views/components/footer'

export function App() {
  return (
    <div>
      <Header />
      <VideoCarousel />
      <Pillars />
      <AboutUs />
      <Services />
      <div className="mb-36 mt-20 sm:mt-32">
        <p className="text-center text-4xl font-extrabold text-main-purple drop-shadow-md">
          ESTEJA ONDE OS SEUS
        </p>
        <p className="text-center text-4xl font-extrabold text-main-purple drop-shadow-md">
          CLIENTES ESTÃO
        </p>
      </div>
      <Faq />
      <Footer />
    </div>
  )
}
