import React, { useState } from 'react';
import Replies from './Replies/Replies';

const Reply = (props) => {
    let [isReply, setReplyFlag] = useState(false);
    return (
        <React.Fragment>
            <span
                className="reply ml-2"
                style={{ fontSize: '13px', cursor: 'pointer' }}
                onClick={() => setReplyFlag(!isReply)}>
                <b>Reply</b>
            </span><br />
            {props.item.comments.reply.length > 0 && <Replies item={props.item} />}
            {
                isReply &&
                <React.Fragment>
                    <br />
                    <div className="col-md-10 offset-1 mt-2">
                        <textarea
                            placeholder="Add text here"
                            className="form-control"
                            style={{ resize: 'none' }}
                            onChange={(event) => props.replyHandler(event)}
                            value={props.replyText}></textarea>
                        <button
                            className="btn btn-sm btn-primary mt-2"
                            onClick={() => props.addReply()}>Add Reply</button>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    );
};

export default Reply;
