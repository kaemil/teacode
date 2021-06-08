function ListItem(props){
     const avatar=[]
     if(props.avatar !== null){
          avatar.push(<img key={props.name} src={props.avatar} alt={props.avatar}></img>)
     }else{
          const initial = props.name.charAt(0) + props.surname.charAt(0)
          avatar.push(initial)
     }
     //Checking checkbox status//
     const checking = ()=>{
          const user=document.getElementById(props.userID)
          if(user.hasAttribute('checked')){
               user.removeAttribute('checked','')
               props.deleteID(props.userID)
          } else{
               user.setAttribute('checked','')
               props.addID(props.userID)
          }
     }
     
     return(
          <div className='contact__listItem' onClick={checking}>
               <div className='contact__avatar'>{avatar}</div>
               <div className='contact__fullName'>{props.name} {props.surname}</div>
               <div className='contact__checkbox'><input type='checkbox' id={props.userID}></input></div>
          </div>
     )
}
     
export default ListItem
     