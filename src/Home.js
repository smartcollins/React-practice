import React from "react";
import{useState} from "react"
import Urgent from "./Urgent"
import Coming from "./Coming"
import Watch from "./Watch"
import Prayer from "./Prayer"
import Menu from "./Menu"
import Notification from "./Notification"
import Bookmark from "./Bookmark"
import Search from "./Search"
import Donation from "./Donation"
import {UsersThree,MagnifyingGlass,Bell,BookmarkSimple,Wallet,Circle} from "phosphor-react";

function Home(){
	const [logo,setLogo] = useState(false)
	const [notify,setNotify] = useState(false)
	const [mark,setMark] = useState(false)
	const [search,setSearch] = useState(false)

	function onLogo(){
		setLogo(true)
	}

	function onNotify(){
		setNotify(true)
	}

	function onMark(){
		setMark(true)
	}

	function onSearch(){
		setSearch(true)
	}

	

	return(
		<div>	
			{	logo ? 
					<Donation/> :
				search ? 
					<Search/> :
				notify ?
					<Notification/> :
				mark ?
					<Bookmark/> :
				<div className="Home">
					<div className="home-top">
						<div className="home-top1">
							<UsersThree size={40} color="#35e01f" weight="duotone" onClick={onLogo}/>
							<h1>Wecare</h1>
						</div>
						<div className="home-top2">
							<button onClick={onSearch}>
								<MagnifyingGlass size={16} color="#35e01f" weight="bold" />
							</button>
							<button onClick={onNotify}>
								<Bell size={16} color="#35e01f" weight="fill" />
							</button>
							<button onClick={onMark}>
								<BookmarkSimple size={16} color="#35e01f" weight="fill" />
							</button>
						</div>
					</div>

					<div className="home-mid">
						<div className="wallet">
							<button>
								<Wallet size={30} color="#35e01f" weight="duotone" />
							</button>
							<div>
								<h3>$349</h3>
								<p>My wallet balance</p>
							</div>
						</div>
						<button>Top up</button>
					</div>

					<div className="help">
						<p>Help Alice Brain Surgery</p>
						<div>
							<Circle size={10} color="#35e01f" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
						</div>
					</div>

					<Urgent/>
					<Coming/>
					<Watch/>
					<Prayer/>
					<Menu/>
				</div>
			}
		</div>
		)
}

export default Home;