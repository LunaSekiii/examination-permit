import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Account() {
	const account = useRef();
	useEffect(() => {
		let passwordIconAnimate = gsap.context(() => {
			gsap.to(
				".password-img",
				{
					rotateY: 180,
					repeat: -1,
					yoyo: true,
					duration: 2,
					ease: "power1.easeInOut",
				},
				account
			);
		});
		return () => {
			passwordIconAnimate.revert();
		};
	}, []);
	return (
		<div className="account" ref={account}>
			<div className="username-label">用户名</div>
			<div className="username-content">USERNAME</div>
			<div className="password-icon">
				<img
					className="password-img"
					src={require("../assets/password_icon.png")}
					alt="password_icon"
				/>
			</div>
			<div className="password-label">密码</div>
			<div className="password-content">PASSWORD</div>
		</div>
	);
}
