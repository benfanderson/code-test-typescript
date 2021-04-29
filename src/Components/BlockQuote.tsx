import React, {FC, ReactElement} from 'react';
import '../App.css';
type  Block = {
    text: string | undefined,
    attribution: string | undefined
}

const BlockQuote: FC<Block> = ({text, attribution}): ReactElement => {
      return (
        <blockquote className='pullQuote'>
            <p className='quoteText'> <em>{text}</em></p>
            <figcaption>{attribution}</figcaption>
        </blockquote>
    )
    
};

export default BlockQuote