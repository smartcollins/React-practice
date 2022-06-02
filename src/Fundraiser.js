import {useState} from "react"
import {CircleWavyCheck,HouseLine,User,FirstAidKit} from "phosphor-react"

function Fundraiser(){
	return(
		<div>
			<div className="fundraiser">
				<div>
					<h3>Fundraiser</h3>
					<div className="fund-main">
						<div className="fund-main-mid">
							<button>
								<HouseLine size={20} color="#35e01f" weight="fill" />
							</button>
							<div>
								<h3>Healthy Home</h3>
								<div className="fund-main-end">
									<p>Verified</p>
									<CircleWavyCheck size={15} color="#35e01f" weight="fill" />
								</div>
							</div>
						</div>
						<button>Follow</button>
					</div>
				</div>
				<div>
					<h3>Patient</h3>
					<div className="fund-main-last">
						<div className="fund-main-mid">
							<button>
								<User size={20} color="#35e01f" weight="fill" />
							</button>
							<div>
								<h3>Alice Wilson</h3>
								<div className="fund-main-end">
									<p>Identity according to medical documents</p>
									<CircleWavyCheck size={15} color="#35e01f" weight="fill" />
								</div>
							</div>
						</div>
						<div className="fund-main-mid">
							<button>
								<FirstAidKit size={20} color="#35e01f" weight="fill" />
							</button>
							<div>
								<h3>Post Craniotomy EDH + ICH</h3>
								<div className="fund-main-end">
									<p>Accompanied by medical documents</p>
									<CircleWavyCheck size={15} color="#35e01f" weight="fill" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Fundraiser;