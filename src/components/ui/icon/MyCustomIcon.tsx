import React from 'react';

interface MyCustomIconProps {
    src: string;
    color: string;
}

const MyCustomIcon: React.FC<MyCustomIconProps> = ({ src, color }) => {
    return (
        <svg viewBox="0 0 24 24" fill={color}>
            <use xlinkHref={src} />
        </svg>
    );
};

export default MyCustomIcon;
