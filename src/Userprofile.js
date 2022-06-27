import {useState} from "react"
import MyFundraising from "./MyFundraising"
import Menu from "./Menu"
import WalletCenter from "./WalletCenter"
import Setting from "./Setting"
import {UsersThree,User,Gear,DotsThreeVertical,PencilSimple,Wallet} from "phosphor-react"

function Userprofile(){
	const [user,setUser] = useState(false)
	const [edit,setEdit] = useState(false)
	const [top,setTop] = useState(false)
	const [gear,setGear] = useState(false)

	function onUser(){
		setUser(true)
	}

	function onEdit(){
		setEdit(true)
	}

	function onTop(){
		setTop(true)
	}

	function onGear(){
		setGear(true)
	}

	return(
		<div>
			{
				user ?
				<MyFundraising/> :
				gear ?
				<Setting/>:
				top ?
				<WalletCenter/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<UsersThree size={50} color="#1EBA60" onClick={onUser} />
							<h1>Profile</h1>
						</div>
						<div className="prayer2-top">
							<button onClick={onGear} className="dot3">
								<Gear size={20} color="#1EBA60" />
							</button>
							<button className="dot3">
								<DotsThreeVertical size={20} color="#1EBA60" />
							</button>
						</div>
					</div>
					<div className={edit?"user":"user-2"}>
						{
							edit ?
							<User className="user-icon" size={32} color="#7d7d7d" weight="duotone"/> :
							<User style={{visibility: "hidden"}} className="user-icon" size={32} color="#7d7d7d" weight="duotone"/> 
						}
						<div className="user-pen" onClick={onEdit}>
							<PencilSimple size={16} color="#ffffff" />
						</div>
					</div>
					<div>
						<h3>Aden Smith</h3>
					</div>
					<div className="profile-btn">
						<button>
							<h3>12</h3>
							Fundraising
						</button>
						<button>
							<h3>487</h3>
							Followers
						</button>
						<button>
							<h3>126</h3>
							Following
						</button>
					</div>
					<br/>
					<div className="home-mid">
						<div className="wallet">
							<button>
								<Wallet size={30} color="#1EBA60" weight="duotone" />
							</button>
							<div>
								<h3>$349</h3>
								<p>My wallet balance</p>
							</div>
						</div>
						<button onClick={onTop}>Top up</button>
					</div>
					<div className="activity-txt">
						<h3>About</h3>
						<div className="story-dt">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
					
					<div className="interest-pen">
						<h3>Interest</h3>
						<PencilSimple size={20} color="#1EBA60" onClick={onUser} />
					</div>
					<div className="amount">
						<button>Medical</button>
						<button>Disaster</button>
						<button>Education</button>
						<button>Social</button>
						<button>Orphanage</button>
						<button>Humanity</button>
						<button>Environment</button>
					</div>
					<Menu/>
				</div>
			}
		</div>
		)
}

export default Userprofile;