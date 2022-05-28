import React from "react"
import {useState} from "react"
import Urgent from "./Urgent"
import {DotsThreeVertical,MagnifyingGlass,FunnelSimple,BookmarkSimple,ArrowLeft} from "phosphor-react"

function Urgent2(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back ?
				<Urgent/> :
				<div className="urgent2">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
							<h3>Urgent Fundraising</h3>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#35e01f" />
						</button>
					</div>
					<div className="search-max">
						<div className="search-min">
							<input type="" name="" placeholder="Search"/>
							<MagnifyingGlass size={20} color="#D3D3D3" weight="light" />
						</div>
						<button className="dot3">
							<FunnelSimple size={20} color="#35e01f" weight="fill" />
						</button>
					</div>
					<div className="urgent-btn">
						<button>All</button>
						<button>Medical</button>
						<button>Disaster</button>
						<button>Education</button>
					</div>

					<div className="search-main">
						<div className="search-result">
							<div className="search-img4">
								<div className="urgent-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div className="search-detail">
								<div className="search-note">
									<h3>Help Victims of the Impact of Volcano</h3>
									<div className="search-fund">
										<span>$2,277</span>
										<p>fund raised from $6,310</p>
									</div>
								</div>
								<div className="search-bar-min">
									<div className="urgent-bar"></div>
								</div>
								<div className="urgent-end">
									<p><span>938</span> Donators</p>
									<p><span>26</span> days left</p>
								</div>
							</div>
						</div>
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
						<div className="search-result">
							<div className="search-img2">
								<div className="urgent-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div className="search-detail">
								<div className="search-note">
									<h3>Help Cayna Brain cancer Surgrey</h3>
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
						<div className="search-result">
							<div className="search-img3">
								<div className="urgent-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div className="search-detail">
								<div className="search-note">
									<h3>Help Little Baby to Do Stom</h3>
									<div className="search-fund">
										<span>$2,275 </span>
										<p>fund raised from $6,310</p>
									</div>
								</div>
								<div className="search-bar-min">
									<div className="urgent-bar"></div>
								</div>
								<div className="urgent-end">
									<p><span>938</span> Donators</p>
									<p><span>26</span> days left</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Urgent2;