import React from 'react'

const UserPost = ({post}) => {
  return (
    <div>
        <ul>
            {post.map((post,index)=>(
                <li>{post} </li>
            ))}
        </ul>
    </div>
  )
}

export default UserPost