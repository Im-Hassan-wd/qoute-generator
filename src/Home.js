import { useState } from "react";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [error, setError] = useState(false);

    return (
        <div className="home">
            
        </div>
    );
}
 
export default Home;