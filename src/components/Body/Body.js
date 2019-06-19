import React, { useState, useEffect } from 'react';
import { data } from '../../Helpers/Helpers';
import Header from '../Header/Header';
import UserComment from '../UserComment/UserComment';
import AddComment from '../AddComment/AddComment';
import Pagination from '../Pagination/Pagination';

const Body = (props) => {

    let [commentsData, setCommentsData] = useState([]);
    let [commentText, setCommentText] = useState('');
    let [pageNumberArray, setPageNumberArray] = useState([]);
    let [limit, setLimit] = useState(5);
    let [skip, setSkip] = useState(0)
    let [pageNumber, setPageNumber] = useState(1);
    let [replyText, setReplyText] = useState('');

    useEffect(() => {
        if (data.length > 5) {
            const commentDataLength = data.length / 5;
            const paginationArray = [];
            for (let i = 1; i <= commentDataLength; i++) {
                paginationArray.push(i)
            }
            setPageNumberArray(paginationArray);
        }
        setCommentsData(data);
    }, []);

    const likeOrDislikeComment = (userId, parameter) => {
        let updatedCommentsData = JSON.parse(JSON.stringify(commentsData));
        let commentIndex = updatedCommentsData.findIndex(item => item.user_id === userId);
        if (commentIndex > -1) {
            parameter === 'likes' ? updatedCommentsData[commentIndex].comments.like += 1 : updatedCommentsData[commentIndex].comments.dislike += 1;
        }
        setCommentsData(updatedCommentsData);
    };

    const commentChangeHandler = (event) => {
        setCommentText(event.target.value);
    };

    const addComment = () => {
        if (props.isAuthenticated) {
            if (commentText.trim() !== '') {
                let updatedCommentsData = JSON.parse(JSON.stringify(commentsData));
                const userData = {
                    user_id: Math.random(10),
                    user: {
                        name: 'Anonymous',
                        image_url: 'anonymous.jpg',
                    },
                    comments: {
                        text: commentText,
                        time: 'Today at 1pm',
                        like: 0,
                        dislike: 0,
                        reply: []
                    }
                }
                updatedCommentsData.push(userData);
                if (updatedCommentsData.length > 5 && updatedCommentsData.length % 5 === 1) {
                    let updatedPageNumberArray = [];
                    const commentDataLength = updatedCommentsData.length / 5;
                    for (let i = 1; i <= commentDataLength + 1; i++) {
                        updatedPageNumberArray.push(i)
                    }
                    setPageNumberArray(updatedPageNumberArray);
                }
                setCommentsData(updatedCommentsData);
                setCommentText('');
            } else {
                alert('Text is not allowed to be empty!')
            }
        } else {
            alert('Please login to add post !')
            props.onLogout();
        }

    };

    const paginateData = (number) => {
        setSkip((number * 5) - 5);
        setLimit(number * 5);
        setPageNumber(number);
    };

    const paginatePreviousData = () => {
        let number = pageNumber;
        if (pageNumber > 1) {
            number = pageNumber - 1;
        }
        setSkip((number * 5) - 5);
        setLimit(number * 5);
        setPageNumber(number);
    };

    const paginateNextData = () => {
        let number = pageNumber;
        if (pageNumber < 5) {
            number = pageNumber + 1;
        }
        setSkip((number * 5) - 5);
        setLimit(number * 5);
        setPageNumber(number);
    };

    const replyHandler = (event) => {
        setReplyText(event.target.value);
    };

    const addReply = (userId) => {
        if (props.isAuthenticated) {
            if (replyText.trim() !== '') {
                let updatedCommentsData = JSON.parse(JSON.stringify(commentsData));
                const userIndex = updatedCommentsData.findIndex(item => item.user_id === userId);
                if (userIndex > -1) {
                    const reply = {
                        name: 'Anonymous',
                        replyText: replyText
                    }
                    updatedCommentsData[userIndex].comments.reply.push(reply);
                }
                setCommentsData(updatedCommentsData);
                setReplyText('');
            } else {
                alert('Text is not allowed to be empty');
            }
        } else {
            alert('Please login to reply !')
            props.onLogout();
        }
    }

    return (
        <div className="layout col-md-8 offset-2">
            <Header header="Comments" onLogout={() => props.onLogout()} /><hr />
            <UserComment
                commentsData={commentsData.slice(skip, limit)}
                likeOrDislikeComment={(userId, parameter) => likeOrDislikeComment(userId, parameter)}
                replyHandler={(event) => replyHandler(event)}
                addReply={(userId) => addReply(userId)}
                replyText={replyText} />
            {
                commentsData.length > 5 &&
                <Pagination
                    pageNumber={pageNumberArray}
                    paginateData={(number) => paginateData(number)}
                    limit={limit}
                    paginatePreviousData={() => paginatePreviousData()}
                    paginateNextData={() => paginateNextData()}
                />
            }
            <AddComment
                commentText={commentText}
                commentChangeHandler={(event) => commentChangeHandler(event)}
                addComment={addComment} />
        </div>
    );
};

export default Body;
