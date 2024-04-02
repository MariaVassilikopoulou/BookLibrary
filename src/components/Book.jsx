
import {useNavigate} from 'react-router-dom';
import './Book.css'
function Book(props){
    const { book } = props;
    const navigate = useNavigate();
   

    function handleClick(){
        navigate(`/book/${book.id}`, {state: {book: book }});
        setShowBookContainer(true);
    }
    return(
        <section className="book-container" style={{ backgroundColor: book.color }} onClick={handleClick}>
      
           <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
            </div>
        </section>
    )
}
export default Book;