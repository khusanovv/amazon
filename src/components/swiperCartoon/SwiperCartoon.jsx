// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import c from "./SwiperCartoon.module.css";

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
				<h2>Related to items you've viewed</h2>
				<Link to="/cartoon" className={c.swiperLink}>See more</Link>
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
						src="https://m.media-amazon.com/images/I/71W943jz-WL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/818DZjX18CL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71qLXLM8mpL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81eGrC7i71L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91FiegXwe3L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71+75PhMbKL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91hw016BmzL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81Opu0ZzybL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/511RWRlh95L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/513Z+s9YU+L._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81fMSYhssML._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91FYevnZnTL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91ynW2YwxIL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/71XB35PVddL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81bMgoveGiL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/91JQpcQvweL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/810SMEYFkEL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://m.media-amazon.com/images/I/81OTL05z1PL._AC_SY400_.jpg"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

