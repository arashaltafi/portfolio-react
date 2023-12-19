import React, { useState } from 'react';

const CircleFollowCursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div
            className='h-full w-full relative'
            onMouseMove={handleMouseMove}
        >
            <div
                className='absolute w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 radial-background-red'
                style={{
                    top: position.y,
                    left: position.x,
                    zIndex: 10
                }}
            />
            <div className='absolute w-48 h-48 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 radial-background-green'
                style={{
                    top: position.y,
                    left: position.x,
                    zIndex: 10
                }} />

        </div>
    );
};

export default CircleFollowCursor;