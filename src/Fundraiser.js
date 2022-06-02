import {useState} from "react"
import {CircleWavyCheck,HouseLine,User,FirstAidKit} from "phosphor-react"

function Fundraiser(){
	const [read,setRead] = useState(false)

	function onRead(){
		setRead(oldread => !read)
	}

	const style={
		color: read ? "#35e01f":"red"
	}

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
				<div className="fund-usage">
					<h3>Fund Usage Plan</h3>
					<button>View Plan</button>
				</div>
				<div>
					<h3>Story</h3>
					<div className="story-dt">
						<p className={read && "story"}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p onClick={onRead} style={style}>{read?"Read more...":"Read less"}</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Fundraiser;