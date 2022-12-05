import React from "react";
import ProCard from "./ProCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectFlip } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation,Pagination,Scrollbar,A11y,EffectFlip])
const Calculator = () => {
  return (
    <div className="flip">
 <Swiper
    spaceBetween={5}
    effect ="coverflow"
    slidesPerView={3}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    scrollbar={{ draggable: true }}
    className="conTainer"
    >

 <SwiperSlide>
 <ProCard
        image="https://plus.unsplash.com/premium_photo-1661409100444-5ab608d6e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        head="Ship Now"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
 <SwiperSlide>
 <ProCard
        image="https://plus.unsplash.com/premium_photo-1661409100444-5ab608d6e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        head="Save on Frequent Shipping"
        para="Get preferred rates, billing options and other great benefits of having a Hobort Express account!"
        link="Open an Account"
      />
 </SwiperSlide>
 <SwiperSlide>
 <ProCard
        image="https://plus.unsplash.com/premium_photo-1661409100444-5ab608d6e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        head="Customs Regulatory Updates"
        para="Get access to powerful and time-saving  customizable features found only in myHobort+"
        link="Create a Login and Ship"
      />
 </SwiperSlide>
 <SwiperSlide>
 <ProCard
        image="https://plus.unsplash.com/premium_photo-1661409100444-5ab608d6e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        head="Not Home? Change of Plans"
        para="Take control of your shipment delivery!  Decide when and where you want us to deliver."
        link="Learn About Delivery Management"
      />
 </SwiperSlide>
 <SwiperSlide>
 <ProCard
        image="https://plus.unsplash.com/premium_photo-1661409100444-5ab608d6e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        head="Are Batteries Included?"
        para="Lithium and Ion Batteries are classified as Dangerous Goods. Ensure you know the rules before you ship."
        link="Understanding Dangerous Goods"
      />
      
 </SwiperSlide>
 <SwiperSlide>
 <ProCard
        image="https://plus.unsplash.com/premium_photo-1661409100444-5ab608d6e693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        head="Flexibility for Whatever You Need"
        para="Get your shipment delivered exactly the way you want! We offer flexible additional services that cater to a variety of shipment needs."
        link="Learn About Optional Services
        "
      />
      
 </SwiperSlide>
 </Swiper> 
    </div>
   
      
     
   
  );
};

export default Calculator;