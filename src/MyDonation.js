import {useState} from "react"
import {UsersThree,DotsThreeVertical} from "phosphor-react"


function MyDonation(){
	return(
		<div>
			{
				<div>
					<div className="bookmark-top">
						<div className="back">
							<UsersThree size={30} color="#35e01f"/>
							<h1>My Donation</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#35e01f"/>
						</button>
					</div>
				</div>
			}
		</div>
		)
}


export default MyDonation;