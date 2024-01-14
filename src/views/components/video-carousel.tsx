import 'keen-slider/keen-slider.min.css'

import ReactPlayer from 'react-player'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@app/utils/cn'

export function VideoCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>()

  const video01 = "https://drive.google.com/file/d/1WtykdXXcFGffk5jyT48kkC9HLnS0ZSOk/view?usp=drive_link"
  const video02 = "https://drive.google.com/file/d/1VUa73UFMdKVztM7-Ljn8Sa05ls0jBbLI/view?usp=drive_link"
  const video03 = "https://drive.google.com/file/d/1OB3btPLtxToj-iG98NodOctfK0zlBU_c/view?usp=drive_link"

  const videoProperties = [
    {
      id: 1,
      title: 'Video 01',
      src: video01,
      credit: 'Video by Proroi',
    },
    {
      id: 2,
      title: 'Video 02',
      src: video02,
      credit: 'Video by Proroi',
    },
    {
      id: 3,
      title: 'Video 03',
      src: video03,
      credit: 'Video by Proroi',
    },
  ]

  let count = 0

  const goNext = () => {
    if (slider.current) {
      slider.current.next()
      count += 1
    }
  }

  const goPrev = () => {
    if (slider.current) {
      slider.current.prev()
      count -= 1
    }
  }

  return (
    <div className="mt-20">
      <h3 className="mb-16 text-center text-4xl font-extrabold text-main-purple drop-shadow-md">
        Veja quem já está conosco
      </h3>

      <div className="relative">
        <button
          onClick={goPrev}
          className={cn(
            'absolute right-[88%] top-[35%] z-10',
            count === 0 && 'pointer-events-none',
          )}
        >
          <ChevronLeft className="h-10 w-10 text-black" strokeWidth={3} />
        </button>
        <div ref={sliderRef} className="keen-slider">
          {videoProperties.map((video) => (
            <div key={video.id} className="keen-slider__slide">
              <ReactPlayer
                url={video.src}
                width="100%"
                style={{
                  margin: 'auto',
                }}
                controls
                pip
                playing
              />
            </div>
          ))}
        </div>
        <button
          onClick={goNext}
          className={cn(
            'absolute right-[8%] top-[35%] z-10',
            count === 1 && 'pointer-events-none',
          )}
        >
          <ChevronRight className="h-10 w-10 text-black" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
