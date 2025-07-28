import "./BookCardStyle.css";
import { DeleteFilled } from "@ant-design/icons";

function BookCard({ bookNameList }) {
  return (
    <div className="book-cards-container">
      {bookNameList.map((book, index) => (
        <li key={index} className="book-card">
          <div className="title-delete">
            <div className="book-title">{book.title}</div>
            <button className="delete-button">
              <DeleteFilled />
            </button>
          </div>
          <div className="book-author">Author: {book.author}</div>
          <div className="book-date">Published: {book.publishedDate}</div>
        </li>
      ))}
    </div>
  );
}

export default BookCard;
