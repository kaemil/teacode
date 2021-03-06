import {useEffect} from "react";

function ListItem(props){
     const avatar=[]
     if(props.avatar !== null){
          avatar.push(<img key={props.name} src={props.avatar} alt='?'></img>)
     }else{
          const initial = props.name.charAt(0) + props.surname.charAt(0)
          avatar.push(initial)
     }
     //Checking checkbox status//
     const checking = ()=>{
          if(props.listID.includes(props.userID)){
               props.deleteID(props.userID)
               document.getElementById(props.userID).removeAttribute('checked','')
          } else {
               props.addID(props.userID)
               document.getElementById(props.userID).setAttribute('checked','')
          }
     }
     useEffect(() => {
          if(props.listID.includes(props.userID)){
               document.getElementById(props.userID).setAttribute('checked','')
          } else{
               document.getElementById(props.userID).removeAttribute('checked','')
          }
     });

     return(
          <div className='contact__listItem' onClick={checking}>
               <div className='contact__avatar'>{avatar}</div>
               <div className='contact__fullName'>{props.name} {props.surname}</div>
               <div className='contact__checkbox'><input type='checkbox' id={props.userID}></input></div>
          </div>
     )
}
     
export default ListItem
     
