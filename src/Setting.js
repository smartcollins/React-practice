import {useState} from "react"
import Userprofile from "./Userprofile"
import Editprofile from "./Editprofile"
import SettingNotify from "./SettingNotify"
import Security from "./Security"
import Help from "./Help"
import Invite from "./Invite"
import {ArrowLeft,CaretRight,User,Bell,Eye,ToggleLeft,Lock,Info,Users,SignOut} from "phosphor-react"

function Setting(){
	const [back,setBack] = useState(false)
	const [edit,setEdit] = useState(false)
	const [notify,setNotify] = useState(false)
	const [secure,setSecure] = useState(false)
	const [help,setHelp] = useState(false)
	const [invite,setInvite] = useState(false)
	const [log,setLog] = useState(false)

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

	function onHelp(){
		setHelp(true)
	}

	function onInvite(){
		setInvite(true)
	}

	function onLogOut(){
		setLog(true)
	}
	function onCancel(){
		setLog(false)
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
				help?
				<Help/>:
				invite?
				<Invite/>:
				<div className="message">
					<div style={{visibility:log?"visible":"hidden"}} className="share-main">
						<SignOut size={30} color="#1EBA60" />
						<p>Are you sure you want to logout?</p>
						<div className="great-btn">
							<button onClick={onCancel}>Cancel</button>
							<button onClick={onBack}>Yes, Logout</button>
						</div>
					</div>
					<div className={log?"success":"message"}>
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
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
						<div onClick={onHelp} className="setting-mid">
							<div className="wallet">
								<button>
									<Info size={20} color="#1EBA60" />
								</button>
								<p>Help</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div onClick={onInvite} className="setting-mid">
							<div className="wallet">
								<button>
									<Users size={20} color="#1EBA60" />
								</button>
								<p>Invite Friends</p>
							</div>
							<CaretRight size={20} color="#1EBA60" />
						</div>
						<div onClick={onLogOut} className="setting-mid">
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