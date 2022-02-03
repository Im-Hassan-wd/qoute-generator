import { useEffect, useState } from "react";
import QuoteDetails from "./QuoteDatails";
import Navbar from "./Navbar";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);
    let number = 3;

    const handleFilter = () => {
        const randomNumber = Math.ceil(Math.random() * 3);
        number = randomNumber;
        const randomQuote = quotes.filter(quote => quote.id === number);
        setQuotes(randomQuote);
        console.log(randomNumber, number, randomQuote);
        // setQuotes(data);
    }

    useEffect(() => {
        fetch("http://localhost:8000/quote")
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
            // set
         });
    }, []);

    return (
        <div className="home">
            <Navbar handleFilter={handleFilter} />
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {quotes && <QuoteDetails quotes={quotes.filter(quote => quote.id === number)}/>}
        </div>
    );
}
 
export default Home;