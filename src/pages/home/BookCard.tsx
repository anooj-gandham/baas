import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@mui/material'
import { BookProps } from './SampleBooks';

// import './BookCard.css';

interface BookCardProps {
    book: BookProps;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const navigate = useNavigate();

    const handleReadClick = (book: BookProps) => {
        // console.log(book)
        // // Set the bookId in cookies
        // document.cookie = `bookId=${book.id}`;
        localStorage.setItem('bookId', book.id.toString());
        navigate('/read');
    }

    return (
        <Card className="main-panel-body-card">
            <CardContent className='main-panel-body-card-content'>
                <div className="main-panel-body-card-title">
                    <h2>{book.title}</h2>
                </div>
                <div className="main-panel-body-card-author">
                    <h3>{book.author}</h3>
                </div>
                <div className="main-panel-body-card-cover">
                    <img src={book.coverImage} alt="" />
                </div>
                <div className="main-panel-body-card-description">
                    <p>{book.description}</p>
                </div>
                <div className="main-panel-body-card-actions">
                    <div
                        className="main-panel-body-card-actions-item"
                        onClick={() => handleReadClick(book)}
                    >
                        <span className="icon-text">Read</span>
                    </div>
                    {/* <div className="main-panel-body-card-actions-item">
                        <img src="/static/icons/favourite.svg" alt="Favourite" className="navbar-icon-img" />
                    </div> */}
                </div>
            </CardContent>
        </Card>
    );
}

export default BookCard;

