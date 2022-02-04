import { useParams } from "react-router-dom";

const QuoteList = ({ quotes }) => {
    const { id } = useParams();

    return (
        <div className="quote-details">
            {quotes.map(quote => (
                <div className="quote-preview" key={quote.id}>
                    <p className="quote-body">{ quote.body }</p>
                </div>
            ))}
        </div>
    );
}
 
export default QuoteList;