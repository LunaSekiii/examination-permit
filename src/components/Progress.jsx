import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Progress() {
	const progress = useRef();
	useEffect(() => {
		let pganimate = gsap.context(() => {
			gsap.from(".ps", {
				width: 0,
				duration: 1.5,
				stagger: {
					amount: 4,
					repeat: -1,
					yoyo: true,
				},
				ease: "power4.easeIn",
			});
		}, progress);
		return () => {
			pganimate.revert();
		};
	}, []);
	return (
		<div className="progress" ref={progress}>
			<div className="progress-step1 ps" />
			<div className="progress-step2 ps" />
			<div className="progress-step3 ps" />
			<div className="progress-step4 ps" />
			<div className="progress-step5 ps" />
		</div>
	);
}
