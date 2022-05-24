import React from "react"
import {Bell,DotsThreeVertical,ArrowLeft,CheckCircle,XCircle} from "phosphor-react";
import {useState} from "react";

function Notification(){
	const [bell,setBell] = useState(false)

	function onBell(){
		setBell(true)
	}
	return(
		<div className="notification">
			<div className="notification-top">
				<div className="back">
					<ArrowLeft size={30} color="#35e01f" />
					<h1>Notification</h1>
				</div>
				<button className="dot3">
					<DotsThreeVertical size={30} color="#35e01f" />
				</button>
			</div>
			<div>
				{
					bell ? 
						<div className="notify">
							<p>Today, December 25 2023</p>
							<div className="notify-bar">
								<div className="notify-logo">
									<CheckCircle size={20} color="#ffffff" weight="fill"/>
								</div>
								<div>
									<h5>Top up Successful</h5>
									<p>You have successsfully top up your wallet in the amount of $100</p>
								</div>
							</div>
							<div className="notify-bar">
								<div className="notify-logo cancel">
									<XCircle size={20} color="#ffffff" weight="fill"/>
								</div>
								<div>
									<h5>Donation Cancelled!</h5>
									<p>You have cancel donation for victims of natural disasters</p>
								</div>

							</div>
							<p>Yesterday, December 24 2023</p>
							<div className="notify-bar">
								<div className="notify-logo new">
									<Bell size={20} color="#ffffff" weight="fill" />
								</div>
								<div>
									<h5>New Feature Available</h5>
									<p>You can now invite friends to join donation with you</p>
								</div>
							</div>

							<p>Today, December 23 2023</p>
							<div className="notify-bar">
								<div className="notify-logo">
									<CheckCircle size={20} color="#ffffff" weight="fill"/>
								</div>
								<div>
									<h5>Top up Successful</h5>
									<p>You have successsfully top up your wallet in the amount of $100</p>
								</div>
							</div>
							<div className="notify-bar">
								<div className="notify-logo cancel">
									<XCircle size={20} color="#ffffff" weight="fill"/>
								</div>
								<div>
									<h5>Donation Cancelled</h5>
									<p>You cancelled donation for victims of natural disasters</p>
								</div>
							</div>
						</div> :
						<div className="notify-null">
							<div className="notify-null-main">
								<div className="bell" onClick={onBell}>
									<Bell size={30} color="#ffffff" />
								</div>
								<p>You have no notification</p>
							</div>
						</div>
				}
			</div>
		</div>
		)
}


export default Notification;
