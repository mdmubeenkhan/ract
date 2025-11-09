import { useState } from 'react';
import "./item.css"
import Sub from "./Sub"

// function Item({ imageSrc, title, rating }) {
//   return (
//     <div className="item">
//       <img src={imageSrc} alt={title} />
//       <p>{title}</p>
//       <p>{rating}</p>
//     </div>
//   );
// }


function Item(props) {
  
  const [newemail, changeHandler] = useState("")
  const changeEvent = (event) =>{
    changeHandler(event.target.value)
    // alert(`new value = ${event.target.value}`)
  }

  const [email, changeEmail] = useState(props.email)
  const changeTitle =() =>{
    
    changeEmail(newemail)  
  }
  

  return (
    <div className="item">
      <img src={props.imageSrc} alt={props.title} />
      <p>{email}</p>
      <p>{props.title}</p>
      <p>{props.rating}</p>
      < Sub name={props.name} email={email}/>
      <input type='text' placeholder='enter email' value={newemail} onChange={changeEvent}></input>
      <button onClick={ changeTitle }>ChangeEmail</button>
    </div>
  );
}

// Example usage:
//<Item imageSrc="/images/photo.jpg" title="Sunset" rating="⭐️⭐️⭐️⭐️" />


export default Item