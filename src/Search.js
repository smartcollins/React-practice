import React from "react"
import {useState} from "react"
import {MagnifyingGlass,FunnelSimple,ArrowLeft,SmileySad,BookmarkSimple} from "phosphor-react";

function Search(){
	const [sad,setSad] = useState(false)

	function onSad(){
		setSad(true)
	}


	return(
		<div>
			<div className="bookmark-top">
				<div className="back">
					<ArrowLeft size={30} color="#35e01f" />
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
								<BookmarkSimple size={20} color="#bbbbb" weight="duotone" />
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
		)
}

export default Search;
