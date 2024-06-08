import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuoteCard from "./QuoteCard";


const Quotes = () => {
  // list of quotes from redux store and then giving it to main

  let quoteList = [];
  quoteList = useSelector((store) => store.Quote);
  console.log("quoteList", quoteList);

  const random = Math.floor(Math.random() * 30);
  console.log("random ", random);

  return (
    <>
      {" "}
      {quoteList.length === 0 ? (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <QuoteCard quote={quoteList[random - 1]}></QuoteCard>
      )}
    </>
  );
};
export default Quotes;
