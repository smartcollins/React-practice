import React from "react"
import {useState} from "react"
import {MagnifyingGlass,FunnelSimple,ArrowLeft,SmileySad} from "phosphor-react";

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
					<h1>Welcome</h1> :
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
