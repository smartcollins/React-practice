import React from "react";
import {useState} from "react";
import Urgent2 from "./Urgent2";
import {BookmarkSimple} from "phosphor-react";

function Urgent(){
	const [see,setSee] = useState(false)

	function onSee(){
		setSee(true)
	}

	return(
		<div className="urgent">
			{
				see ?
				<Urgent2/> :
				<div>
					<div className="urgent-top">
						<h3>Urgent Fundraising</h3>
						<h5 onClick={onSee}>See all</h5>
					</div>

					<div className="urgent-btn">
						<button>All</button>
						<button>Medical</button>
						<button>Disaster</button>
						<button>Education</button>
					</div>

					<div className="urgent-card">
						<div>
							<div className="urgent-img">
								<div className="urgent-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div>
								<div className="urgent-note">
									<h3>Help Orphange Children to ...</h3>
									<p>
										<span>$2,379 </span>
										fund raised from $4,200
									</p>
								</div>
								<div className="urgent-bar"></div>
								<div className="urgent-end">
									<p><span>1,280</span> Donators</p>
									<p><span>19</span> days left</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Urgent;
