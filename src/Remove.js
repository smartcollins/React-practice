import React from "react"
import {useState} from "react"
import Bookmark from "./Bookmark"
import {BookmarkSimple,ArrowLeft,DotsThreeVertical} from "phosphor-react"


function Remove(){
	return(
		<div className="remove">
			<div className="bookmark-card">
				<div>
					<div className="bookmark-img">
						<div className="bookmark-mark">
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
			<div className="remove-main">
				<div className="bookmark-card">
					<div>
						<div className="bookmark-img2">
							<div className="bookmark-mark">
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
				<div>
					<h3>Remove from your bookmark</h3>
					<div className="remove-btn">
						<button>cancel</button>
						<button>Yes,Remove</button>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Remove;

