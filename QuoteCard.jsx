const QuoteCard = ({ quote }) => {
  
  console.log("quote  in card", quote)
  

  return (
    
    <div class="card text-center QuoteCard">
      <div class="card-body">
        <h5 class="card-title">{quote.id}</h5>
        <p class="card-text">
          {quote.quote}
        </p>
        <footer class="blockquote-footer">
          Someone - <cite title="Source Title">{quote.author}</cite>
        </footer>
      </div>
    </div>
  );
};

export default QuoteCard;
