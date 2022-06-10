import {useState} from "react"
import {UsersThree,BookmarkSimple,ArchiveBox,PlusCircle,ShareNetwork,PencilSimple} from "phosphor-react"

function MyFundraising(){
	const [pending,setPending] = useState(false)

	function onPending(){
		setPending(true)
	}

	const style={
		color: "white",
		backgroundColor: "#35e01f",
		borderWidth: "2px"
	}

	const style2={
		backgroundColor: "transparent",
		color: "35e01f"
	}
	

	return(
		<div>
			<div className="bookmark-top">
				<div className="back">
					<UsersThree size={30} color="#35e01f"/>
					<h1>My Fundraising</h1>
				</div>
				<button className="dot3">
					<ArchiveBox size={30} color="#35e01f" weight="duotone" />
				</button>
			</div>
			<div className="myfund-top">
				<h3>MyFundraising</h3>
				<h3>Activity</h3>
			</div>
			<div className="urgent-btn">
				<button>All(25)</button>
				<button>Ongoing(3)</button>
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
				</div>:
				<div>
					<div className="plus">
						<PlusCircle size={70} color="#35e01f" weight="fill" />
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
									<PencilSimple size={20} color="#35e01f" weight="fill" />
									<p>Edit</p>
								</div>
								<div>
									<ShareNetwork size={20} color="#35e01f" weight="fill" />
									<p>Share</p>
								</div>
							</div>
							<button>See Results</button>
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
									<PencilSimple size={20} color="#35e01f" weight="fill" />
									<p>Edit</p>
								</div>
								<div>
									<ShareNetwork size={20} color="#35e01f" weight="fill" />
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
									<PencilSimple size={20} color="#35e01f" weight="fill" />
									<p>Edit</p>
								</div>
								<div>
									<ShareNetwork size={20} color="#35e01f" weight="fill" />
									<p>Share</p>
								</div>
							</div>
							<button>See Results</button>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default MyFundraising;