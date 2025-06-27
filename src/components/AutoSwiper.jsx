import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AutoSwiper = () => {
  const slides = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRclfN0tfEnjxuEob4Gs5wsyosD9JGNr5oQQ&s"
    },
    {
      id: 2,
      image: "https://image.made-in-china.com/202f0j00DBzYtmZsZkcg/Synthetic-Artificial-Grass-for-Garden-and-Landscaping-gx-1313-Garss.webp"
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/41lwUXn5PML.jpg"
    },
    {
      id: 4,
      image: "https://media.gettyimages.com/id/101977711/photo/workers-cut-the-garss-of-the-field-at-green-point-stadium-in-cape-town-on-june-11-2010-before.jpg?s=612x612&w=gi&k=20&c=mBx960v0OnaOtjkQW7hB_SHVj0KYEACnfcQ6Ho2AgHc="
    },
  ];

  return (
    <div className="swiper-container" style={{ maxWidth: '100%', margin: '0 auto' }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{
              position: 'relative',
              height: '100vh',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: '20px',
                borderRadius: '10px'
              }}>
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSwiper;