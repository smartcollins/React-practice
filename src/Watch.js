import React from "react";
import {useState} from "react"
import Watch2 from "./Watch2"
import {PlayCircle} from "phosphor-react";

function Watch(){
	const [see,setSee] = useState(false)

	function onSee(){
		setSee(true)
	}

	return(
		<div>
			{
				see ?
				<Watch2/> :
				<div>
					<div className="watch-top">
						<h3>Watch the Imapact of Your Donation</h3>
						<h5 onClick={onSee}>See all</h5>
					</div>

					<div className="watch-video">
						<div className="watch1">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Sarah's Surgrey Was Successful</p>
							</div>
						</div>
						<div className="watch2">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Siamese Twins Surgrey Was Successful</p>
							</div>
						</div>
						
					</div>
				</div>
			}
		</div>
		)
}

export default Watch;