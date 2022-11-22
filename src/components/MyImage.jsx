import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const MyImage = ({ imgs }) => {
  let tempImg = imgs[0]
  const [mainImage, setMainImage] = useState(tempImg);
  const [totImages, settotImages] = useState(imgs);
  // useEffect(()=>{
  //   if(imgs.length>0){
  //   setMainImage(imgs[0])
  // }

  // },[])

  useEffect(() => {
    setMainImage(tempImg);
    settotImages(imgs)
  }, [imgs])

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs && imgs.map((curElm, index) => {
          // console.log(curElm)
          return (
            <figure key={index}>
              <img
                src={curElm}
                alt={curElm}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="main-screen">
        {/* <img src={mainImage} alt={mainImage} /> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          loop={true}
          className="mySwiper"
          
        >
          {totImages.map((img, index)=>{
            return <SwiperSlide key={index}>
              <img src={img} key={index} alt={''} />
            </SwiperSlide>
          })}
        </Swiper>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: no-drop;
      border-radius: 16px;
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: 400px;
      object-fit: fill;
      border-radius: 16px;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;