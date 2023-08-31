import React from 'react'
import JoinButton from '../components/JoinButton/JoinButton'

const MentorGrid = () => {
  return (
    <>
    <article className='grid grid-cols-1 justify-center items-center'>
        <div>
            <p>Unlock your potential to learn with great mentors</p>
            <JoinButton/>
        </div>
        <div>Get In touch with the latest NEWS</div>
    </article>
    </>
  )
}

export default MentorGrid