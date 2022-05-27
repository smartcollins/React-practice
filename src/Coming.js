import React from "react";
import {useState} from "react";
import Coming2 from "./Coming2";
import {BookmarkSimple} from "phosphor-react";

function Coming(){
	const [see,setSee] = useState(false)

	function onSee(){
		setSee(true)
	}

	return(
		<div>
			{
				see ?
				<Coming2/> :
				<div>
					<div className="coming-top">
						<h3>Coming to an end</h3>
						<h5 onClick={onSee}>See all</h5>
					</div>

					<div className="coming-card">
						<div>
							<div className="coming-img">
								<div className="coming-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
						</div>
						<div>
							<div className="coming-note">
								<h3>Helping Earthquake Victims...</h3>
								<p>
									<span>$2,367 </span>
									fund raised from $8,600
								</p>
							</div>
							<div className="coming-bar"></div>
							<div className="coming-end">
								<p><span>2,367</span> Donators</p>
								<p><span>4</span> days left</p>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Coming;