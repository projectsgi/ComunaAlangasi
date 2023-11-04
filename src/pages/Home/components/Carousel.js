import { Typography, Box, Grid } from '@mui/material';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation, Pagination]);


const Carousel = ({ content }) => {
  const [ activeSlide, setActiveSlide] = useState(0);
  
  console.log(activeSlide)

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const swiperConfig = {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  };

  const arrowStyle = {
    color: 'white'
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        style={{backgroundColor:'primary'}}
        {...swiperConfig}
      >
        <div className="swiper-button-prev" style={arrowStyle}></div>
        <div className="swiper-button-next" style={arrowStyle}></div>
        <Box>
          {content.map((content, index) => (
            <SwiperSlide key={index} color='secondary'>
              <Box
                  width={"100"} 
                  minHeight={500} 
                  sx={{
                      backgroundImage:`url(${content.image})`, 
                      backgroundSize: '100%' ,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'flex-end',
                  }}
              >
                  <Grid container justifyContent="center">
                    <Grid item >
                      <Box    
                          sx={{background:' black', opacity: '0.7'}}
                          borderRadius={8}
                          bgcolor="black"
                          px={3}
                          py={3}
                          mx={3}
                          my={5}
                      >   
                        <Typography color='white' align="center" fontSize= '14px' lineHeight='19px' >
                            {content.description}                      
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
              </Box>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>

    </div>
  );
};

export default Carousel;