import {useLocation, useNavigate} from 'react-router-dom';
import './SelectedBook.css';
function SelectedBook(){
    const bookInfo= useLocation();
    const navigate= useNavigate();
    console.log(bookInfo);

    function handleClick(){
        if (bookInfo?.state?.book) {
        navigate('/book',{state: {book:bookInfo.state.book }});
        }
    }
    if (!bookInfo || !bookInfo.state || !bookInfo.state.book) {
        return <div>Loading...</div>; 
    }
    const { title, author, plot,  audience, year, pages, publisher  } = bookInfo.state.book;

    return(
        <section className="selected-book-container">
           <h1>{title}</h1>
           <p>By {author}</p> 
           <p>{plot}</p> 
           <div className="info-container">
                <p>Audience: {audience}</p>
                <p>First published: {year}</p>
                <p>Pages: {pages}</p>
                <p>Publisher: {publisher}</p>
            </div>
          { /*<button onClick={ handleClick }>Select</button> */}
          <button >Oh, I want to read it!</button> 
        </section>
    )
}
export default SelectedBook;

/*import { useLocation, useNavigate } from 'react-router-dom';

function SelectedBook() {
    const { state: { book } } = useLocation();
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    if (!book) {
        return <div>Loading...</div>; // Or handle undefined case accordingly
    }

    return (
        <section>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.plot}</p>
            <button onClick={handleClick}>Go Back</button>
        </section>
    );
}

export default SelectedBook;*/
