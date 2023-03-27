import React from 'react';
import Chip from '.';

function ChipVariants({ tags }: any) {

    return (
        <div className="App">
            {tags.map((tag: any, index: number) => <Chip {...tag} key={`${tag.value}`} />)}
        </div>
    );
}

export default ChipVariants;