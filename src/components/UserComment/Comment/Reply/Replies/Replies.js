import React from 'react';

const Replies = (props) => {
    const replies = (
        props.item.comments.reply.map((reply, index) => {
            return (
                <div className="reply-details mt-1" key={index}>
                    <span className="user-name">{reply.name}</span><br />
                    <div className="comment">{reply.replyText}</div>
                </div>
            );
        })
    )
    return (
        <div className="replies col-md-10 offset-1 mt-2">
            {replies}
        </div>
    );
};

export default Replies;
