import React from 'react';

export default (props) =>
    <div>
        {
            <div className="snake-food" style={{left:`${props.dot[0]}%`, top:`${props.dot[1]}%`}}/>
        }
    </div>
