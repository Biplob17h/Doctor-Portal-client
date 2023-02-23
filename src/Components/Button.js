import React from 'react';

const Button = ({children}) => {
    
    return (
        <div>
            <button className="btn btn-ghost cbtn2">{children}</button>
        </div>
    );
};

export default Button;