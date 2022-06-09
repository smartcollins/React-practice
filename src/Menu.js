import {useState} from "react";
import MyDonation from "./MyDonation"
import MyFundraising from "./MyFundraising"
import Inbox from "./Inbox"
import Userprofile from "./Userprofile"
import {House,Notepad,ListDashes,ChatText,User} from "phosphor-react";

function Menu(){
	const [calender,setCalender] = useState(false)
	const [fund,setFund] = useState(false)
	const [inbox,setInbox] = useState(false)
	const [profile,setProfile] = useState(false)

	function onCalender(){
		setCalender(true)
	}

	function onFund(){
		setFund(true)
	}

	function onInbox(){
		setInbox(true)
	}

	function onProfile(){
		setProfile(true)
	}

	return(
		<div>
			{
				calender ?
				<MyDonation/> :
				fund ?
				<MyFundraising/> :
				inbox ?
				<Inbox/> :
				profile ?
				<Userprofile/> :
				<div className="menu">
					<House size={30} color="#ffffff" weight="fill" />
					<Notepad size={30} color="#35e01f" onClick={onCalender} />
					<ListDashes size={30} color="#35e01f" weight="bold" onClick={onFund} />
					<ChatText size={30} color="#35e01f" onClick={onInbox} />
					<User size={30} color="#35e01f" onClick={onProfile} />
				</div>
			}
		</div>
		)
}

export default Menu;