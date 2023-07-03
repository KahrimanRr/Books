import { ReturnBook } from "./ReturnBook";
import { useState, useEffect } from "react";
import BookModel from "../../../models/BookModel";
import { error } from "console";
import { SprinnerLoading } from "../../../Utils/SpinnerLoading";

export const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/api/books";
      const url: string = `${baseUrl}?page=0&size=9`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const responseJson = await response.json();

      const responseData = responseJson._embedded.books;

      const loadedBooks: BookModel[] = [];

      for (const key of responseData) {
        loadedBooks.push({
          id: key.id,
          title: key.title,
          author: key.author,
          description: key.description,
          copies: key.copies,
          copiesAvailable: key.copiesAvailable,
          category: key.category,
          img: key.img,
        });
      }
      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <SprinnerLoading />;
  }
  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3> Find your next " I stayed up too late reading "book.</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5
            d-none d-md-block"
        data-bs-interval="false"
      >
        {/**Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(0, 3).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(3, 6).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>

          <div className="carousel-item ">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(6, 9).map((book) => (
                <ReturnBook book={book} key={book.id} />
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/**Mobile */}
      <div className=" d-lg-none mt-3">
        <div className=" row d-flex justify-content-center align-content-center">
          <ReturnBook book={books[7]} key={books[7].id} />
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className=" btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
