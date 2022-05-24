import React from "react";
import Urgent from "./Urgent"
import Coming from "./Coming"
import Watch from "./Watch"
import Prayer from "./Prayer"
import Menu from "./Menu"
import Notification from "./Notification"
import Bookmark from "./Bookmark"
import{useState} from "react"
import {UsersThree,MagnifyingGlass,Bell,BookmarkSimple,Wallet,Circle} from "phosphor-react";

function Home(){
	const [notify,setNotify] = useState(false)
	const [mark,setMark] = useState(false)

	function onNotify(){
		setNotify(true)
	}

	function onMark(){
		setMark(true)
	}
	return(
		<div>
			{	notify ?
				<Notification/> :
				mark ?
				<Bookmark/> :
				<div>
					<div className="home-top">
						<div className="home-top1">
							<UsersThree size={30} color="#35e01f" />
							<h1>Wecare</h1>
						</div>
						<div className="home-top2">
							<button>
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