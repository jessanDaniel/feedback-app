// import React from 'react'
// import { useState } from "react"
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "../shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Feedbackitem({item}) {

    // const [rating,setRating] = useState(1)
    // const [text, setText] = useState('This is an example of a feedback item')
    const handleClick = (id) => {
      console.log(id)
    }

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    

  return (
    <Card  >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item : PropTypes.object.isRequired,
}

export default Feedbackitem
