import React from 'react';
import likeIcon from '../../../../images/like.svg';

const Likes = (props) => {
    return (
        <span className="likes">
            <img
                src={likeIcon}
                onClick={() => props.likeOrDislikeComment(props.item.user_id, 'likes')}
                alt="Not available" />
            <span className="likes-count ml-1">{props.item.comments.like}</span>
        </span>
    );
};

export default Likes;
