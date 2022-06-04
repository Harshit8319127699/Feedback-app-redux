import React from 'react'
import "../Form/Form.css";
import{useForm} from "react-hook-form"
import { addFeedback } from '../../Redux/Action/Action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate=useNavigate()
const {register,handleSubmit}=useForm()
const state=useSelector(state=>state.feedback.feedback)
console.log(state);
const dispatch=useDispatch()
const handler=(data)=>{
    dispatch(addFeedback(data))
    navigate('/display')  
}

return (
<>
<div  className="container1">
<div className="formholder">
<form onSubmit={handleSubmit(handler)} >
<input type="text" name='name' placeholder='name' {...register("name")} /> <br />
<input type="text" name='contact' placeholder='contact' {...register("contact")} /> <br />
<input type="text" name='email' placeholder='email' {...register("email")} /> <br />
<input type="text" name='feedback' placeholder='feedback' {...register("feedback")} /> <br />
<button type='submit'>Submit</button>

</form>

</div>



</div>


</>

  )
}

export default Form