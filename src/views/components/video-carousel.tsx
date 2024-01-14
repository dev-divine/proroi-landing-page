import 'keen-slider/keen-slider.min.css'

import ReactPlayer from 'react-player'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function VideoCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>()

  const video01 = 'https://youtu.be/wz0c3IBs-t0'
  const video02 = 'https://youtu.be/ccfJHxZMlrQ'
  // const video03 =
  //   'https://drive.google.com/file/d/1OB3btPLtxToj-iG98NodOctfK0zlBU_c/view?usp=sharing'

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
    // {
    //   id: 3,
    //   title: 'Video 03',
    //   src: video03,
    //   credit: 'Video by Proroi',
    // },
  ]

  const goNext = () => {
    if (slider.current) {
      slider.current.next()
    }
  }

  const goPrev = () => {
    if (slider.current) {
      slider.current.prev()
    }
  }

  return (
    <div id="feedbacks" className="mt-20">
      <h3 className="mb-16 text-center text-4xl font-extrabold text-main-purple drop-shadow-md">
        Veja quem já está conosco
      </h3>

      <div className="relative">
        <button
          onClick={goPrev}
          className="absolute right-[88%] top-[35%] z-10"
        >
          <ChevronLeft className="h-10 w-10 text-black" strokeWidth={3} />
        </button>
        <div ref={sliderRef} className="keen-slider">
          {videoProperties.map((video) => (
            <div key={video.id} className="keen-slider__slide">
              <ReactPlayer
                url={video.src}
                width="50%"
                style={{
                  margin: 'auto',
                  borderRadius: '1rem',
                }}
                controls
                pip
              />
            </div>
          ))}
        </div>
        <button onClick={goNext} className="absolute right-[8%] top-[35%] z-10">
          <ChevronRight className="h-10 w-10 text-black" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
