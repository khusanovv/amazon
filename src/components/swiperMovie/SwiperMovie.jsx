// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import c from "./SwiperMovie.module.css";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
	return (
		<div className={c.swiper}>
			<div className={c.swiperHeading}>
				<h2>Most wished for in Movies & TV</h2>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={7}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71NY-DzHnnL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71nqZf5nRbL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81BtU9dQIJL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71vEOYJC0vL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81o-ESdLdQL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81n59erRPbL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71fxsKr1MQL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81NTxti12zL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71sRXeeQeBL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/811-E8fqSfL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71mdZnv0bRL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71cZd8PxmwL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71WXWcPrKrL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81Ni9eUxHaL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81SgedyD5FL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81d2CoIjg-L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81dnP2V4YRL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81KrRPo5JPL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81FQW6bi9oL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71-6WqtrOUL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71-6WqtrOUL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/7130+AI-wZL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71yjJHNX41L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91f4CaStpGL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81R7QZV5P1L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81n8WITvpeL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91C1cNJCLfL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/817w6tVnfdL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81m23gweHGL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

