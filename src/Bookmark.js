import React from "react"
import {useState} from "react"
import {DotsThreeVertical,BookmarkSimple,ArrowLeft} from "phosphor-react"


function Bookmark(){
	const [book,setBook] = useState(false)

	function onBook(){
		setBook(true)
	}

	return(
		<div className="bookmark">
			<div className="bookmark-top">
				<div className="back">
					<ArrowLeft size={30} color="#35e01f" />
					<h1>Notification</h1>
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
			{
				book ? 
				<div>
					<div className="bookmark-card">
						<div>
							<div className="bookmark-img">
								<div className="bookmark-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div>
								<div className="bookmark-note">
									<h3>Help Orphange Children to ...</h3>
									<p>
										<span>$2,379 </span>
										fund raised from $4,200
									</p>
								</div>
								<div className="bookmark-bar"></div>
								<div className="bookmark-end">
									<p><span>1,280</span> Donators</p>
									<p><span>19</span> days left</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bookmark-card">
						<div>
							<div className="bookmark-img2">
								<div className="bookmark-mark">
									<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
								</div>
							</div>
							<div>
								<div className="bookmark-note">
									<h3>Help Orphange Children to ...</h3>
									<p>
										<span>$2,379 </span>
										fund raised from $4,200
									</p>
								</div>
								<div className="bookmark-bar"></div>
								<div className="bookmark-end">
									<p><span>1,280</span> Donators</p>
									<p><span>19</span> days left</p>
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
				</div>
			}
		</div>
		)
}

export default Bookmark;