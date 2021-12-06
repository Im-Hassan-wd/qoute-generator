const QuoteDetails = ({quotes}) => {
    return (
        <div className="quote-details">
            {quotes.map(quote => (
                <div className="quote-preview">
                    <p className="quote-body">{ quote.body }</p>
                </div>
            ))}
        </div>
    );
}
 
export default QuoteDetails;