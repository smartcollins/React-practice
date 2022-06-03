import {useState} from "react"
import Donators from "./Donators"
import {CircleWavyCheck,ArrowLeft,DotsThreeVertical,HouseLine,ChatText,UserPlus} from "phosphor-react"

function Info(){
	const [back,setBack] = useState(false)

	const [read,setRead] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onRead(){
		setRead(oldread => !read)
	}

	const style={
		color: read ? "#35e01f":"red"
	}

	return(
		<div>
			{
				
				<div className="profile">
					<div className="notification-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
							<h1>Profile</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={20} color="#35e01f" />
						</button>
					</div>
					<div>
						<button className="profile-top-btn">
							<HouseLine size={50} color="#35e01f"/>
						</button>
						<div className="profile-top-txt">
							<div>
								<h3>Healthy Home</h3>
							<CircleWavyCheck size={20} color="#35e01f"/>
							</div>
						</div>
					</div>
					<div className="profile-btn">
						<button>
							<h3>4.35</h3>
							Fundraising
						</button>
						<button>
							<h3>67.5k</h3>
							Followers
						</button>
						<button>
							<h3>179</h3>
							Following
						</button>
					</div>
					<div className="profile-mid">
						<button>
							<UserPlus size={20} color="#ffffff" />
							<p>Follow</p>
						</button>
						<button>
							<ChatText size={20} color="#35e01f" />
							<p>Messages</p>
						</button>
					</div>
					<div className="profile-mid-end">
						<button>About</button>
						<button>Following</button>
						<button>Prayers</button>
					</div>
					<div className="profile-end">
						<h3>About</h3>
						<div className="story-dt">
							<p className={read ? "story" : undefined}>
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
			}
		</div>
		)
}

export default Info;