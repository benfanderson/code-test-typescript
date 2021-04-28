import React, { FC, ReactElement } from 'react';
import dayjs from 'dayjs';
import plus from './assets/plus.svg';
import camera from './assets/camera.svg';

type ChildProps = {
    story: {
        headline: string,
        source: string,
        byline: string,
        publicationDate: string,
        blocks: {kind: string, text?: string, intentions?: any, url?: string, 
            attribution?: string, captionText?: string}[]
    }
  }

const Article: FC<ChildProps> = ({story }): ReactElement => {
    const {headline, source, byline, publicationDate, blocks} = story
    return (
    <div>
        <header>
        <h1>{headline}</h1>
        <p><strong>{byline}</strong>, <em>{source}</em></p>
        <p>{dayjs(publicationDate).format('ddd, D MMMM YYYY H:MMa')} <img id='plus' src={plus} alt='Plus symbol'/></p>
        <hr></hr>
      </header>
      {
      blocks.map(
        (block, index) => {
          let element;
          if (block.kind === 'text') {
            element = <p key={index}>{block.text}</p>
          } else if (block.kind === 'image') {
            element = 
            <div key={index} id='imgBlock'>
              <img className='img' src={block.url} alt="Cras mattis consectetur purus sit amet fermentum."/>
              <figcaption><img src={camera} alt='camera icon'/> <span>{block.captionText}</span></figcaption>
            </div>
          } else if (block.kind === 'pull-quote') {element = 
            element = 
            <blockquote key={index} className='pullQuote'>
              <p className='quoteText'><em>{block.text}</em></p>
              <figcaption>{block.attribution}</figcaption>
            </blockquote>
          }
          return element;
        }
      )
    }
    </div>
  )
};

export default Article;