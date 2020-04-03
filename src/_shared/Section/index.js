import React from 'react';
import "./index.scss";

export const Section = (props) => {
    const { title, children } = props
    return (
        <div className="section">
            <div className="section_title">
                {title}
            </div>
            <div className="section_content">
                {children}
            </div>          
        </div>
      );
    
}
