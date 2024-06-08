
import { useDispatch } from "react-redux";
import { QuoteAction } from "../store/QuoteSlice";
const FetchItems = () => {

  const dispatch = useDispatch();
console.log("fetching ")
  fetch("http://localhost:8080")
    .then((res) => res.json())
    .then((items) => {
      console.log("here ");
      dispatch(QuoteAction.addQuote(items));
    });

  return <></>;
};

export default FetchItems;
