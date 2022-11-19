// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import c from "./SwiperShop.module.css";

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
				<h2>Shop gifts for everyone on your list</h2>
				<Link to="/shop" className={c.swiperLink}>Shop holiday gifts</Link>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={6}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_CML_2x._CB608464074_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_StockingStuffers_2x._CB606658764_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Fashion_2x._CB608464074_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Home-Gifts_2x._CB608464069_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Toys-gifts_2x._CB608464069_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_2x._CB608464074_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_HolidayEssentials_2x._CB608159058_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Beauty_2x._CB608464074_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Sports-gifts_2x._CB608464069_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_GiftsCards_2x._CB608464069_.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className={c.swiperBox}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_HomePrep_2x._CB608159058_.jpg"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

