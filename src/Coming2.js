import React from "react"
import {useState} from "react"
import Coming from "./Coming"
import {DotsThreeVertical,MagnifyingGlass,FunnelSimple,BookmarkSimple,ArrowLeft} from "phosphor-react"

function Coming2(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div className="coming2">
			{
				back ?
				<Coming/> :
				<div className="urgent2">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h3>Coming to an End</h3>
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
					<div className="urgent-btn">
						<button>All</button>
						<button>Medical</button>
						<button>Disaster</button>
						<button>Education</button>
					</div>
					<div className="search-main">
						<div className="search-result">
							<div className="search-img6">
								<div className="urgent-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div className="search-detail">
								<div className="search-note">
									<h3>Help Poverty in Africa and It's Surbordinate Nation</h3>
									<div className="search-fund">
										<span>$8,775</span>
										<p>fund raised from $10,540</p>
									</div>
								</div>
								<div className="search-bar-min">
									<div className="urgent-bar"></div>
								</div>
								<div className="urgent-end">
									<p><span>4,471</span> Donators</p>
									<p><span>2</span> days left</p>
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
						<div className="search-result">
							<div className="search-img8">
								<div className="urgent-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div className="search-detail">
								<div className="search-note">
									<h3>Help Shelter The Homeless in North America</h3>
									<div className="search-fund">
										<span>$9,275 </span>
										<p>fund raised from $11,340</p>
									</div>
								</div>
								<div className="search-bar-min">
									<div className="urgent-bar"></div>
								</div>
								<div className="urgent-end">
									<p><span>5,938</span> Donators</p>
									<p><span>24</span> days left</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Coming2;