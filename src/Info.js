import {useState} from "react"
import Donators from "./Donators"
import {CircleWavyCheck,ArrowLeft,DotsThreeVertical,HouseLine,ChatText,UserPlus,BookmarkSimple,DotsThreeOutlineVertical,ShareNetwork,Heart} from "phosphor-react"

function Info(){
	const [back,setBack] = useState(false)

	const [read,setRead] = useState(false)

	const [about,setAbout] = useState(false)

	const [fundraising,setFundraising] = useState(false)

	const [prayer,setPrayer] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onRead(){
		setRead(oldread => !read)
	}

	function onAbout(){
		setAbout(true)
		setFundraising(false)
		setPrayer(false)
	}

	function onFundraising(){
		// setFundraising(oldFundraising => !fundraising)
		setFundraising(true)
		setPrayer(false)
		setAbout(false)
	}

	function onPrayer(){
		setPrayer(true)
		setFundraising(false)
		setAbout(false)

	}

	const style={
		color: read ? "#35e01f":"red"
	}

	const style2={
		backgroundColor: about ? "#35e01f":"white",
		color: about ? "white":"#35e01f",
		borderColor: about ? "white":"#35e01f"
	}

	const style3={
		backgroundColor: fundraising ? "#35e01f":"white",
		color: fundraising ? "white":"#35e01f",
		borderColor: fundraising ? "white":"#35e01f"
	}

	const style4={
		backgroundColor : prayer ? "#35e01f":"white",
		color: prayer ? "white":"#35e01f",
		borderColor: prayer ? "white":"#35e01f"
	}

	return(
		<div>
			{
				back ?
				<Donators/> :
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
						<button style={style2} onClick={onAbout}>About</button>
						<button style={style3} onClick={onFundraising}>Fundraising</button>
						<button style={style4} onClick={onPrayer}>Prayers</button>
					</div>
					<div>
						{	
							prayer ?
							<div>
								<div className="watch-top">
									<h3>Prayer (3,279)</h3>
									<h5>See all</h5>
								</div>
								<div className="prayer-card">
									<div className="prayer-top">
										<div className="prayer-detail">
											<div className="prayer-img"></div>
											<div className="prayer-profile">
												<h6>Esther Howard</h6>
												<span>Today</span>
											</div>
										</div>
										<DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
									</div>
									<div className="prayer-comment">
										<p>Hopefully Audrey can get surgrey soon, recover from her illeness, and play with her friends..</p>
										<span>You and 48 others sent this prayer</span>
										<div className="prayer-like">
											<div>
												<Heart size={20} color="#0da542" weight="fill" />
												<p>Aamin</p>
											</div>
											<div>
												<ShareNetwork size={20} color="#0da542" weight="fill" />
												<p>share</p>
											</div>
										</div>
									</div>
								</div>
							</div> :
							fundraising ?
							<div className="info-fund">
								<div className="coming-top">
									<h3>Fundraising (4,365)</h3>
									<h5>See all</h5>
								</div>
								<div className="search-result">
									<div className="search-img3">
										<div className="urgent-mark">
											<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
										</div>
									</div>
									<div className="search-detail">
										<div className="search-note">
											<h3>Help Improve Healthy Food for Malnutrished children</h3>
											<div className="search-fund">
												<span>$4,378 </span>
												<p>fund raised from $7,380</p>
											</div>
										</div>
										<div className="urgent-bar"></div>
										<div className="urgent-end">
											<p><span>2,475</span> Donators</p>
											<p><span>3</span> days left</p>
										</div>
									</div>
								</div>
								<div className="search-result">
									<div className="search-img7">
										<div className="urgent-mark">
											<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
										</div>
									</div>
									<div className="search-detail">
										<div className="search-note">
											<h3>Help Improve Child Health Globally</h3>
											<div className="search-fund">
												<span>$4,378 </span>
												<p>fund raised from $7,380</p>
											</div>
										</div>
										<div className="urgent-bar"></div>
										<div className="urgent-end">
											<p><span>2,475</span> Donators</p>
											<p><span>21</span> days left</p>
										</div>
									</div>
								</div>
							</div>:
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
						}
					</div>
				</div>
			}
		</div>
		)
}

export default Info;