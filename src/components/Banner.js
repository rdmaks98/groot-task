"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "/images/1-thumbnail.png",
    alt: "Thumbnail 1",
    bgSrc: "/images/1-background.png",
  },
  {
    id: 2,
    src: "/images/2-thumbnail.png",
    alt: "Thumbnail 2",
    bgSrc: "/images/2-background.png",
  },
  {
    id: 3,
    src: "/images/3-thumbnail.png",
    alt: "Thumbnail 3",
    bgSrc: "/images/3-background.png",
  },
  {
    id: 4,
    src: "/images/4-thumbnail.png",
    alt: "Thumbnail 4",
    bgSrc: "/images/4-background.png",
  },
  {
    id: 5,
    src: "/images/5-thumbnail.png",
    alt: "Thumbnail 5",
    bgSrc: "/images/5-background.png",
  },
  {
    id: 6,
    src: "/images/6-thumbnail.png",
    alt: "Thumbnail 6",
    bgSrc: "/images/6-background.png",
  },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    beforeChange: (current, next) => setActiveSlide(next),
    arrows: false,
  };

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        backgroundImage: `url(${data[activeSlide].bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: { xs: "20px", md: "40px" },
        marginTop: "100px",
      }}
    >
      {/* Dark overlay background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></Box>

      {/* Content Section */}
      <Box
        sx={{
          zIndex: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "flex-start", md: "flex-start" },
          textAlign: { xs: "left", md: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "17px", md: "31px" },
            fontWeight: 900,
            maxWidth: { xs: "150px", md: "300px" },
            marginBottom: "30px",
          }}
        >
          MORE FROM RICO THE DOG
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 800,
            border: "1px solid #fff",
            padding: "5px 10px",
            borderRadius: "25px",
            marginBottom: "30px",
            cursor: "pointer",
          }}
        >
          RICO IS BACK!
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "35px", md: "49px" },
            fontWeight: 900,
            marginBottom: "30px",
          }}
        >
          RICOBOT
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            marginBottom: "30px",
            maxWidth: "480px",
          }}
        >
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 900,
            borderRadius: "20px",
            padding: "10px 20px",
            marginTop: "10px",
            alignSelf: { xs: "flex-start", md: "flex-start" },
          }}
        >
          LEARN MORE
        </Button>
      </Box>

      {/* Thumbnails Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: "10px",
          flexWrap: "wrap",
          padding: "20px",
          marginTop: "80px",
          alignItems: "center",
          zIndex: "22",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={item.id}
            onClick={() => handleThumbnailClick(index)}
            sx={{
              width:
                activeSlide === index
                  ? { xs: "80px", md: "150px" }
                  : { xs: "60px", md: "120px" },
              height:
                activeSlide === index
                  ? { xs: "80px", md: "150px" }
                  : { xs: "60px", md: "120px" },
              overflow: "hidden",
              borderRadius: "10%",
              cursor: "pointer",
              marginRight: "20px", // Adjust space between thumbnails
              // border:
              //   activeSlide === index
              //     ? "3px solid #fff"
              //     : "1px solid transparent",

               // Outer gradient border
        background: activeSlide === index
          ? 'linear-gradient(135deg, #000, #F5F5F7,#373A40)' // Replace with your desired gradient
          : '1px solid transparent',
        padding: activeSlide === index ? '3px' : '1px', // Thickness of the gradient border
              transition: "all 0.3s ease",
              transform: activeSlide === index ? "scale(1.2)" : "scale(1)",
              margin: { xs: "10px" },
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={60}
              height={60}
              style={{ width: "100%", height: "100%",borderRadius: '10%',border: activeSlide === index ? '10px solid black' : '1px solid transparent', objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>
      <Box>
        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <Box key={item.id} sx={{ display: "none" }}></Box>
          ))}
        </Slider>
      </Box>
      {/* Foreground Image */}
      {activeSlide === 0 && (
        <Box
          sx={{
            position: "absolute",
            right: { xs: "12%", md: "17%" },
            top: { xs: "-26px", md: "-90px" },
            zIndex: 20,
            width: { xs: "130px", md: "400px" },
          }}
        >
          <img
            src="/images/1-foreground-cutout.png"
            style={{ objectFit: "contain", width: "100%" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Banner;
