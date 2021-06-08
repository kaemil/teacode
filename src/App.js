import React from 'react';
import {useEffect,useState} from "react";
import PageSwitch from './components/PageSwitch'
import SearchBar from './components/SearchBar'
import UsersList from './components/UsersList'

function App() {
     const[contactList,setContactList]=useState([])
     const[switchPage,setSwitchPage]=useState(1)
     const[filterText,setFilterText]=useState('')
     const[filterList,setFilterList]=useState([])
     const[listLength,setListLength]=useState(0)
     const[listID,setListID]=useState([])
     //Getting data from API//
     const fetchData = async () => {
          const response = await fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");
          const data = await response.json();
          setListLength(data.length)
          return setContactList(data);}
     useEffect(() => {
          fetchData()
     }, []);
     //Sorting by surn_name//
     function SortOrder(prop) {    
          return function(a, b) {    
              if (a[prop] > b[prop]) {    
                  return 1;    
              } else if (a[prop] < b[prop]) {    
                  return -1;    
              }    
              return 0;    
          }    
      }  

     //Changing number of page with users//
     contactList.sort(SortOrder("last_name"));
     const pageDown =()=>{
          if(switchPage>1)
          setSwitchPage(switchPage-1)
     }
     const pageUp =()=>{
          if(switchPage<Math.round(listLength/20))
          setSwitchPage(switchPage+1)
     }
     
     //Getting input value to find user//
     const filteredText=(text)=>{
          setFilterText(text)
     }


     //Creating list with filtered items//
     const filteredList=(text)=>{
          const newFilteredList=[]
          contactList.forEach(element=>{
               if(element.first_name.toLowerCase().includes(text.toLowerCase()) || element.last_name.toLowerCase().includes(text.toLowerCase())){
                    newFilteredList.push(element)
               }})
               if(text===''){
                    setListLength(contactList.length)
               } else{
                    setFilterList(newFilteredList)
                    setListLength(newFilteredList.length)
               }
        
     }
     //Adding or deleting ID from list displayed in console//

     const addID=(newID)=>{
          setListID([...listID, newID])          
     }
     const deleteID=(newID)=>{
          const index = listID.indexOf(newID)
          setListID(listID.slice(0,index).concat(listID.slice(index+1)))
     }
     const resetSwitch=()=>{
          setSwitchPage(1)

     }

     //Displaying list of users ID after checking specific user//
     useEffect(() => {
          if(listID.length !== 0){
               console.log(listID)
          }
          
     });
     return (
          <div className="contact__container">
               <div className='contact__header'><h2>List of Contacts</h2></div>
               <SearchBar contactList={contactList} filteredText={filteredText} filteredList={filteredList} resetSwitch={resetSwitch} listID={listID} filterList={filterList}/>
               <UsersList contactList={contactList} 
               switchPage={switchPage} 
               filterText={filterText} 
               filterList={filterList} 
               addID={addID}
               listID={listID}
               deleteID={deleteID}
               resetSwitch={resetSwitch}
                />
               <PageSwitch switchPage={switchPage} pageDown={pageDown} pageUp={pageUp} />
          </div>
     );
}

export default App;
