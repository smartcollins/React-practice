import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import {ArrowLeft} from "phosphor-react";

function Home(){
	return(
			<div className="home">
				<div className="forgot-top">
					<ArrowLeft size={32} color="#2fe22c" weight="duotone"/>
					<h2>Select your country</h2>
				</div>
				<CountryDropdown  id="UNIQUE_ID" className='select-country'
				 preferredCountries={['gb', 'us']}  value="" handleChange={e => console.log(e.target.value)}>
				</CountryDropdown>
				<button className="nxt">Verify</button>
			</div>
		)
}

export default Home;