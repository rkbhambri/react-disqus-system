import React from 'react';
import dislikeIcon from '../../../../images/dislike.svg';

const Dislikes = (props) => {
    return (
        <span className="dislikes ml-3">
            <img
                src={dislikeIcon}
                onClick={() => props.likeOrDislikeComment(props.item.user_id, 'dislikes')}
                alt="Not available" />
            <span className="likes-count ml-1">{props.item.comments.dislike}</span>
        </span>
    );
};

export default Dislikes;
