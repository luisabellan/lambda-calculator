import React, { useState } from "react";



const Display = () => {

    const[output, setOutput] = useState('0')

    return <div className="display">{output}</div>;
}

export default Display;