function SearchBar(props){     
     const filterTextChange =(e)=>{
          props.filteredText(e.target.value)
          props.filteredList(e.target.value)
          props.resetSwitch()
     }
     
return(
     <div className='contact__searchInput'>
          <input type='text' placeholder='Search...' value={props.filterText} onChange={filterTextChange}></input>
     </div>
)
}



export default SearchBar
