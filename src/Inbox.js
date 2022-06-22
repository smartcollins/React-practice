import {useState} from "react"
import MyFundraising from "./MyFundraising"
import Menu from "./Menu"
import Message from "./Message"
import {UsersThree,DotsThreeVertical,MagnifyingGlass,FunnelSimple,SmileyWink,Circle} from "phosphor-react"

function Inbox(){
	const [home,setHome] = useState(false)
	const [user,setUser] = useState(false)

	function onHome(){
		setHome(true)
	}

	function onUser(){
		setUser(true)
	}

	return(
		<div>
			{
				home ?
				<MyFundraising/>:
				<div>
					{
						user?
						<Message/>:
						<div className="inbox">
							<div className="bookmark-top">
								<div className="back">
									<UsersThree onClick={onHome} size={50} color="#1EBA60" weight="duotone"/>
									<h1>Inbox</h1>
								</div>
								<button className="dot3">
									<DotsThreeVertical size={30} color="#1EBA60" />
								</button>
							</div>
							<div className="search-max">
								<div className="search-min">
									<input type="" name="" placeholder="Search"/>
									<MagnifyingGlass size={20} color="#D3D3D3" weight="light" />
								</div>
								<button className="dot3">
									<FunnelSimple size={20} color="#1EBA60" weight="fill" />
								</button>
							</div>
							<div onClick={onUser} className="activity-sub">
								<div className="activity-min">
									<div className="activity-img">
										<Circle className="active-btn" size={16} color="#1eba60" weight="fill"/>
									</div>
									<div className="activity-txt">
										<h3>Jane copper</h3>
										<p>I will make a donation</p>
									</div>
								</div>
								<div className="activity-time">
									<p>2</p>
									<p>20.00</p>
								</div>
							</div>
							<div className="activity-sub">
								<div className="activity-min">
									<div className="activity-img2">
										<Circle className="active-btn" size={16} color="#1eba60" weight="fill"/>
									</div>
									<div className="activity-txt">
										<h3>Darrel Steward</h3>
										<p>Perfect!</p>
									</div>
								</div>
								<div className="activity-time">
									<p>1</p>
									<p>16.47</p>
								</div>
							</div>
							<div className="activity-sub">
								<div className="activity-min">
									<div className="activity-img3">
										<Circle className="active-btn" size={16} color="#1eba60" weight="fill"/>
									</div>
									<div className="activity-txt">
										<h3>Lil Joey</h3>
										<p>Omg! this is amazing</p>
									</div>
								</div>
								<div className="activity-time">
									<p>1</p>
									<p>16.47</p>
								</div>
							</div>
							<div className="activity-sub">
								<div className="activity-min">
									<div className="donator-ayms">
										<div>
											<SmileyWink size={30} color="#ffffff" />
											<Circle className="active-btn" size={16} color="#A5ABB3" weight="fill"/>
										</div>
									</div>
									<div className="activity-txt">
										<h3>Anonymus</h3>
										<p>Amazing idea bruh!</p>
									</div>
								</div>
								<div className="activity-time">
									<p>2</p>
									<p>20.00</p>
								</div>
							</div>
							<div className="activity-past">
								<div className="activity-min">
									<div className="activity-img4">
										<Circle className="active-btn" size={16} color="#1eba60" weight="fill"/>
									</div>
									<div className="activity-txt">
										<h3>LCharitas</h3>
										<p>just ideas for next time</p>
									</div>
								</div>
								<div className="past-txt">
									<p>Yesterday</p>
								</div>
							</div>
							<div  className="activity-past">
								<div className="activity-min">
									<div className="activity-img5">
										<Circle className="active-btn" size={16} color="#1eba60" weight="fill"/>
									</div>
									<div className="activity-txt">
										<h3>Hulk Bradly</h3>
										<p>this is really epic</p>
									</div>
								</div>
								<div className="past-txt">
									<p>Yesterday</p>
								</div>
							</div>
						</div>
					}
				</div>
			}
		</div>
		)
}

export default Inbox;