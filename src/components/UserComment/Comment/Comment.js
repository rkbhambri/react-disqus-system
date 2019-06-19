import React from 'react';
import Likes from './Likes/Likes';
import Dislikes from './Dislikes/Dislikes';
import Reply from './Reply/Reply';

const Comment = (props) => {
    return (
        <div className="comment w-75 ml-3">
            <span className="user-name">{props.item.user.name}</span>
            <span className="post-time ml-3">{props.item.comments.time}</span><br />
            <div className="comment">{props.item.comments.text}</div>
            <Likes
                item={props.item}
                likeOrDislikeComment={(userId, parameter) => props.likeOrDislikeComment(userId, parameter)} />
            <Dislikes
                item={props.item}
                likeOrDislikeComment={(userId, parameter) => props.likeOrDislikeComment(userId, parameter)} />
            <Reply
                item={props.item}
                replyHandler={(event) => props.replyHandler(event)}
                addReply={() => props.addReply()}
                replyText={props.replyText} />
        </div>
    );
};

export default Comment;
