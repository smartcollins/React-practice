import React from "react"
import {useState} from "react"
import Menu from "./Menu"
import Remove from "./Remove"
import {DotsThreeVertical,BookmarkSimple,ArrowLeft} from "phosphor-react"


function Bookmark(){
	const [book,setBook] = useState(false)
	const [bookmark,setBookMark] = useState(false)

	function onBook(){
		setBook(true)
	}

	function onBookMark(){
		setBookMark(true)
	}

	const style = {
		backgroundColor : "rgba(0,0,0,0.5)",
		
	}

	return(
		<div className="bookmark" style={style}>
			<div className="bookmark-top">
				<div className="back">
					<ArrowLeft size={30} color="#35e01f" />
					<h1>Bookmark</h1>
				</div>
				<button className="dot3">
					<DotsThreeVertical size={30} color="#35e01f" />
				</button>
			</div>
			<div className="bookmark-btn">
				<button>All</button>
				<button>Art</button>
				<button>Music</button>
				<button>Sport</button>
			</div>
			{	bookmark ? 
					<Remove/> :
				book ? 
				<div>
					<div className="bookmark-card">
						<div>
							<div className="bookmark-img">
								<div className="bookmark-mark" onClick={onBookMark}>
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div>
								<div className="bookmark-note">
									<h3>Help Dilan for brain Turmor Surgery</h3>
									<p>
										<span>$7,379 </span>
										fund raised from $8,200
									</p>
								</div>
								<div className="bookmark-bar"></div>
								<div className="bookmark-end">
									<p><span>3,274</span> Donators</p>
									<p><span>12</span> days left</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bookmark-card">
						<div>
							<div className="bookmark-img2">
								<div className="bookmark-mark" onClick={onBookMark}>
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div>
								<div className="bookmark-note">
									<h3>Help Orphange Children to Buy Study Books</h3>
									<p>
										<span>$2,379 </span>
										fund raised from $4,200
									</p>
								</div>
								<div className="bookmark-bar"></div>
								<div className="bookmark-end">
									<p><span>1,038</span> Donators</p>
									<p><span>22</span> days left</p>
								</div>
							</div>
						</div>
					</div>
				</div> :
				<div className="bookmark-null">
					<div className="bookmark-null-main">
						<div className="book" onClick={onBook}>
							<BookmarkSimple size={30} color="#ffffff" />
						</div>
						<p>You have no bookmarked</p>
					</div>
					<Menu/>
				</div>
			}
		</div>
		)
}

export default Bookmark;