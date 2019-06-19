import React from 'react';

const Heading = (props) => {
    return (
        <React.Fragment>
            <h2 className={`heading ${props.isAuthenticated ? 'col-md-10' : 'w-100'} text-center`}>
                {props.heading}
            </h2>
        </React.Fragment>
    );
};

export default Heading;
