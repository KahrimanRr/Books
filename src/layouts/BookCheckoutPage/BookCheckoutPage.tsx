import { useState } from "react";
import BookModel from "../../models/BookModel";

export const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookModel>();
  const [isLoadingBook, setIsLoadingBook] = useState(true);
  const [httpError, setHttpError] = useState(null);

  /**localhos:3000/checkout/<bookID>, 0 1 2 index get the last one, 2 */
  const bookId = window.location.pathname.split("/")[2];

  return <div></div>;
};
