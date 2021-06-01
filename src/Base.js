import React from 'react';
import Menu from './Menu';
import './Base.css';

const Base = ({
    title="my title",
    children
}) => {
    return (
        <div className="base">
            <Menu/>
            <div className="base-title"><h1>{title}</h1></div>
            <div className="base-children">{children}</div>    
        </div>
    )
}

export default Base
