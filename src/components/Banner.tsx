'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect, useRef } from 'react'
const banner1 = <Image
  src="/banner1.png"
  alt='OnePiece'
  width={500}
  height={500}
/>
const banner2 = <Image
  src="/banner1.png"
  alt='Jujutsu Kaisen - Chú Thuật Hồi Chiến'
  width={500}
  height={500}
/>
const banner3 = <Image
  src="/banner1.png"
  alt='Thanh Gươm Diệt Quỷ'
  width={500}
  height={500}
/>
const banner4 = <Image
  src="/banner1.png"
  alt='Onepunch Man'
  width={500}
  height={500}
/>
const banner5 = <Image
  src="/banner1.png"
  alt='Mashle: Magic And Muscles'
  width={500}
  height={500}
/>
const banner6 = <Image
  src="/banner1.png"
  alt='REINCARNATED AS AN ARISTOCRAT WITH AN APPRAISAL SKILL'
  width={500}
  height={500}
/>
const banner7 = <Image
  src="/banner1.png"
  alt='Tôi Muốn Nhìn Thấy Dáng Vẻ Xấu Hổ Của Cậu'
  width={500}
  height={500}
/>
const banner8 = <Image
  src="/banner1.png"
  alt='Kỹ Năng Vô Dụng [Auto Mode] Bỗng Dưng Thức Tỉnh ~ Hả, Tổ Đội Trinh Sát Mấy Người, Chẳng Phải Đã Nói'
  width={500}
  height={500}
/>


const Banner = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (el.current) {
      setIsLoading(false)
    }
  }, [el.current])

  return (
    <section
      ref={el}
      className={`flex gap-[10px] mt-2 sm:mt-0 transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className='w-full md:w-[65%] lg:w-[510px] relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Pagination]}
          pagination={{ el: '.swiper-pagination', clickable: true }}
        >
          <SwiperSlide>

            <div
              className='bg-no-repeat bg-cover w-full h-[260px] md:h-[380px] bg-top md:bg-center'
              style={{
                backgroundImage: `url('banner1.png')`
              }}
            />

          </SwiperSlide>
          <SwiperSlide>

            <div
              className='bg-no-repeat bg-cover w-full h-[260px] md:h-[380px] bg-bottom md:bg-center'
              style={{
                backgroundImage: `url('banner2.png')`
              }}
            />

          </SwiperSlide>
          <SwiperSlide>

            <div
              className='bg-no-repeat bg-cover w-full h-[260px] md:h-[380px] bg-top md:bg-center'
              style={{
                backgroundImage: `url('banner3.png')`
              }}
            />
          </SwiperSlide>
        </Swiper>
        <div
          id='swiper-banner-pagination'
          className='swiper-pagination right-0 bottom-[2px_!important]'
        />
      </div>
      <div className='flex-shrink-0 hidden md:grid grid-cols-6 gap-[10px] flex-1'>
        <div className='col-span-6 flex lg:flex-row flex-col items-center gap-[10px]'>

          <p
            className='bg-no-repeat bg-cover w-full h-full bg-center'
            style={{
              backgroundImage: `url('banner4.png')`
            }}
          />

          <p
            className='bg-no-repeat bg-cover w-full h-full bg-center'
            style={{
              backgroundImage: `url('banner5.png')`
            }}
          />

        </div>
        <div className='col-span-6 items-center gap-[10px] md:hidden lg:flex'>

          <p
            className='bg-no-repeat bg-cover w-full h-full'
            style={{
              backgroundImage: `url('banner6.png')`
            }}
          />

          <p
            className='bg-no-repeat bg-cover w-full h-full'
            style={{
              backgroundImage: `url('banner7.png')`
            }}
          />

          <p
            className='bg-no-repeat bg-cover w-full h-full'
            style={{
              backgroundImage: `url('banner8.png')`
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
