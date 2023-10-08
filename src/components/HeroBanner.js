import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage1 from '../assets/images/banner1.jpg';
import HeroBannerImage2 from '../assets/images/banner2.jpg';
import HeroBannerImage3 from '../assets/images/banner3.jpg';
import '../App.css';

const HeroBanner = () => {
  const HeroBannerImage = [
    { url: HeroBannerImage1 },
    { url: HeroBannerImage2 },
    { url: HeroBannerImage3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === HeroBannerImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex,  HeroBannerImage.length]);


  // Auto advance to the next slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, nextSlide]);

  const imageUrl = HeroBannerImage[currentIndex].url;

  const [html, setHtml] = useState('');
  const fullHtml = "Sweat, Smile <br /> and Repeat(2X)";
  const typingSpeed = 200; // Adjust the typing speed as needed

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullHtml.length) {
        setHtml(fullHtml.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        padding: '100px',
        marginTop: { lg: '212px', xs: '70px' },
        marginLeft: { sm: '50px' },
      }}
    >
      <div style={{ flex: 1 }}>
        <Typography color="#177e36" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          mb="23px"
          mt="23px"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>

        <Button
          variant="contained"
          color="success"
          href="#exercises"
          sx={{ backgroundColor: '#dfcf29', padding: '10px' }}
        >
          Explore Exercises
        </Button>

        <Typography
          fontWeight={600}
          color="#Fdfcf29"
          sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none' },
            fontSize: '200px',
          }}
        >
          Exercise
        </Typography>
      </div>

      <img
        src={imageUrl}
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
