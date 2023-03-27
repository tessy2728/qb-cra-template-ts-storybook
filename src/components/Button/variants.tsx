import React from 'react';
import Button from '.';

function ButtonVariants({ buttons }: any) {
    return (
        <div className="App">
            {buttons.map((button: any, index: number) => <div style={{ padding: '3px' }} key={`${button.title}-${index}`}><Button {...button} /></div>)}
        </div>
    );
}

export default ButtonVariants;