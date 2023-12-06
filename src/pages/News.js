
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../App';

const News = () => {
    const { newsId } = useParams();
    const [News, setNews] = useState(null);

    useEffect(() => {
        client.getEntry(newsId).then((response) => {
            console.log(response);
            setNews(response);
        });
    }, [])

    if (!News) {
        return <div>Unable to retrieve news with id { newsId }</div>;
    }


    return (
        <div className="App-header" >
        <table cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <td align="center"><h1>{News.fields.title}</h1></td> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="left">{News.fields.body}</td>  
                </tr>
            </tbody>
        </table>
        </div>
    )

};

export default News;