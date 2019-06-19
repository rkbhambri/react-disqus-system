import React from 'react';
import './UserComment.css';
import Comment from './Comment/Comment';

const UserComment = (props) => {

    const userComment = (
        props.commentsData.map(item => {
            return (
                <div className="comment-details-wrapper" key={item.user_id}>
                    <div className="comment-details w-100 row">
                        <img
                            className="image"
                            src={require(`../../images/${item.user.image_url}`)}
                            alt="Not available" />
                        <Comment
                            item={item}
                            likeOrDislikeComment={(userId, parameter) => props.likeOrDislikeComment(userId, parameter)}
                            replyHandler={(event) => props.replyHandler(event)}
                            addReply={() => props.addReply(item.user_id)}
                            replyText={props.replyText} />
                    </div><br />
                </div>
            );
        })
    );

    return (
        <div className="user-comment col-md-12" >
            {userComment}
        </div>
    );
}


export default UserComment;
