import { useEffect, useState } from "react";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/quote")
         .then(res => {
             if(!res === "ok") {
             }
         })
    })

    return (
        <div className="home">
            
        </div>
    );
}
 
export default Home;