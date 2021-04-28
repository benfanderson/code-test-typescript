import React, {FC, ReactElement} from 'react';
import './App.css';
import dayjs from 'dayjs';
import plus from './assets/plus.svg';
type headerProps = {
    headline: string,
    byline: string,
    source: string,
    publicationDate: string
}

const ArticleHeader: FC<headerProps> = ({headline, byline, source, publicationDate}): ReactElement => {

    return (
        <header>
            <h1>{headline}</h1>
            <p><strong>{byline}</strong>, <em>{source}</em></p>
            <p>{dayjs(publicationDate).format('ddd, D MMMM YYYY H:MMa')} <img id='plus' src={plus} alt='plus symbol'/></p>
            <hr/>
        </header>
    )
};

export default ArticleHeader