import { Card } from 'antd';
import Slider from "react-slick";
import './Bestseller.css'
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {RightOutlined , LeftOutlined} from "@ant-design/icons";
const products = [
  {
    name: 'Dây chuyền Vàng trắng Ý 18K PNJ',
    price: '15.672.000đ',
    imgSrc: '/assets/trend-bracelets.jpg',
    rating: 5,
    link: '/product',
    sold: 2000,
  },
  {
    name: 'Bông tai Kim cương Vàng trắng 14K PNJ First Diamond',
    price: '15.515.000đ',
    imgSrc: '/assets/trend-bracelets.jpg',
    link: '/product',
    rating: 5,
    sold: 2000,
  },
  {
    name: 'Nhẫn nam Vàng trắng 10K đính đá ECZ PNJ',
    price: '9.054.000đ',
    imgSrc: '/assets/trend-bracelets.jpg',
    rating: 5,
    link: '/product',
    sold: 2000,
  },
  {
    name: 'Bông tai Vàng trắng Ý 18K đính đá CZ PNJ',
    price: '4.273.000đ',
    imgSrc: '/assets/trend-bracelets.jpg',
    link: '/product',
    rating: 5,
    sold: 2000,
  },
  {
    name: 'Bông tai Vàng trắng Ý 18K đính đá CZ PNJ',
    price: '4.273.000đ',
    imgSrc: '/assets/trend-bracelets.jpg',
    link: '/product',
    rating: 5,
    sold: 2000,
  },
  {
    name: 'Bông tai Vàng trắng Ý 18K đính đá CZ PNJ',
    price: '4.273.000đ',
    imgSrc: '/assets/trend-bracelets.jpg',
    rating: 5,
    sold: 2000,
    link: '/product',
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <RightOutlined />
    </div>
  );
}

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <LeftOutlined />
    </div>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Bestseller = () => (
  <div id='best-seller'>
    <div className="align-fomloyout">
      <h1>bestseller</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className='layout'>
            <Link to={product.link}>
              <Card
                className="product-card"
                hoverable
                cover={<img className='img-best' alt={product.name} src={product.imgSrc}/>}
              >
                <Card.Meta title={product.name} className="product-meta-title"/>
                <p className="product-price">{product.price}</p>
                <div className="product-sold">
                <span style={{display: 'flex'}}>
                  <img src='/assets/star.svg'/>
                  {product.rating}
                </span>
                  <p>{product.sold} đã bán</p>
                </div>
                <span className="buy-button">Xem chi tiết</span>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>
      <button className='all-button'>Xem tất cả</button>
    </div>

  </div>
);

export default Bestseller;
