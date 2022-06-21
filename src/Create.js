import {useState} from "react"
import MyFundraising from "./MyFundraising"
import {ArrowLeft,Plus,Trash,CaretDown,CurrencyDollar,CalendarBlank} from "phosphor-react"

function Create(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<MyFundraising/>:
				<div className="create-new">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={32} color="#2fe22c" weight="duotone" onClick={onBack} />
							<h2>Create New Fundraising</h2>
						</div>
					</div>
					<div>
						<div className="create-new-top">
							<Plus size={20} color="#1ab75d" weight="duotone" />
							<p>Add Cover Photos</p>
						</div>
						<div className="edit-grid">
							<div>
								<Plus size={20} color="#1ab75d" weight="duotone" />
							</div>
							<div>
								<Plus size={20} color="#1ab75d" weight="duotone" />
							</div>
							<div>
								<Plus size={20} color="#1ab75d" weight="duotone" />
							</div>
							<div>
								<Plus size={20} color="#1ab75d" weight="duotone" />
							</div>
						</div>
						<div className="fund-detail">
							<h3>Fundraising Details</h3>

							<p>Title <span>*</span></p>
							<div className="user-input">
								<input type="text" placeholder="Title"/>
							</div>

							<p>Category <span>*</span></p>
							<div className="user-input">
								<input type="text" placeholder="Category"/>
								<CaretDown size={20} color="#7d7d7d" weight="fill" />
							</div>

							<p>Total <span>*</span></p>
							<div className="user-input">
								<input type="text" placeholder="Total Donation Required"/>
								<CurrencyDollar size={20} color="#7d7d7d" weight="fill" />
							</div>

							<p>Chose Donation Expiration Date <span>*</span></p>
							<div className="user-input">
								<input type="text" placeholder="Select Date"/>
								<CalendarBlank size={20} color="#858c94" weight="duotone" />
							</div>
							<p><label for="mytext">Fund Usage:</label></p>
							<textarea id="mytext" name="mytext" rows="2" cols="50">
							lorem ipsum dolor sit amet, consectetur adipiscing elit,
								Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam,quis nostrad.
								Ut labore et dolore magna aliqua. Ut enim ad minim.
							At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
							</textarea>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Create;