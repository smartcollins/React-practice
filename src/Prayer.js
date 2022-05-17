import React from "react";
import {DotsThreeOutlineVertical,ShareNetwork,Heart} from "phosphor-react";

function Prayer(){
	return(
		<div>
			<div>
				<div>
					<div><img src=""/></div>
					<h6>Esther Howard</h6>
					<span>Today</span>
					<DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
				</div>
				<div>
					<p>Hopefully Audrey can get surgrey soon, recover from her illeness, and play with her friends..</p>
					<span>You and 48 others sent this prayer</span>
					<div>
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