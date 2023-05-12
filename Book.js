import { useOutletContext, useParams } from "react-router-dom";
// UseParams hook is the data inside of our url, that we are able to access in our application. When  we click on book 1 it's getting 1 from that url.
// You can use useParams Hook, it is not gonna take any parameters, just call it like useParams()
// it is gonna return all the custom parameters we defined in our route
export default function Book() {
  const {id} = useParams();
  const obj = useOutletContext();
  return (
      <h1>Book {id} {obj.hello}</h1>
  )
}
