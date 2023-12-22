import React, { useState } from 'react';

const CircleFollowCursor = (prop: any) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleBeforeUnload = () => {
        setPosition({ x: 0, y: 0 })
    };

    return (
        <div
            id='parent'
            className='h-full w-full relative'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleBeforeUnload}
        >
            {
                position.x === 0 && position.y === 0 ? null :
                    <>
                        <div
                            className='absolute w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 radial-background-red zIndex10'
                            style={{
                                top: position.y,
                                left: position.x,
                            }}
                        />
                        <div
                            className='absolute w-48 h-48 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 radial-background-green zIndex10'
                            style={{
                                top: position.y,
                                left: position.x,
                            }} />

                    </>
            }
            {prop.children}
        </div>
    );
};

export default CircleFollowCursor;