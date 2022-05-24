import React from "react";
import {DotsThreeOutlineVertical,ShareNetwork,Heart} from "phosphor-react";

function Prayer(){
	return(
		<div>
			<div className="prayer-card">
				<div className="prayer-top">
					<div className="prayer-detail">
						<div className="prayer-img"></div>
						<div className="prayer-profile">
							<h6>Esther Howard</h6>
							<span>Today</span>
						</div>
					</div>
					<DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
				</div>
				<div className="prayer-comment">
					<p>Hopefully Audrey can get surgrey soon, recover from her illeness, and play with her friends..</p>
					<span>You and 48 others sent this prayer</span>
					<div className="prayer-like">
						<div>
							<Heart size={20} color="#0da542" weight="fill" />
							<p>Aamin</p>
						</div>
						<div>
							<ShareNetwork size={20} color="#0da542" weight="fill" />
							<p>share</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Prayer;