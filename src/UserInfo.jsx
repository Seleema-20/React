import React from 'react'

const UserInfo = ({userName, userMail}) => {
  return (
    <div>
      <p>
        {userName}</p>
        <p> {userMail}
        </p>
      </div>
  )
}

export default UserInfo;