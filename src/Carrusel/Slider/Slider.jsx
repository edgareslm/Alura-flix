import React, { Fragment } from 'react';
import Slider from 'react-slick';
import VideoCard from '../VideoCard';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';


const style = {
    width:" 100%",
    padding: "30px",
    boxSizing: "border-box",
    paddingBottom: "50px,",
    border: "2px solid red",
    background: "#777",
}

const MultipleItems = () => {
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
          infinite: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          infinite: false
        }
      }
    ]
  };
  return (
    <Fragment>
      <Box sx={style}>
        <Typography variant="h2" >Categoria</Typography>
        <Slider {...settings}>
          <div>
            <VideoCard></VideoCard>
          </div>
          <div>
            <VideoCard></VideoCard>
          </div>
          <div>
            <VideoCard></VideoCard>
          </div>
          <div>
            <VideoCard></VideoCard>
          </div>
      
        </Slider>
      </Box>
    </Fragment>
  );
};

export default MultipleItems;
