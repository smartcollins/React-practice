import {useState} from "react"
import MyFundraising from "./MyFundraising"
import {UserThree,ArchiveBox,SmileyWink} from "phosphor-react"

function Activity(){
	return(
		<div>
			<div className="activity">
				<h3>Today, December 25 2023</h3>
				<div className="activity-sub">
					<div className="activity-min">
						<div className="activity-img"></div>
						<div className="activity-txt">
							<p>
								<span>Jane copper </span>
								 has donated 
								 <span> $25</span>
							</p>
						</div>
					</div>
					<button>Say Thanks</button>
				</div>
				<div className="activity-sub">
					<div className="activity-min">
						<div className="donator-ayms">
							<div>
								<SmileyWink size={30} color="#ffffff" />
							</div>
						</div>
						<div className="activity-txt">
							<p>
								<span>Anonymus </span>
								 has donated 
								 <span> $22</span>
							</p>
						</div>
					</div>
					<button>Say Thanks</button>
				</div>
				<div className="activity-sub">
					<div className="activity-min">
						<div className="donator-img"></div>
						<div className="activity-txt">
							<p>
								<span>Jenny Wilson </span>
								 has donated 
								 <span> $17</span>
							</p>
						</div>
					</div>
					<button>Say Thanks</button>
				</div>
				<div className="activity-sub">
					<div className="activity-min">
						<div className="donator-ayms">
							<div>
								<SmileyWink size={30} color="#ffffff" />
							</div>
						</div>
						<div className="activity-txt">
							<p>
								<span>Anonymus </span>
								 has donated 
								 <span> $28</span>
							</p>
						</div>
					</div>
					<button>Say Thanks</button>
				</div>
			</div>
			<div className="activity">
				<h3>Yesterday, December 24 2023</h3>
				<div className="activity-sub">
					<div className="activity-min">
						<div className="activity-img"></div>
						<div className="activity-txt">
							<p>
								<span>Robbert Hawkins </span>
								 has donated 
								 <span> $19</span>
							</p>
						</div>
					</div>
					<button>Say Thanks</button>
				</div>
				<div className="activity-sub">
					<div className="activity-min">
						<div className="donator-img"></div>
						<div className="activity-txt">
							<p>
								<span>Kristin Watson </span>
								 has donated 
								 <span> $15</span>
							</p>
						</div>
					</div>
					<button>Say Thanks</button>
				</div>
			</div>
		</div>
		)
}

export default Activity;