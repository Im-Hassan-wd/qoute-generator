import { useParams } from "react-router-dom";

const QuoteList = () => {
    const {} = useParams();

    return (
        <div className="quote-list">
           <h2>Quote list - {author} </h2>
        </div>
    );
}
 
export default QuoteList;