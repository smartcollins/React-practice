import React from "react"
import {useState} from "react"
import {MagnifyingGlass,FunnelSimple,ArrowLeft,SmileySad} from "phosphor-react";

function Search(){
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
		</div>
		)
}

export default Search;
