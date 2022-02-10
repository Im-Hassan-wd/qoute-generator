import { useEffect, useState } from "react";
import QuoteDetails from "./QuoteDatails";
import Navbar from "./Navbar";
import QuoteList from "./QuoteList";
import loading from "./loading.png";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);
    const [allQuotes, setAllAuotes] = useState("allquote");
    const [url, setUrl] = useState("http://localhost:8000/quote");

    const randomNumber = Math.ceil(Math.random() * 7);

    const handleClick = (e) => {
        const author = e.target.children[0].textContent;
        setUrl(`http://localhost:8000/quote/?author=${author}`);
        setAllAuotes("");
    }
    
    useEffect(() => {
        fetch(url)
         .then(res => {
            if(!res.ok) {
                throw Error("could not fetch the data for that resource");
            }
            return res.json();
         })
         .then(data => {
            setQuotes(data);
            setError(false);
            setIsLoading(false);
         })
         .catch(err => {
            setError(err.message);
            setIsLoading(false);
         });
    }, [url]);

    return (
        <div className="home">
            <Navbar />
            {isLoading && <div> <img src={loading} alt="loading..." /> </div>}
            {error && <div>{ error }</div>}
            {quotes && allQuotes === "allquote" ? <QuoteDetails quotes={quotes.filter(quote => quote.id === randomNumber)} handleClick={handleClick} /> : null}
            {quotes && allQuotes === "" ? <QuoteList quotes={quotes} /> : null}
        </div>
    );
}
 
export default Home;