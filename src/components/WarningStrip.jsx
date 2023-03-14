import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WarningStrip() {
	const warningStrip = useRef();
	useEffect(() => {
		let wsanimate = gsap.context(() => {
			gsap.to(".warning-text", {
				xPercent: -51,
				repeat: -1,
				duration: 3,
				ease: "none",
			});
		}, warningStrip);
		return () => {
			wsanimate.revert();
		};
	}, []);
	return (
		<div className="warning-strip" ref={warningStrip}>
			<span className="warning-text">
				诚信考试 ⚠ 请勿泄露账号 ⚠ 诚信考试 ⚠ 请勿泄露账号 ⚠ 诚信考试 ⚠
				请勿泄露账号 ⚠ 诚信考试 ⚠ 请勿泄露账号
			</span>
		</div>
	);
}
