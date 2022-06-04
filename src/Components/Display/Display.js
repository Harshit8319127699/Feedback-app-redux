import React from 'react'
import "../Display/Display.css";
import { useSelector,useDispatch } from 'react-redux';
import { deleteFeedback } from '../../Redux/Action/Action';


function Display() {
const dispatch=useDispatch()
const state=useSelector(state=>state.feedback.feedback)
console.log(state);
const deletehandler=(e)=>{
const arr=[...state]
arr.splice(e.target.id,1)
dispatch(deleteFeedback(arr))
}

const hold=state.map((elem,index)=>{
  return <div className="feedbackcard" key={index} id={index}>
  <div className="head">
    <h3>Feedback</h3>
  </div>
  <div className='details'>
    <p>name: {elem.name}</p>
    <p>Contact:{elem.contact}</p>
    <p>email: {elem.email}</p>
    <p>Feedback: {elem.Feedback}</p>
  <i class="ri-delete-bin-7-fill" id={index} onClick={deletehandler}></i>
  </div>
</div>
})
  return (
    <div className=' container2'>
      {state.length>0?hold:<h1>No Feedback</h1>}
      
    </div>
  )
}

export default Display
