// import React from 'react'
import { Link } from "react-router-dom"
import Card from "../shared/Card"

function About() {
  return (
    <Card>
      <div>
        <Link to={{
          pathname : '/'
        }}>Back to Home page</Link>
      </div>
    </Card>
  )
}

export default About
