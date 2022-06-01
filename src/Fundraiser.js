import {useState} from "react"
import {CheckCircle,HouseLine,User,FirstAidKit} from "phosphor-react"

function Fundraiser(){
	return(
		<div>
			<div className="fundraiser">
				<div>
					<h3>Fundraiser</h3>
					<div>
						<div>
							<button>
								<HouseLine size={20} color="#f0f0f0" weight="fill" />
							</button>
							<div>
								<h3>Healthy Home</h3>
								<div>
									<p>Verified</p>
									<CheckCircle size={20} color="#f0f0f0" weight="light" />
								</div>
							</div>
						</div>
						<button>Follow</button>
					</div>
				</div>
				<div>
					<h3>Patient</h3>
					<div>
						<div>
							<button>
								<User size={20} color="#f0f0f0" weight="fill" />
							</button>
							<div>
								<h3>Alice Wilson</h3>
								<div>
									<p>Identity according to medical documents</p>
									<CheckCircle size={20} color="#f0f0f0" weight="light" />
								</div>
							</div>
						</div>
						<div>
							<button>
								<FirstAidKit size={20} color="#f0f0f0" weight="fill" />
							</button>
							<div>
								<h3>Post Craniotomy EDH + ICH</h3>
								<div>
									<p>Accompanied by medical documents</p>
									<CheckCircle size={20} color="#f0f0f0" weight="light" />
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