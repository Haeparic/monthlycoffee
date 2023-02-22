import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { SwiperCss } from "styles/SwiperCss";
import { Radio } from "@mui/joy";

const SwiperBrand = ({ brand, setBrand }) => {
  const path = process.env.PUBLIC_URL;
  const testArr = [
    {
      id: "스타벅스",
      name: "스타벅스",
      img: `${path}/images/logo.png`,
    },
    {
      name: "투썸플레이스",
      img: `${path}/images/logo.png`,
    },
    {
      name: "이디아",
      img: `${path}/images/logo.png`,
    },
    {
      name: "빽다방",
      img: `${path}/images/logo.png`,
    },
    {
      name: "파스쿠치",
      img: `${path}/images/logo.png`,
    },
    {
      name: "파스쿠치",
      img: `${path}/images/logo.png`,
    },
  ];

  // const [arr, setArr] = useState(testArr);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   // 폼이 아니라 강제로 값을 셋팅하는 메서드
  //   setValue,
  //   trigger,
  // } = useForm({
  //   mode: "onChange", // mode 가 onChange 면 실행하라..
  // });

  const handleBrand = (e) => {
    console.log(e.target.value);
    setBrand(e.target.value);
    // setValue("brand", brand);
  };

  return (
    <SwiperCss>
      <Swiper
        className="mySwiper swiper"
        slidesPerView={1}
        spaceBetween={5}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        // pagination={{
        //   clickable: true,
        // }}
        // 반응형 체크
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className="swiperSlide">
          <img src={`${path}/images/plus.png`} alt="" />
          추가
          <input type="text" value={brand} onClick={handleBrand} />
        </SwiperSlide>
        {/* map 추후 적용 */}
        {testArr.map((item, id) => {
          return (
            <SwiperSlide className="swiperSlide" key={id}>
              <img src={item.img} alt="" />
              <Radio
                variant="plain"
                label={item.name}
                overlay={true}
                name="brand"
                value={item.name}
                onClick={handleBrand}
                // slotProps={{
                //   action: ({ checked }) => ({
                //     sx: {
                //       background: checked ? "yellow" : "blue",
                //     },
                //   }),
                // }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperCss>
  );
};

export default SwiperBrand;