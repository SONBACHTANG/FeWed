import React from 'react';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './SearchTrends.css'; // Make sure to adjust the path if necessary

const SearchTrends = () => {
  const trends = [
    { id: 1, imgSrc: '/assets/trend-bracelets.jpg' },
    { id: 2, imgSrc: '/assets/trend-bracelets.jpg' },
    { id: 3, imgSrc: '/assets/trend-bracelets.jpg' },
    { id: 4, imgSrc: '/assets/trend-bracelets.jpg' },
    { id: 5, imgSrc: '/assets/trend-bracelets.jpg' },
    { id: 6, imgSrc: '/assets/trend-bracelets.jpg' },
    { id: 7, imgSrc: '/assets/trend-bracelets.jpg' },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <RightOutlined />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="Search-trends">
      <div className="align-fomloyout">
        <h1>SearchTrends</h1>
        <Slider {...settings}>
          {trends.map((item) => (
            <div key={item.id} className="trends-img">
              <img src={item.imgSrc} alt="trends" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SearchTrends;
