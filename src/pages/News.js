import { useLocation } from 'react-router-dom'

const News = () => {
    const location = useLocation();
    const news = location.state

    return (
        <div className="App-header" >
        <table cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <td align="center"><h1>{news.title}</h1></td> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={news.picture} height="600"></img></td>  
                </tr>
                <tr>
                    <td align="left">{news.description}</td>  
                </tr>
            </tbody>
        </table>
        </div>
    );
}


export default News;