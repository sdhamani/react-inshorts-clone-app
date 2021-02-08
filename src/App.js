import './App.css';
import { useState, useEffect  } from "react";
import axios from "axios";
import NavInShorts from "./components/NavInShorts"
import NewsContent from './NewsContent/NewsContent';
import Footer from './components/Footer/Footer';
import apikey from "./data/config"


function App() {

  const [category, setcategory] = useState("general")

  const [newsArray, setnewsArray] = useState([])

  const [newsResults, setnewsResults] = useState()

  const [loadMore, setloadMore] = useState(20)

  


  const newsApi = async() => {
    try{

        const proxyUrl = "";
        console.log(loadMore)
        const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`)
        setnewsArray(news.data.articles)
        setnewsResults(news.data.totalResults)
      }
    catch (error){
      console.log(error)
    }
  }

  console.log(newsArray)

  useEffect(() => {
    newsApi();
  }, [newsResults,category, loadMore])

  return (
    <div className="App">
      <header className="App-header">
        <NavInShorts setcategory={setcategory } />
        <NewsContent loadMore={loadMore} setloadMore={setloadMore} newsArray={newsArray} newsResults={newsResults}/>
        <Footer/>
      </header> 
    </div>
  );
}

export default App;
