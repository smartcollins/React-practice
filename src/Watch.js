import React from "react";
import {PlayCircle} from "phosphor-react";

function Watch(){
	return(
		<div>
			<div className="watch-top">
				<h3>Watch the Impact of Your Donation</h3>
				<h5>See all</h5>
			</div>

			<div className="watch-video">
				<div className="watch1">
					<div className="watch-play">
						<PlayCircle size={30} color="#35e01f" weight="bold" />
					</div>
					<div className="watch-txt">
						<p>Sarah's Surgrey Was Successful</p>
					</div>
				</div>
				<div className="watch2">
					<div className="watch-play">
						<PlayCircle size={30} color="#35e01f" weight="bold" />
					</div>
					<div className="watch-txt">
						<p>Siamese Twins Surgrey Was Successful</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Watch;