import { useParams } from "react-router-dom";

const QuoteList = () => {
    const { id } = useParams();

    return (
        <div className="quote-list">
           <h2>Quote list - {id} </h2>
        </div>
    );
}
 
export default QuoteList;