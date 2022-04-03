import {useState} from "react";
import {ArrowLeft,ChatText,Envelope} from "phosphor-react";
import Ready from "./Ready"

function Reset2(){
	const [save,setSave] = useState(false);

	function onSave(){
		setSave(true)
	}

	const [form,setForm] = useState({
       email:"",
       password:"",
       password2:"",
       join: true
   })
   
   function handle(e){
       const {name,value,type,checked} = e.target
       setForm(prevForm =>{
           return {
               ...prevForm,
               [name] : type === "checkbox" ? checked : value,
               
           }
       })
   }
   // console.log(form)
    function handleSubmit(event) {
        event.preventDefault()
    }    


	return(
			<div>
				{
					save ? 
						<Ready/> :
					<div>
						<div className="forgot-top">
							<ArrowLeft size={32} color="#2fe22c" weight="fill" />
							<h2>Forgot password</h2>
						</div>
						<img src="https://livex.co.za/svg/secure_server.svg" alt="logo"/>
						<div className="form-container">
								<h2>Create a new password</h2>
					            <form className="form" onSubmit={handleSubmit}>
					                <input 
					                    type="email" 
					                    placeholder="Email address"
					                    className="form--input"
					                    name="email"
					                    value={form.email}
					                    onChange={handle}
					                />
					                <input 
					                    type="password" 
					                    placeholder="Password"
					                    className="form--input"
					                    name="password"
					                    value={form.password}
					                    onChange={handle}
					                />
					                <input 
					                    type="password" 
					                    placeholder="Confirm password"
					                    className="form--input"
					                    name="password2"
					                    value={form.password2}
					                    onChange={handle}
					                />
					                
					                <div className="form--marketing">
					                    <input
					                        id="okayToEmail"
					                        type="checkbox"
					                        name="join"
					                        checked={form.join}
					                        onChange={handle}
					                    />
					                    <label htmlFor="okayToEmail">Keep me always logged in</label>
					                </div>
					                <button onClick={onSave} className="form--submit nxt">Save</button>
					            </form>
					        </div>
					</div>
				}
			</div>
		)
}

export default Reset2;