import {useState} from "react"
import {ArrowLeft,DotsThreeVertical} from "phosphor-react"

function Donate(){
	return(
		<div>
			
				<div className="donate-main">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f"/>
							<h1>Donate</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#35e01f" />
						</button>
					</div>
					<div>
						<h3>Enter the Amount</h3>
						<button className="donated">$0</button>
						<div className="amount">
							<button>$5</button>
							<button>$10</button>
							<button>$25</button>
							<button>$50</button>
							<button>$100</button>
							<button>$200</button>
						</div>
					</div>
					<div className="anonymus">
						<input
	                        id="donate"
	                        type="checkbox"
	                    />
						<label htmlFor="donate">Donate as anonymus</label>
					</div>
					<div className="donate-end">
						<button className="nxt">Continue</button>
					</div>
				</div>
			
		</div>
		)
}

export default Donate;