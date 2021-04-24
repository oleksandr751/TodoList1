import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

export default () => {
 return (
  <Swiper
   mousewheel={{ invert: true }}
   navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   }}
   autoplay={{ delay: 5000 }}
   scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
   speed={600}
   spaceBetween={50}
   slidesPerView={3}
   onSwiper={(swiper) => console.log(swiper)}
   loop={true}
   direction={'horizontal'}
  >
   <SwiperSlide>Slide 1</SwiperSlide>
   <SwiperSlide>Slide 2</SwiperSlide>
   <SwiperSlide>Slide 3</SwiperSlide>
   <SwiperSlide>Slide 4</SwiperSlide>
   <SwiperSlide>Slide 5</SwiperSlide>
   <SwiperSlide>Slide 6</SwiperSlide>
   <SwiperSlide>Slide 7</SwiperSlide>
   <SwiperSlide>Slide 8</SwiperSlide>
   <SwiperSlide>Slide 9</SwiperSlide>
   <SwiperSlide>Slide 10</SwiperSlide>
   <SwiperSlide>Slide 11</SwiperSlide>
   <SwiperSlide>Slide 12</SwiperSlide>
   <SwiperSlide>Slide 13</SwiperSlide>
   <SwiperSlide>Slide 14</SwiperSlide>
   <SwiperSlide>Slide 15</SwiperSlide>
   <SwiperSlide>Slide 16</SwiperSlide>
   <SwiperSlide>Slide 17</SwiperSlide>
   <SwiperSlide>Slide 18</SwiperSlide>
   <SwiperSlide>Slide 19</SwiperSlide>
   <SwiperSlide>Slide 20</SwiperSlide>
   ...
  </Swiper>
 );
};
