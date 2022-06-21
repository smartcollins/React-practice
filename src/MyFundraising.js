import {useState} from "react"
import Menu from "./Menu"
import Result from "./Result"
import Activity from "./Activity"
import Say from "./Say"
import {UsersThree,BookmarkSimple,ArchiveBox,PlusCircle,ShareNetwork,PencilSimple} from "phosphor-react"

function MyFundraising(){
	// const [fund,setFund] = useState(false)
	const [activity,setActivity] = useState(false)
	const [going,setGoing] = useState(false)
	const [pending,setPending] = useState(false)
	const [result,setResult] = useState(false)
	const [say,setSay] = useState(false)

	function onFund(){
		// setFund(true)
		setActivity(false)
	}

	function onActivity(){
		setActivity(true)
	}

	function onGoing(){
		setGoing(true)
		setPending(false)
	}

	function onPending(){
		setPending(true)
	}

	function onResult(){
		setResult(true)
	}

	function sayThanks(){
		setSay(true)
	}

	const style={
		color: "white",
		// backgroundColor: "#1EBA60"
		color: "white",
		border: "1px solid transparent",
		// borderRadius: "15px",
		// width: "50%",
		// margin: "0 5px",
		// padding: "5px",
		backgroundColor: "#1EBA60",
	}

	const style2={
		backgroundColor: "transparent",
		color: "#1EBA60",
		border: "1px solid #1EBA60",
	}
	

	return(
		<div>
			{
				say ?
				<Say/> :
				result ?
				<Result/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<UsersThree size={30} color="#1EBA60"/>
							<h1>My Fundraising</h1>
						</div>
						<button className="dot3">
							<ArchiveBox size={30} color="#1EBA60" weight="duotone" />
						</button>
					</div>
					<div className="myfund-top">
						<h3 style={{borderBottom: activity?"4px solid lightgrey":"4px solid #1EBA60"}} onClick={onFund}>MyFundraising</h3>
						<h3 style={{borderBottom: activity?"4px solid #1EBA60":"4px solid lightgrey"}} onClick={onActivity}>Activity</h3>
					</div>
					{
						activity ?
						<Activity
							sayThanks={sayThanks}
						/> :
						<div>
							<div className="urgent-btn">
								<button style={style2}>All(25)</button>
								<button onClick={onGoing} style={pending?style2:style}>Ongoing(3)</button>
								<button>Past(22)</button>
								<button onClick={onPending} style={pending?style:style2}>Pending(1)</button>
							</div>
							{
								pending ?
								<div className="pending">
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help African Children's Overcome Starvation</h3>
													<div className="search-fund">
														<p><span>$7,560</span> fund required</p>
													</div>
												</div>
												<div className="urgent-bar"></div>
												<div className="review">
													<p><span>30</span> Days</p>
												</div>
											</div>
										</div>
										<div className="review-end">
											<p>Waiting for review ...</p>
										</div>
									</div>
									<div className="plus">
										<PlusCircle size={70} color="#1EBA60" weight="fill" />
									</div>
									<Menu/>
								</div>:
								<div>
									<div className="plus">
										<PlusCircle size={70} color="#1EBA60" weight="fill" />
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img5">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims of Flash Flood In Asia</h3>
													<div className="search-fund">
														<span>$8,775 </span>
														<p>fund raised from $10,540</p>
													</div>
												</div>
												<div className="urgent-bar"></div>
												<div className="urgent-end">
													<p><span>4,471</span> Donators</p>
													<p><span>9</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<div className="edit-share">
												<div>
													<PencilSimple size={20} color="#1EBA60" weight="fill" />
													<p>Edit</p>
												</div>
												<div>
													<ShareNetwork size={20} color="#1EBA60" weight="fill" />
													<p>Share</p>
												</div>
											</div>
											<button onClick={onResult}>See Results</button>
										</div>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Improve Child Health</h3>
													<div className="search-fund">
														<span>$2,775 </span>
														<p>fund raised from $10,540</p>
													</div>
												</div>
												<div className="search-bar-min">
													<div className="urgent-bar"></div>
												</div>
												<div className="urgent-end">
													<p><span>938</span> Donators</p>
													<p><span>21</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<div className="edit-share">
												<div>
													<PencilSimple size={20} color="#1EBA60" weight="fill" />
													<p>Edit</p>
												</div>
												<div>
													<ShareNetwork size={20} color="#1EBA60" weight="fill" />
													<p>Share</p>
												</div>
											</div>
											<button>See Results</button>
										</div>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img4">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims Volcanic Eruption</h3>
													<div className="search-fund">
														<span>$4,775 </span>
														<p>fund raised from $7,540</p>
													</div>
												</div>
												<div className="urgent-bar"></div>
												<div className="urgent-end">
													<p><span>2,471</span> Donators</p>
													<p><span>25</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<div className="edit-share">
												<div>
													<PencilSimple size={20} color="#1EBA60" weight="fill" />
													<p>Edit</p>
												</div>
												<div>
													<ShareNetwork size={20} color="#1EBA60" weight="fill" />
													<p>Share</p>
												</div>
											</div>
											<button>See Results</button>
										</div>
									</div>
								</div>
							}
						</div>
					}
				</div>
			}
		</div>
		)
}

export default MyFundraising;