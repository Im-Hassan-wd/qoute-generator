import { useEffect, useState } from "react";
import QuoteDetails from "./QuoteDatails";
import Navbar from "./Navbar";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);
    const [url, setUrl] = useState("http://localhost:8000/quote");

    const randomNumber = Math.ceil(Math.random() * 3);

    const handleFilter = () => {
        window.location.reload();
    }

    console.log(url)

    const handleClick = (e) => {
        const author = e.target.children[0];
        console.log(author)
        setUrl(`http://localhost:8000/quote/?author=${author}`);
        console.log(url)
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
            <Navbar handleFilter={handleFilter} />
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {quotes && <QuoteDetails quotes={quotes} handleClick={handleClick} />}
        </div>
    );
}
 
export default Home;