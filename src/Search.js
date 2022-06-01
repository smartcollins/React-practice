import React from "react"
import {useState} from "react"
import Home from "./Home"
import {MagnifyingGlass,FunnelSimple,ArrowLeft,SmileySad,BookmarkSimple} from "phosphor-react";

function Search(){
	const [sad,setSad] = useState(false)
	const [back,setBack] = useState(false)

	function onSad(){
		setSad(true)
	}

	function onBack(){
		setBack(true)
	}


	return(
	<div>
		{
			back ?
			<Home/> :
			<div className="search">
				<div className="bookmark-top">
					<div className="back">
						<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
						<h1>Search</h1>
					</div>
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
				<div className="bookmark-btn">
					<button>All</button>
					<button>Art</button>
					<button>Music</button>
					<button>Sport</button>
				</div>
				<div>
					{
						sad ?
						<div className="search-main">
							<div className="search-txt">
								<p>Search Result</p>
								<p>3,459 found</p>
							</div>
							<div className="search-result">
								<div className="search-img">
									<div className="urgent-mark">
										<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
									</div>
								</div>
								<div className="search-detail">
									<div className="search-note">
										<h3>Help Overcome Malnutritio...</h3>
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
						</div> :
						<div className="bookmark-null">
							<div className="search-txt">
								<p>Search Result</p>
								<p>0 found</p>
							</div>
							<div className="search-null-main">
								<div className="book" onClick={onSad}>
									<SmileySad size={30} color="#f0f0f0" weight="bold" />
								</div>
								<h4>No result found</h4>
								<p>please try another keyword</p>
							</div>
						</div>
					}
				</div>
			</div>
		}
	</div>
		)
}

export default Search;
