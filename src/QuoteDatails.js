import { Link, useParams } from "react-router-dom";

const QuoteDetails = ({ quotes, handleClick }) => {
    const {id} = useParams();
    console.log(id)
    return (
        <div className="quote-details">
            {quotes.map(quote => (
                <div className="quote-preview" key={quote.id}>
                    <p className="quote-body">{ quote.body }</p>
                    <div onClick={handleClick} className="quote-description">
                        <Link to={"/quote/?author=" + id}>
                        <h3>{ quote.author }</h3>
                        <p>{ quote.category }</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default QuoteDetails;