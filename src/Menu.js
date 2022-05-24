import React from "react";
import {House,Notepad,ListDashes,ChatText,User} from "phosphor-react";

function Menu(){
	return(
		<div className="menu">
			<House size={30} color="#ffffff" weight="fill" />
			<Notepad size={30} color="#35e01f" />
			<ListDashes size={30} color="#35e01f" weight="bold" />
			<ChatText size={30} color="#35e01f" />
			<User size={30} color="#35e01f" />
		</div>
		)
}

export default Menu;