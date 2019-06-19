import React from 'react';

const AddComment = (props) => {
    return (
        <div className="add-comment col-md-12">
            <textarea
                placeholder="Add text here"
                className="form-control"
                rows="8"
                style={{ resize: 'none' }}
                onChange={(event) => props.commentChangeHandler(event)}
                value={props.commentText}></textarea>
            <button
                className="btn btn-md btn-primary mt-2"
                onClick={props.addComment}>Add Comment</button>
        </div>
    );
};

export default AddComment;
