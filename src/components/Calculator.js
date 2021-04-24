import React, { useState } from 'react';
import SwiperCore, {
 Mousewheel,
 Navigation,
 Pagination,
 Scrollbar,
 A11y,
 Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Calculator = () => {
 const initialState = {
  firstDigit: 0,
  secondDigit: 0,
  result: 0,
 };
 const [fileListMain, setFileListMain] = useState([]);
 const arr1 = [];

 const [arrayOfValues, setArrayOfValues] = useState([]);
 const [list, setList] = useState({
  list1: arr1,
 });
 const [values, setValues] = useState(initialState);

 const handleChange = (e) => {
  setValues({
   ...values,
   [e.target.name]: e.target.value,
  });
 };

 const handleClick = (e) => {
  e.preventDefault();
 };

 const clearFields = () => {
  setValues({ initialState });
 };

 // //  const saveData = (e) => {
 // //   e.preventDefault();
 // //   console.log(arrayOfValues);
 // //   setArrayOfValues([...arrayOfValues, values.result]);
 // //   //arrayOfValues.push(values.result);
 // //   console.log(arrayOfValues);
 // //   //   arrayOfValues.map((item, index) => {
 // //   //    arr1.push(<SwiperSlide key={index}>{item}</SwiperSlide>);
 // //   //   });
 // //   //   setList({
 // //   //    list1: arr1,
 // //   //   });

 //   return arrayOfValues;
 //  };

 const handleFiles = (e) => {
  setFileListMain([...fileListMain, Array.from(e.target.files)]);
  fileListMain.map((item, index) => {
   item.map((item1, index1) => {
    if (item1.type === 'image/png' || item1.type === 'image/jpeg') {
     arr1.push(
      <SwiperSlide key={Math.floor(Math.random() * 10000)}>
       <img
        src={URL.createObjectURL(item1)}
        alt={item1.name}
        width='500'
        height='500'
       />
      </SwiperSlide>
     );
     console.log(item1.name);
    } else alert('Only png and jpeg files are accepted');
   });
  });
  setList({
   list1: arr1,
  });
  console.log(fileListMain);
 };

 SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
 ]);

 return (
  <div>
   <form>
    <input
     name='firstDigit'
     placeholder='first digit'
     onChange={handleChange}
    ></input>
    <button
     type='submit'
     id='plus'
     onClick={(values.result = values.firstDigit - -values.secondDigit)} //(values.result = values.firstDigit - -values.secondDigit)}
    >
     +
    </button>
    <input
     name='secondDigit'
     placeholder='second digit'
     onChange={handleChange}
    ></input>
    <h1 placeholder='result'>{values.result}</h1>

    <input type='file' onChange={handleFiles} multiple></input>

    <Swiper
     className='swiper1'
     autoplay={{ delay: 5000, disableOnInteraction: false }}
     speed={2000}
     direction={'horizontal'}
     spaceBetween={50}
     slidesPerView={1}
     navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     }}
     pagination={{ clickable: true, el: '.swiper-pagination' }}
     //scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
    >
     <SwiperSlide key={Math.floor(Math.random() * 10000)}>
      <img
       src={
        'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
       }
       alt='Image0'
       width='500'
       height='500'
      />
     </SwiperSlide>
     <SwiperSlide key={Math.floor(Math.random() * 10000)}>
      <img
       src={'https://static.toiimg.com/photo/72975551.cms'}
       alt='Image1'
       width='500'
       height='500'
      />
     </SwiperSlide>
     <SwiperSlide key={Math.floor(Math.random() * 10000)}>
      <img
       src={
        'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg'
       }
       alt='Image2'
       width='500'
       height='500'
      />
     </SwiperSlide>
     {list.list1}
     <div className='swiper-button-next'></div>
     <div className='swiper-button-prev'></div>
     <div className='swiper-pagination'></div>
    </Swiper>
   </form>
  </div>
 );
};

export default Calculator;
