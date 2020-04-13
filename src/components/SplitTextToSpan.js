import React from 'react';


const SplitTextToSpan = ({text}) => {
    return text.split('').map((letter, index) => <span key={index}>{letter.replace(/ /g, "\u00a0")}</span>);
}

export default SplitTextToSpan;