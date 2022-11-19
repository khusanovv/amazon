import React from "react";
import { Link } from "react-router-dom";
import c from "./MainCard.module.css";

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
	return (
		<div className={c.card}>
			<h2>{title}</h2>
			{cardImages ? (
				<div className={c.cardBox}>
					{cardImages.map(item => (
						<div className={c.linkBoxs}>
							<Link to={item.link}>
								<img className={c.cardImgs} src={item.image} alt="" />
								<p>{item.subtitle}</p>
							</Link>
						</div>
					))}
				</div>
			) : (
			<div className={c.linkBox}>
        <Link to={linkURL}>
			    <img className={c.cardImg} src={image} alt="" />
				</Link>
      </div>
			)}
			<Link className={c.urlLink} to={linkURL}>{linkText}</Link>
		</div>
	);
};

export default MainCard;
