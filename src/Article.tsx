import React, { FC, ReactElement } from 'react';
import Paragraph from './Paragraph'
import ArticleHeader from './ArticleHeader';
import ImgBlock from './ImgBlock';
import BlockQuote from './BlockQuote'

type ChildProps = {
  story: {
    headline: string,
    source: string,
    byline: string,
    publicationDate: string,
    blocks: {kind: string, text?: string, url?: string, 
      attribution?: string, captionText?: string, 
      intentions?: {
        kind?: string,
        index?: number,
        length?: number,
      }[]
    }[]
  }
}

const Article: FC<ChildProps> = ({story }): ReactElement => {
    const {headline, source, byline, publicationDate, blocks} = story
    return (
    <article id='article'>
      <ArticleHeader headline={headline} source={source} byline={byline} publicationDate={publicationDate} />
      {
      blocks.map(
        (block, index) => {
          let element;
          if (block.kind === 'text') {
            element = <Paragraph key={index} text={block.text} />
          } else if (block.kind === 'image') {
            element = <ImgBlock key={index}  url={block.url} captionText={block.captionText} />
          } else if (block.kind === 'pull-quote') {element = 
            <BlockQuote key={index} text={block.text} attribution={block.attribution}/>
          }
          return element;
        }
      )
    }
    </article>
  )
};

export default Article;