// import {useState} from "react";
// import MyDonation from "./MyDonation"
// import MyFundraising from "./MyFundraising"
// import Inbox from "./Inbox"
// import Userprofile from "./Userprofile"
// import {House,Notepad,ListDashes,ChatText,User} from "phosphor-react";

// function Menu({profile}){
// 	const [home,setHome] = useState(true)
	// const [calender,setCalender] = useState(false)
	// const [fund,setFund] = useState(false)
	// const [inbox,setInbox] = useState(false)
// 	// const [profile,setProfile] = useState(false)

// 	function onCalender(){
// 		setCalender(true)
// 	}

// 	function onFund(){
// 		setFund(true)
// 	}

// 	function onInbox(){
// 		setInbox(true)
// 	}

// 	// function onProfile(){
// 	// 	setProfile(true)
// 	// }

// 	const style={
// 		backgroundColor: "#1EBA60"
// 	}

// 	return(
// 		<div>
// 			{
// 				calender ?
// 				<MyDonation/> :
// 				fund ?
// 				<MyFundraising/> :
// 				inbox ?
// 				<Inbox/> :
// 				profile ?
// 				<Userprofile/> :
// 				<div className="menu">
// 					<House style={style} size={30} color="#ffffff" weight="fill" />
// 					<Notepad style={calender?style : null} size={30} color="#1EBA60" onClick={onCalender} />
// 					<ListDashes style={fund?style : null} size={30} color="#1EBA60" weight="bold" onClick={onFund} />
// 					<ChatText style={inbox?style : null} size={30} color="#1EBA60" onClick={onInbox} />
// 					<User style={profile?style : null} size={30} color="#1EBA60" onClick={profile} />
// 				</div>
// 			}
// 		</div>
// 		)
// }

// export default Menu;


import {useState} from "react";
import {House,Notepad,ListDashes,ChatText,User} from "phosphor-react";

function Menu({onCalender,onFund,onInbox,onProfile}){
	const [home,setHome] = useState(true)
	const [inside,setInside] = useState(false)

	function onIn(){
		setInside(true)
		onInbox()
	}

	const style={
		backgroundColor:"#1EBA60"
	}
	
	return(
		<div>
			{
				<div className="menu">
					<House size={30} color="#1EBA60" weight="fill" />
					<Notepad size={30} color="#1EBA60" onClick={onCalender} />
					<ListDashes size={30} color="#1EBA60" weight="bold" onClick={onFund} />
					<ChatText style={inside?"style": null}  size={30} color="#1EBA60" onClick={onIn} />
					<User onClick={onProfile} size={30} color="#1EBA60" />
				</div>
			}
		</div>
		)
}

export default Menu;