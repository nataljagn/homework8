import React from "react";
import { NEWS } from './newsData';
import { Link } from "react-router-dom";

const Home = () => {
    return (

        <div className="App" >
            <header className="App-header" >
                <h1>Sport uudised</h1>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 24, padding: 40  }}>
                    {
                        NEWS.map((nr, index) => (
                            <div  style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap:40}}>
                                <Link to={"/News/" + NEWS[index].id} state={NEWS[index]}>
                                    <div><img src={NEWS[index].picture} height="300"></img></div> 
                                    <div>{NEWS[index].title}</div>                                  
                                </Link>
                               
                            </div>
                        ))
                    }
                </div>
            </header>
        </div>
    );
}

export default Home;