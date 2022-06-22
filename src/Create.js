import {useState} from "react"
import MyFundraising from "./MyFundraising"
import {ArrowLeft,Plus,Trash,CaretDown,CurrencyDollar,CalendarBlank,CloudArrowUp,ArchiveBox,CheckCircle,GlobeHemisphereEast} from "phosphor-react"

function Create(){
	const [back,setBack] = useState(false)
	const [create,setCreate] = useState(false)
	const [ok,setOk] = useState(false)
	const [see,setSee] = useState(false)
	const [add,setAdd] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onCreate(){
		setCreate(true)
	}

	function onOk(){
		setOk(true)
	}

	function onCancel(){
		setCreate(false)
		setOk(false)
	}

	function onSee(){
		setSee(true)
	}

	function onAdd(){
		setAdd(true)
	}

	return(
		<div>
			{
				back?
				<MyFundraising/>:
				see ?
				<MyFundraising/>:
				<div className="edit">
					{
						ok ?
						<div className="great">
							<div>
								<GlobeHemisphereEast size={30} color="#ffffff" weight="fill" />
							</div>
							<h2>Congratulations!</h2>
							<p>Your fundraising proposal has been accepted and published.</p>
							<div className="great-btn">
								<button onClick={onCancel}>Cancel</button>
								<button onClick={onSee}>See Fundraising</button>
							</div>
						</div> :
						<div className="great">
							<div>
								<CheckCircle size={30} color="#ffffff" weight="fill" />
							</div>
							<h2>Submit Successful!</h2>
							<p>We are currently reviewing a fundraising proposal for your donation. We will tell you the result soon.</p>
							<button onClick={onOk} className="nxt">Ok</button>
						</div>
					}
					<div className={create?"success" : "edit"}>
						<div className="bookmark-top">
							<div className="back">
								<ArrowLeft size={32} color="#2fe22c" weight="duotone" onClick={onBack} />
								<h2>Create New Fundraising</h2>
							</div>
						</div>
						<div>
							<div className={add?"edit-img":"create-new-top"} onClick={onAdd}>
								<Plus className={add?"edit-grid-null":""}size={20} color="#1ab75d" weight="duotone" />
								<p className={add?"edit-grid-null":""}>Add Cover Photos</p>
							</div>
							<div className="edit-grid">
								<div className={add?"edit-img2":"edit-dash"}>
									<Plus className={add?"edit-grid-null":""} size={20} color="#1ab75d" weight="duotone" />
								</div>
								<div className={add?"edit-img3":"edit-dash"}>
									<Plus className={add?"edit-grid-null":""} size={20} color="#1ab75d" weight="duotone" />
								</div>
								<div className={add?"edit-img4":"edit-dash"}>
									<Plus className={add?"edit-grid-null":""} size={20} color="#1ab75d" weight="duotone" />
								</div>
								<div className={add?"edit-img5":"edit-dash"}>
									<Plus className={add?"edit-grid-null":""} size={20} color="#1ab75d" weight="duotone" />
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

							<div className="fund-detail">
								<h3>Donation Recipient Details</h3>

								<p>Name of Recipients (People/Organisation) <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Name"/>
								</div>

								<p>Upload Donation Proposal Documents <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Upload Documents"/>
									<CloudArrowUp size={20} color="#858c94" weight="duotone" />
								</div>

								<p>Upload Medical Documents (Optional for medical) <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Medical Documents"/>
									<CloudArrowUp size={20} color="#858c94" weight="duotone" />
								</div>

								<p><label for="mystory">Story</label><span>*</span></p>
								<textarea id="mystory" name="mystory" rows="2" cols="50">
								lorem ipsum dolor sit amet, consectetur adipiscing elit,
									Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam,quis nostrad.
									Ut labore et dolore magna aliqua. Ut enim ad minim.
								At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
								</textarea>
								<div className="by">
									<input name="by" id="by" type="checkbox"/>
									<label for="by">By checking this, you agree to th terms & conditions that apply to us.</label>
								</div>
								<div className="great-btn">
									<button>
										<ArchiveBox size={16} color="#1EBA60" weight ="fill"/>
										<p>Draft</p>
									</button>
									<button onClick={onCreate}>Create & Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Create;