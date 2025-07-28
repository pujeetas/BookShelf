import { useEffect, useState } from "react";
import BookCard from "./cards/BookCard";

function Body() {
  const [bookName, setBookName] = useState("");

  const [bookNameList, setBookNameList] = useState(() => {
    const books = localStorage.getItem("booklist");
    return books ? JSON.parse(books) : [];
  });

  useEffect(() => {
    localStorage.setItem("booklist", JSON.stringify(bookNameList));
    console.log(bookNameList);
  }, [bookNameList]);

  //fetch Book Details

  async function fetchBook(bookName) {
    const bookdetails = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
    );
    const data = await bookdetails.json();
    setBookNameList((prevList) => [
      ...prevList,
      {
        title: data?.items[0]?.volumeInfo?.title,
        author: data?.items[0]?.volumeInfo?.authors[0],
        publishedDate: data?.items[0]?.volumeInfo?.publishedDate,
      },
    ]);
  }

  function handleSaveBook(e) {
    e.preventDefault();
    fetchBook(bookName);
    setBookName("");
  }

  return (
    <>
      <div className="body-container">
        <form className="book-form" onSubmit={handleSaveBook}>
          <h2>Add your Book!</h2>
          <div className="book-name">
            <label htmlFor="bookName">Enter Book Name</label>
            <input
              type="text"
              required
              id="bookName"
              onChange={(e) => setBookName(e.target.value)}
              value={bookName}
            ></input>
          </div>
          <div className="add-book-btn">
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
      <BookCard bookNameList={bookNameList} />
    </>
  );
}

export default Body;
