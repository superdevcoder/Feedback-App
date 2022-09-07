import React from 'react'
import { Link } from "react-router-dom"

import FilterDropMenu from './FilterDropMenu'

import bubbleIcon from "../assets/icon-suggestions.svg"
import plusIcon from "../assets/icon-plus.svg"

function NavBar({suggestCount}) {

  function handleFeedbackFilter (feedbackFilter) {
    console.log(feedbackFilter);
  }

  return (
    <div className='navBar flex align-center gap-1 between'>
      
      <div className='navBar__suggestion flex align-center'>
        <div className='flex align-center gap-0-8'>
          <img src={bubbleIcon} alt="" />
          <span>{suggestCount} Suggestions</span>
        </div>

        <div className='flex align-center gap-0-5'>
          <FilterDropMenu getFeedbackFilter={handleFeedbackFilter} />
        </div>
      </div>  

      <Link to={'/addFeedback'}>
        <button className='button-purple flex align-center gap-0-5'>
          <img src={plusIcon} alt="" />
            <h4>Add Feeback</h4>
        </button>     
      </Link>
      
    </div>
  )
}

export default NavBar