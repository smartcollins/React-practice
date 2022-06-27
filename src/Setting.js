import {useState} from "react"
import Userprofile from "./Userprofile"
import Editprofile from "./Editprofile"
import SettingNotify from "./SettingNotify"
import Security from "./Security"
import {ArrowLeft,CaretRight,User,Bell,Eye,ToggleLeft,Lock,Info,Users,SignOut} from "phosphor-react"

function Setting(){
	const [back,setBack] = useState(false)
	const [edit,setEdit] = useState(false)
	const [notify,setNotify] = useState(false)
	const [secure,setSecure] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onEdit(){
		setEdit(true)
	}

	function onNotify(){
		setNotify(true)
	}

	function onSecure(){
		setSecure(true)
	}

	return(
		<div>
			{
				back?
				<Userprofile/>:
				edit?
				<Editprofile/>:
				notify?
				<SettingNotify/>:
				secure?
				<Security/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>Settings</h1>
						</div>
					</div>
					<div>
						<div onClick={onEdit} className="setting-mid">
							<div className="wallet">
								<button>
									<User size={20} color="#1EBA60" />
								</button>
								<p>Edit Profile</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div onClick={onNotify} className="setting-mid">
							<div className="wallet">
								<button>
									<Bell size={20} color="#1EBA60" />
								</button>
								<p>Notification</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div onClick={onSecure} className="setting-mid">
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