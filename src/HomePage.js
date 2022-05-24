import {useState} from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import {ArrowLeft} from "phosphor-react";
import Profile from "./Profile";


function HomePage(){
	const [profile,setProfile] = useState(false)

	function onProfile(){
		setProfile(true)
	}

	return(
			<div>
				{
					profile ?
					<Profile/> :
					<div className="home-page">
						<div className="back">
							<ArrowLeft size={32} color="#2fe22c" weight="duotone"/>
							<h2>Select your country</h2>
						</div>
						<CountryDropdown  id="UNIQUE_ID" className='select-country'
						 preferredCountries={['gb', 'us']}  value="" handleChange={e => console.log(e.target.value)}>
						</CountryDropdown>
						<button onClick={onProfile} className="nxt">Verify</button>
					</div>
				}
			</div>
		)
}

export default HomePage;