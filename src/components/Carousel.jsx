import React from 'react'
import CarouselCard from './CarouselCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectFlip } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import sav from "../assets/save1.jpeg";
import battery from "../assets/bat.jpeg";
import cust from "../assets/custom.jpeg";
import world from "../assets/globe.png";
import notHome from "../assets/nothome.png";


SwiperCore.use([Navigation,Pagination,Scrollbar,A11y,EffectFlip])
const Carousel = () => {

  return (
    <div>
 <Swiper
    spaceBetween={5}
    effect ="coverflow"
    slidesPerView={1}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
 <CarouselCard
        image={sav}
        head="The journey of a package"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
 <SwiperSlide>
 <CarouselCard
        image={notHome}
        head="Ship Now"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
 <SwiperSlide>
 <CarouselCard
        image={cust}
        head="Ship Now"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
 
 <SwiperSlide>
 <CarouselCard
        image={battery}
        head="Ship Now"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
 <SwiperSlide>
 <CarouselCard
      image={world}
        head="Ship Now"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Carousel