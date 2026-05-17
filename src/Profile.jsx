import React from 'react'
import UserInfo from './UserInfo'
import UserPost from './UserPost'

const Profile = () => {
        const post=['nature','sky','beach'];

  return (
    <div>
        <UserInfo userName = "Seleema" userMail = "seleema@gmail.com"/>
        <UserPost post={post}/>
    </div>
  )
}

export default Profile