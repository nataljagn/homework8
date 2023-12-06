
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from '../App';


const Home = () => {

    const [News, setNews] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response.items);
            setNews(response.items);
        });
    }, [])


    return (
        <div className="App" >
            <header className="App-header" >
                <h1>Sport uudised</h1>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 24, padding: 40 }}>

                    {News.map(news => (
                        <div id={news.fields.id} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 40 }}>
                            <Link key={news.fields.id} to={`/News/${news.sys.id}`}>
                                <img src={news.fields.image.fields.file.url} alt={news.fields.image.fields.title} height="400" />
                                <div>{news.fields.title}</div>
                            </Link>
                        </div>
                    ))}

                </div>
            </header>
        </div>
    );
}

export default Home;