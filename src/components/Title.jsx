import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Title = () => {
	const title = useRef();
	useEffect(() => {
		let iconAnimate = gsap.context(() => {
			gsap.to("#icon", {
				duration: 5,
				rotate: 360,
				repeat: -1,
				ease: "none",
			});
			gsap.to("#icon", {
				duration: 5,
				repeat: -1,
				yoyo: true,
				opacity: 0.5,
				ease: "none",
			});
		});
		return () => {
			iconAnimate.revert();
		};
	}, []);
	return (
		<div className="title-box" ref={title}>
			<div className="class-name">SAI</div>
			<div className="organization-name">创新基地</div>
			<div className="organization-icon">
				<img id="icon" src={require("../assets/icon.png")} alt="icon" />
			</div>
		</div>
	);
};

export default Title;
