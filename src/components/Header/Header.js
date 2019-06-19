import React from 'react';

const Header = (props) => {
    return (
        <div className="header row mt-2">
            <div className="col-md-3 text">
                <h2>{props.header}</h2>
            </div>
            <div className="col-md-8 text-right mt-2">
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => props.onLogout()}>Logout</button>
            </div>
        </div>
    );
};

export default Header;
