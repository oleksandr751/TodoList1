import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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

 const saveData = (e) => {
  e.preventDefault();
  console.log(arrayOfValues);
  setArrayOfValues([...arrayOfValues, values.result]);
  //arrayOfValues.push(values.result);
  console.log(arrayOfValues);
  //   arrayOfValues.map((item, index) => {
  //    arr1.push(<SwiperSlide key={index}>{item}</SwiperSlide>);
  //   });
  //   setList({
  //    list1: arr1,
  //   });

  return arrayOfValues;
 };

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
        width='200'
        height='200'
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

    <button type='submit' id='save' onClick={saveData}>
     Save
    </button>
    <input type='file' onChange={handleFiles} multiple></input>

    <div className='swiper-container'>
     <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
     >
      {list.list1}
     </Swiper>
    </div>
   </form>
  </div>
 );
};

export default Calculator;
