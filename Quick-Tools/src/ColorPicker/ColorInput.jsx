import React, { useState } from 'react';

export default function ColorInput()
{
    const [color, setColor] = useState('#000000');

    const handleChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <>
            <input type="color" value={color} onChange={handleChange} className="mr-[1rem] w-[50vw] h-[80px] border-none cursor-pointer rounded-full"/>
            <span style={{ fontWeight: 'bold', color:color=="#ffffff"?"#000000":color }}>Color Code: {color}</span>
        </>
    );
}