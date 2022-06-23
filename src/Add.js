import {useState} from "react"
import TopUp from "./TopUp"
import {ArrowLeft,CalendarBlank,CaretDown,CurrencyDollar} from "phosphor-react"

function Add(){
	const [back,setBack] = useState(false)
	const [add,setAdd] = useState(false)
	const [cont,setCont] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onAdd(){
		setAdd(true)
	}

	function onCont(){
		setCont(true)
	}

	return(
		<div>
			{
				back?
				<TopUp/>:
				<div>
					{
						add?
						<div></div>:
						<div>
							<div className="bookmark-top">
								<div className="back">
									<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
									<h1>Withdraw</h1>
								</div>
							</div>
							<div className="fund-detail">
								<p>Full Name <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Full Name"/>
								</div>

								<p>Card Number <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Card Number"/>
									<CaretDown size={20} color="#7d7d7d" weight="fill" />
								</div>
								<div className="add-end">
									<div>
										<p>Expiry Date <span>*</span></p>
										<div className="user-input">
											<input type="text" placeholder="Expiry Date Donation Required"/>
											<CurrencyDollar size={20} color="#7d7d7d" weight="fill" />
										</div>
									</div>
									<div>	
										<p>CVV <span>*</span></p>
										<div className="user-input">
											<input type="text" placeholder="Select Date"/>
											<CalendarBlank size={20} color="#858c94" weight="duotone" />
										</div>
									</div>	
								</div>	
							</div>
						</div>
					}
				</div>
			}
		</div>
		)
}

export default Add;