import ListItem from './ListItem'

function UsersList(props){
     const userList=[]
     if (props.contactList.length > 0) {
          //Rendering all contacts from the list//
          if(props.filterText ===''){
               for(let i=20*(props.switchPage-1);i<=20*props.switchPage-1;i++){
                    if(props.contactList[i]!==undefined){
                         const name = props.contactList[i].first_name
                         const surname = props.contactList[i].last_name
                         const avatar = props.contactList[i].avatar
                         userList.push(<ListItem name={name} contactList={props.contactList} listFullLength={props.listFullLength} key={props.contactList[i].id} surname={surname}  avatar={avatar} userID={props.contactList[i].id} addID={props.addID} deleteID={props.deleteID} />) 
                    }
               }
          } else{ 
               //Rendering filtered contacts from the list//
               for(let i=20*(props.switchPage-1);i<=20*props.switchPage-1;i++){
                    if(props.filterList[i]!==undefined){
                         const name = props.filterList[i].first_name
                         const surname = props.filterList[i].last_name
                         const avatar = props.filterList[i].avatar
                         userList.push(<ListItem name={name} key={props.contactList[i].id} surname={surname} avatar={avatar} addID={props.addID} deleteID={props.deleteID} userID={props.contactList[i].id} />) 
                    }
               }
          }
     }

     return(
          <div className='contact__contactsList'>
               {userList}
          </div>
     )
}

export default UsersList