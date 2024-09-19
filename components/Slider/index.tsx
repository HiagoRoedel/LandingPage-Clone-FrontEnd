'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <>
     <div className="title text-5xl text-black mb-16 mt-16">
        A little ❤️ from our community
        </div>
        <Swiper
  slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    1348: {
      slidesPerView: 3,
    },
  }}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper w-full h-auto mb-8" // Ajusta a largura e altura
>
       
       <SwiperSlide className='shadow-xl bg-white p-4 rounded-lg'>
            <div className="subtitles text-gray-700 text-xl mb-4 mt-8">
              This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.
            </div>
            <div className="image flex items-center">
              <Image
                src="/home-avatar-francesca.webp"
                alt='home-avatar-francesca'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className="flex flex-col ml-3">
                <h1 className='font-bold text-blue-950'>Francesca</h1>
                <span className='text-gray-700'>@frrann</span>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className='shadow-xl p-4'>
            <div className="subtitles text-gray-700 text-1xl text-xl mb-4 mt-8">
            This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.
            </div>
            <div className="image flex">
                <Image
                src="/home-avatar-francesca.webp"
                alt='home-avatar-francesca'
                width={50}
                height={50}
                className='rounded-full'
                />
                <div className="flex flex-col ml-2">
                <h1 className='font-bold text-blue-950'>Francesca</h1>
                <span className='text-gray-700'>@frrann</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-xl p-4'>
            <div className="subtitles text-gray-700 text-1xl text-xl mb-4 mt-8">
            This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.
            </div>
            <div className="image flex">
                <Image
                src="/home-avatar-francesca.webp"
                alt='home-avatar-francesca'
                width={50}
                height={50}
                className='rounded-full'
                />
                <div className="flex flex-col ml-2">
                <h1 className='font-bold text-blue-950'>Francesca</h1>
                <span className='text-gray-700'>@frrann</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-xl p-4'>
            <div className="subtitles text-gray-700 text-1xl text-xl mb-4 mt-8">
            This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.
            </div>
            <div className="image flex">
                <Image
                src="/home-avatar-francesca.webp"
                alt='home-avatar-francesca'
                width={50}
                height={50}
                className='rounded-full'
                />
                <div className="flex flex-col ml-2">
                <h1 className='font-bold text-blue-950'>Francesca</h1>
                <span className='text-gray-700'>@frrann</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-xl p-4'>
            <div className="subtitles text-gray-700 text-1xl text-xl mb-4 mt-8">
            This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.
            </div>
            <div className="image flex">
                <Image
                src="/home-avatar-francesca.webp"
                alt='home-avatar-francesca'
                width={50}
                height={50}
                className='rounded-full'
                />
                <div className="flex flex-col ml-2">
                <h1 className='font-bold text-blue-950'>Francesca</h1>
                <span className='text-gray-700'>@frrann</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-xl p-4'>
            <div className="subtitles text-gray-700 text-1xl text-xl mb-4 mt-8">
            This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.
            </div>
            <div className="image flex">
                <Image
                src="/home-avatar-francesca.webp"
                alt='home-avatar-francesca'
                width={50}
                height={50}
                className='rounded-full'
                />
                <div className="flex flex-col ml-2">
                <h1 className='font-bold text-blue-950'>Francesca</h1>
                <span className='text-gray-700'>@frrann</span>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
