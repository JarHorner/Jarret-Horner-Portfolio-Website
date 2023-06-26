import React from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// importing images
import PS5 from "../../assets/images/PS5.jpg";
import DandD from "../../assets/images/DandD.jpg";
import Unity from "../../assets/images/Unity.jpg";
import Animals from "../../assets/images/Animals.jpg";
import ATVing from "../../assets/images/ATVing.jpg";
import Swimming from "../../assets/images/Swimming.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Keyboard, Pagination } from "swiper";

const InterestsCarousel = () => {
  // const slideCSS = "bg-center bg-cover w-auto h-auto";
  const slideCSS =
  "flex flex-col items-center bg-center bg-cover h-auto w-[80%] mx-auto ";
  const imgCSS =
    "object-contain block bg-gray-700 w-[450px] h-[400px] sm:w-[650px] sm:h-[550px] md:w-[750px] md:h-[700px] lg:w-[950px] lg:h-[850px]";
  const h1CSS =
    "text-3xl absolute top-2 left-8 font-serif font-bold z-50 sm:text-4xl md:left-16 md:top-6 md:text-5xl lg:top-8";
  const creditsCSS =
    "absolute text-sm bottom-4 left-6 sm:left-10 md:left-16 md:bottom-8 md:text-lg";

  return (
    <div className="mt-6">
      <Slide direction="right">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          slidesPerView={"auto"}
          modules={[Keyboard, EffectCards, Pagination]}
          centeredSlides={true}
          keyboard={{
            enabled: true,
          }}
          pagination={true}
          className="w-full pt-4 pb-12"
        >
          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Video Games</h1>
            <img src={PS5} className={imgCSS}></img>
            <div className={creditsCSS}>
              Photo by{" "}
              <a
                href="https://unsplash.com/@kseverin"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Kerde Severin
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/NVD_32BBZFE"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Unsplash
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Dungeons & Dragons</h1>
            <img src={DandD} className={imgCSS}></img>
            <div className={creditsCSS}>
              Photo by{" "}
              <a
                href="https://unsplash.com/@ian_gonz"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Ian Gonzalez
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/oVXMtsMejqo"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Unsplash
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Unity Engine</h1>
            <img src={Unity} className={imgCSS}></img>
            <div className={creditsCSS}>
              Photo by{" "}
              <a
                href="https://www.shutterstock.com/g/savconstantine"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Konstantin Savusia
              </a>{" "}
              on{" "}
              <a
                href="https://www.shutterstock.com/image-photo/bishkek-kyrgyzstan-march-14-2019-screen-1685146147?utm_campaign=image&utm_medium=googleimages&utm_source=iptc"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Shutterstock
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Animals</h1>
            <img src={Animals} className={imgCSS}></img>
            <div className={creditsCSS}>
              Photo by{" "}
              <a
                href="https://unsplash.com/@fernandanuso"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Fernanda Nuso
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/Fk2DGAaZJGs"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Unsplash
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>ATVing</h1>
            <img src={ATVing} className={imgCSS}></img>
            <div className={creditsCSS}>
              Photo by{" "}
              <a
                href="https://unsplash.com/@joshuahanson43"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Joshua Hanson
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/b-QTIby7CP8"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Unsplash
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideCSS}>
            <h1 className={h1CSS}>Swimming</h1>
            <img src={Swimming} className={imgCSS}></img>
            <div className={creditsCSS}>
              Photo by{" "}
              <a
                href="https://unsplash.com/@caseyclingan"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Casey Clingan
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/UF6lMAENdV4"
                target="_blank"
                className="text-green-300 hover:text-green-600"
              >
                Unsplash
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </Slide>
    </div>
  );
};

export default InterestsCarousel;
