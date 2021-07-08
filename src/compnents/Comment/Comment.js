import React from 'react'

const Comment = ({ comments }) => {
    return (
        <div className="mx-5 mt-5">
            {comments.map(el => (
                <div key={el.id}>
                    <h1>{el.name}</h1>
                    <h5>{el.email}</h5>
                    <p>{el.body}</p>

                </div>
            ))}

        </div>
    )
}


export default Comment;
