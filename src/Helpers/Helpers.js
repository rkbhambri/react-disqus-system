
export const validateEmail = (email) => {
    let isEmailValid = false;
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.trim() !== '' && regex.test(email)) {
        isEmailValid = true;
    }
    return isEmailValid;
};

export const validatePassword = (password) => {
    let isPasswordValid = false;
    let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\S]+)$/;
    if (password.trim() !== '' && regex.test(password)) {
        isPasswordValid = true;
    }
    return isPasswordValid;
};

export const data = [
    {
        user_id: Math.random(10),
        user: {
            name: 'Ram krishan',
            image_url: 'anonymous.jpg'
        },
        comments: {
            text: 'How artistic',
            time: 'Today at 1pm',
            like: 0,
            dislike: 0,
            reply: [{
                name: 'Mark',
                replyText: 'Its nice to be there !'
            },
            {
                name: 'Peter',
                replyText: 'Its Good'
            }]
        }
    },
    {
        user_id: Math.random(10),
        user: {
            name: 'Ram krishan',
            image_url: 'anonymous.jpg'
        },
        comments: {
            text: 'How artistic',
            time: 'Today at 1pm',
            like: 0,
            dislike: 0,
            reply: [{
                name: 'Mark',
                replyText: 'Its nice'
            }]
        }
    },
    {
        user_id: Math.random(10),
        user: {
            name: 'Ram krishan',
            image_url: 'anonymous.jpg'
        },
        comments: {
            text: 'How artistic',
            time: 'Today at 1pm',
            like: 0,
            dislike: 0,
            reply: []
        }
    }
];
