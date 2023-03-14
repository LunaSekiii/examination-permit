import React from "react";

const Infromation = () => {
	return (
		<div className="information">
			<div className="time-label">考试时间</div>
			<div className="time-content">18:00-20:00</div>
			<div className="website-label">
				考试
				<br />
				网址
			</div>
			<div className="website-content">http://oj.cxjd.zone</div>
			<div className="group-name">{"{ 软件组 }"}</div>
		</div>
	);
};

export default Infromation;
