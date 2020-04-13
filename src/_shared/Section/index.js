import React from 'react';
import "./index.scss";

export const Section = (props) => {
    const { title, children } = props
    const idName = title.toLowerCase().split(' ').join('-');
    return (
        <div className="section" id={idName}>
            <div className="section_title">
                {title}
            </div>
            <div className="section_content">
                {children}
            </div>          
        </div>
      );
    
}
