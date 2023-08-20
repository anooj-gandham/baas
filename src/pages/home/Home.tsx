import * as React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookCard from './BookCard';
import Sidepanel from './Sidepanel';
import { getRequest } from '../../apis/GetRequest';
import './Home.css';

const Home: React.FC = () => {

    const [books, setBooks] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Introduce a new state for loading

    useEffect(() => {
        getRequest(process.env.REACT_APP_API_URL + '/api/v1/pdfs')
            .then((data: any) => {
                setBooks(data);
                setIsLoading(false); // Set loading to false once data is fetched
            })
            .catch((err: any) => {
                console.log(err);
                setIsLoading(false); // Set loading to false even if there's an error
            });
    }, []);

    return (
        <div className="home-panel">
            <Sidepanel />
            <div className="main-panel">
                <div className="main-panel-header">
                    <div className="main-panel-header-title">
                        <h1>Textbooks</h1>
                    </div>
                    <div className="main-panel-header-search">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="main-panel-body">
                    {isLoading ? (
                        <p>Loading...</p>  // Display a loading message or spinner while data is being fetched
                    ) : books.length > 0 ? (
                        books.map((book) => (
                            <BookCard book={book} key={uuidv4()} />
                        ))
                    ) : (
                        <p>No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
