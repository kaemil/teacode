function PageSwitch(props){
     return(
          <div className='contact__pagesSwitch'>
               <button className='contact__buttonSwitch' onClick={props.pageDown}>&lt;</button>
               <div className='contact__displayValue'>{props.switchPage}</div>
               <button className='contact__buttonSwitch' onClick={props.pageUp}>&gt;</button>
          </div>
     )
}

export default PageSwitch