import React from 'react';

export const Section = (props) => {
return (
        <section id={ props.id } className={`section_${props.name}`}>
        <div className={`container ${props.name}`}>
            {props.children}
        </div>
        </section>
    );
}