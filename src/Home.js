import { useEffect, useState } from "react";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);

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
         })
    })

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
        </div>
    );
}
 
export default Home;