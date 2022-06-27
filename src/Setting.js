import {useState} from "react"
import Userprofile from "./Userprofile"
import {ArrowLeft,CaretRight,User,Bell,Eye,ToggleLeft,Lock,Info,Users,SignOut} from "phosphor-react"

function Setting(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Userprofile/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>Settings</h1>
						</div>
					</div>
					<div>
						<div className="setting-mid">
							<div className="wallet">
								<button>
									<User size={20} color="#1EBA60" />
								</button>
								<p>Edit Profile</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div className="setting-mid">
							<div className="wallet">
								<button>
									<Bell size={20} color="#1EBA60" />
								</button>
								<p>Notification</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div className="setting-mid">
							<div className="wallet">
								<button>
									<Lock size={20} color="#1EBA60" />
								</button>
								<p>Security</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div className="setting-mid">
							<div className="wallet">
								<button>
									<Eye size={20} color="#1EBA60" />
								</button>
								<p>Dark Mode</p>
							</div>
							<ToggleLeft size={20} color="#9098a1" weight="fill" />
						</div>
						<div className="setting-mid">
							<div className="wallet">
								<button>
									<Info size={20} color="#1EBA60" />
								</button>
								<p>Help</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div className="setting-mid">
							<div className="wallet">
								<button>
									<Users size={20} color="#1EBA60" />
								</button>
								<p>Invite Friends</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div className="setting-mid">
							<div className="wallet">
								<button className="cancel">
									<SignOut size={20} color="#f02828" />
								</button>
								<p>Logout</p>
							</div>
							
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Setting;