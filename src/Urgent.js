import React from "react";
import {BookmarkSimple} from "phosphor-react";

function Urgent(){
	return(
		<div>
			<div>
				<h3>Urgent Fundraising</h3>
				<h5>See all</h5>
			</div>

			<div>
				<button>All</button>
				<button>Medical</button>
				<button>Disaster</button>
				<button>Education</button>
			</div>

			<div>
				<div>
					<img src=""/>
					<div>
						<BookmarkSimple size={15} color="#35e01f" weight="light" />
					</div>
					<div>
						<h3>Help Orphange Children to ...</h3>
						<p>
							<span>$2,379</span>
							fund raised from $4,200
						</p>
						<div></div>
						<div>
							<p><span>1,280</span> Donators</p>
							<p><span>19</span> days left</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Urgent;
