import React, { FC, ReactElement } from 'react';

type ChildProps = {
    story: {
        headline: string,
        source: string,
        byline: string,
        publicationDate: string,
        blocks?: {kind: string, text?: string, intentions?: any, url?: string, 
            attribution?: string, captionText?: string}[]
    }
  }

const Child: FC<ChildProps> = ({story }): ReactElement => {
    const {headline, source, byline, publicationDate} = story
    return (
    <div>
        <h2>{headline}</h2>
        <p>{source}</p>
        <p>{byline}</p>
        <p>{publicationDate}</p>
    </div>
  )
};

export default Child;