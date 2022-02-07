import { useEffect, useState } from "react";
import QuoteDetails from "./QuoteDatails";
import Navbar from "./Navbar";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);
    const randomNumber = Math.ceil(Math.random() * 3);

    const handleFilter = () => {
        window.location.reload();
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
            setError(err.message);
            setIsLoading(false);
         });
    }, []);

    return (
        <div className="home">
            <Navbar handleFilter={handleFilter} />
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {quotes && <QuoteDetails quotes={quotes.filter(quote => quote.id === randomNumber)}/>}
        </div>
    );
}
 
export default Home;