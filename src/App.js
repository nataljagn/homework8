import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';

const contentful = require("contentful");

export const client = contentful.createClient({
  space: 'eejk1pt2xrq6',
  enviroment: 'master',
  accessToken: 'bA0uHAjLX2fC0COt1nbfDRWQRCYKg1FMMiWqnNZRpCE'
})

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="News/:newsId" element={<News />} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;