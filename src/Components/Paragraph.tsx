import React, {FC, ReactElement} from 'react';
import '../App.css';
type BlockProps= {
    text: string | undefined
}

const Paragraph: FC<BlockProps> =({text}): ReactElement => {
     return (
        <p >{text}</p>
    )
};

export default Paragraph