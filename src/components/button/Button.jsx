import React from 'react';

const Button = (props) =>{
    return(
        <>
         <button className={`mt-2 p-3 ${props.bgColor} rounded-2xl font-medium ${props.textColor} cursor-pointer`} type="button">{props.text}</button>
        </>
    );
}


export default Button;