import React from 'react';

export default (props) =>
    <div>
        {
            props.snakeDots.map((dot, i) =>
                <div className="snake-dot" key={i} style={{left:`${dot[0]}%`, top:`${dot[1]}%`}}/>
            )
        }
    </div>
