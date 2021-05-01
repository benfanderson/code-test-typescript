import React, { FC, ReactElement } from 'react';
import Paragraph from './Paragraph'
import ArticleHeader from './ArticleHeader';
import ImgBlock from './ImgBlock';
import BlockQuote from './BlockQuote'
import ErrorBoundary from './ErrorBoundary';

type StoryProps = {
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

const Article: FC<StoryProps> = ({story }): ReactElement => {
    const {headline, source, byline, publicationDate, blocks} = story
    return (
    <ErrorBoundary>
      <article id='article'>
        <ArticleHeader headline={headline} source={source} byline={byline} publicationDate={publicationDate} />
        {
          blocks.map(
            (block, index) => {
              let element;
              switch (block.kind) {
                case 'text':
                  element = <Paragraph key={index} text={block.text} />;
                  break;
                case 'image':
                  element = <ImgBlock key={index}  url={block.url} captionText={block.captionText} />;
                  break;
                case 'pull-quote':
                  element= <BlockQuote key={index} text={block.text} attribution={block.attribution}/>;
              }
              return element;
            }
          )
        }
      </article>
    </ErrorBoundary>
  )
};

export default Article;