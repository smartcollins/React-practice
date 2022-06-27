import {useState} from "react"
import Help from "./Help"
import {ArrowLeft,CaretDown} from "phosphor-react"

function Faqs(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Help/>:
				<div className="faqs">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>FAQ</h1>
						</div>
					</div>
					<div className="urgent-btn">
						<button>General</button>
						<button>Login</button>
						<button>Account</button>
						<button>Wecare</button>
					</div>
					<div className="faqs-top">
						<div className="setting-mid">
							<p>How to Use Wecare?</p>
							<CaretDown size={20} color="#1EBA60" weight="fill" />
						</div>
						<p>Wecare is the greatest Donation, Charity, & Fundraising Mobile App platform in this Century.</p>
					</div>
					<div className="setting-mid">
						<p>How to Use Wecare?</p>
						<CaretDown size={20} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>Can i create my own fundraising?</p>
						<CaretDown size={20} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>How to top up balance on Wecare?</p>
						<CaretDown size={20} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>How to withdraw balance on Wecare?</p>
						<CaretDown size={20} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>Is Wecare free to use?</p>
						<CaretDown size={20} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>How to make offer on Wecare</p>
						<CaretDown size={20} color="#1EBA60" weight="fill" />
					</div>
				</div>
			}
		</div>
		)
}

export default Faqs;