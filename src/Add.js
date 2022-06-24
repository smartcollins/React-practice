import {useState} from "react"
import TopUp from "./TopUp"
import WalletCenter from "./WalletCenter"
import {ArrowLeft,CalendarBlank,CaretDown,CurrencyDollar,QrCode,CurrencyBtc,CreditCard,AppleLogo,Circle,CheckCircle} from "phosphor-react"

function Add(){
	const [back,setBack] = useState(false)
	const [add,setAdd] = useState(false)
	const [cont,setCont] = useState(false)
	const [cont2,setCont2] = useState(false)
	const [confirm,setConfirm] = useState(false)
	const [success,setSuccess] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onAdd(){
		setAdd(true)
	}

	function onCont(){
		setCont(true)
	}

	function onTopContine(){
		setCont2(true)
	}

	function onConfirm(){
		setCont2(false)
		setConfirm(true)
	}

	function onSuccess(){
		setSuccess(true)
	}

	return(
		<div>
			{
				success?
				<WalletCenter/>:
				back?
				<TopUp/>:
				<div>
					{
						cont2?
						<div>
							<div className="back">
								<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
								<h1>Enter Pin</h1>
							</div>
							<div className="create">
								<h3>Please Enter Your Pin</h3>
								<Circle size={16} color="#1EBA60" weight="fill" />
								<Circle size={16} color="#1EBA60" weight="fill" />
								<Circle size={16} color="#1EBA60" weight="fill" />
								<Circle size={16} color="#1EBA60" weight="fill" />
								<Circle size={16} color="#E6E6E6" weight="fill" />
								<Circle size={16} color="#E6E6E6" weight="fill" />
							</div>
							<button onClick={onConfirm} className="nxt">Confirm</button>
						</div>:
						add?
						<div className="message">
							{
								confirm?
								<div className="great">
									<div>
										<CheckCircle size={30} color="#ffffff" weight="fill" />
									</div>
									<h2>Top up Succesful!</h2>
									<p>You have successfully top up your wallet for $100</p>
									<button onClick={onSuccess} className="nxt">Ok</button>
								</div>:
								<div></div>
							}
							<div className={confirm?"success":"topup2"}>
								<div className="bookmark-top">
									<div className="back">
										<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
										<h1>Top up</h1>
									</div>
									<button className="dot3">
										<QrCode size={30} color="#1EBA60" />
									</button>
								</div>
								<div className="coming-top">
									<h3>Select Top up Method</h3>
									<h5>Add Card</h5>
								</div>
								<div className="payment-btn">
									<div className="home-mid">
										<div className="wallet">
											<button>
												<CurrencyBtc size={20} color="#1EBA60" />
											</button>
											<p>Bitcoin wallet</p>
										</div>
										<input id="donate" type="radio"/>
									</div>
									<div className="home-mid">
										<div className="wallet">
											<button>
												<CreditCard size={20} color="#1EBA60" weight="duotone" />
											</button>
											<p>Credit card</p>
										</div>
										<input id="donate" type="radio"/>
									</div>
									<div className="home-mid">
										<div className="wallet">
											<button>
												<AppleLogo size={20} color="#1EBA60" weight="duotone"/>
											</button>
											<p>Apple play</p>
										</div>
										<input id="donate" type="radio"/>
									</div>
									<h3>Pay with Debit/Credit Card</h3>
									<div className="home-mid">
										<div className="wallet">
											<button>
												<AppleLogo size={20} color="#1EBA60" weight="duotone"/>
											</button>
											<p>Apple play</p>
										</div>
										<input id="donate" type="radio"/>
									</div>
								</div>
								<br/>
								<button onClick={onTopContine} className="nxt">Continue</button>
							</div>
						</div>:
						<div>
							<div className="bookmark-top">
								<div className="back">
									<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
									<h1>Add New Card</h1>
								</div>
							</div>
							<div className="new-card">
								
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
									<div className="add-end1">
										<p>Expiry Date <span>*</span></p>
										<div className="user-input">
											<input type="text" placeholder="Expiry Date Donation Required"/>
											<CurrencyDollar size={20} color="#7d7d7d" weight="fill" />
										</div>
									</div>
									<div className="add-end2">	
										<p>CVV <span>*</span></p>
										<div className="user-input">
											<input type="text" placeholder="Select Date"/>
											<CalendarBlank size={20} color="#858c94" weight="duotone" />
										</div>
									</div>	
								</div>	
							</div>
							<br/>
							<br/>
							<div>
								<button onClick={onAdd} className="nxt">Add New Card</button>
							</div>
						</div>
					}
				</div>
			}
		</div>
		)
}

export default Add;