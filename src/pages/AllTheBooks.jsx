import {useEffect, useState} from "react";
import Book from "../components/Book";
import './AllTheBooks.css';
function AllTheBooks(){
    const [allBooks, setBooks]= useState([]);
    useEffect(()=>{
        async function getBooks(){
            const response= await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books')
            const data = await response.json();
            setBooks(data);
        }
        getBooks();
    }, []);

/*const bookComponents= allBooks.map((book)=>{
    return <Book book= {book} key={book.id}/>
});*/

return (
   <section className="section-container">
    <h2>8 Classic Children books</h2>
    <ul className="book-list">
                {allBooks.map((book) => (
                    <li className="book-item" key={book.id}>
                        <Book book={book} />
                    </li>
                ))}
            </ul>
    </section>
    

)
}
export default AllTheBooks;