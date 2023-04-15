import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom';
function Form() {
    const[formValues,setFormValues]=useState({name:'',username:'',email:'',mobile:'',check:false});
    const navigate = useNavigate()
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        username: "",
        mobile:"",
        check:""
      });
    const handleChange = (e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
        console.log(formValues)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        
        const newErrors = {
            name: "",
            email: "",
            username: "",
            mobile:"",
            check:""
          };
          let isValid = true;
          if (!formValues.name) {
            newErrors.name = "Name is required";
            isValid = false;
          }
          if (!formValues.email) {
            newErrors.email = "Email is required";
            isValid = false;
          }
          if (!formValues.username) {
            newErrors.username = "Username is required";
            isValid = false;
          }
          if (!formValues.mobile) {
            newErrors.mobile = "Mobile is required";
            isValid = false;
          }
          if (!formValues.check) {
            newErrors.check = "Checkbox is required";
            isValid = false;
          }
          setFormErrors(newErrors);
          if (isValid) {
            window.localStorage.setItem("userData",JSON.stringify(formValues))
            navigate('/choice')
          }
        
    }
  return (
    <div className='formDiv'>
            <p className='title'>Super App</p>
            <p>Create a new Account</p>
            <p className='emailGoogle'>Email <span style={{color:"green"}}>|</span> Google</p>
        <form className='form'>
        <input onChange={(e)=>handleChange(e)}type="text" name='name' placeholder='Name' autoComplete='off' />
        <div className="error-message">{formErrors.name}</div>
        <input onChange={(e)=>handleChange(e)} type="text" name='username' placeholder='UserName' autoComplete='off' />
        <div className="error-message">{formErrors.username}</div>
        <input onChange={(e)=>handleChange(e)} type="email" name='email' placeholder='Email' autoComplete='off' />  
        <div className="error-message">{formErrors.email}</div>  
        <input onChange={(e)=>handleChange(e)} type="tel" name='mobile' placeholder='Mobile' autoComplete='off' />
        <div className="error-message">{formErrors.mobile}</div>
        <div className='label'>
            <div className='checkbox'>
            <input onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.checked})} className='checkbox' type="checkbox" name='check' />
            </div>
            <div className='labeltext'><label className='labeltext'>Share my registration data with Superapp</label></div>
        </div>
        <div className="error-message checkboxerror">{formErrors.check}</div>
        <button onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
        </form>
        
                <p className='footer-para'>By clicking on Sign up. you agree to Superapp<span className='span'style={{color:"green"}}> Terms and Conditions of Use</span></p>
                <p className='footer-para'>To learn more about how Superapp collects, uses, shares and <br/> protects your personal data please head Superapp<span className='span' style={{color:"green"}}> Privacy Policy</span></p>    
                
        </div>
  )
}

export default Form
