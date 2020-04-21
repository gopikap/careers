import React from 'react';
import './index.scss';

export const Button = (props) => {

    const { title, onClick, buttonClass, disabled } = props
    let classNames = ['button'];
    if (buttonClass) {
        classNames.push(buttonClass);
    }
    return (
        <button className={classNames.join(' ')} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )

}