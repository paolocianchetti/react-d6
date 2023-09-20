import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from "../comments/CommentArea";
import {Link} from 'react-router-dom';
import './singleBook.css';

export default function SingleBook({ asin, img, title, category, price, btn }) {
    const [selected, setSelected] = useState(false);
    const cardSelected = `selected-${selected}`;

    const toggleSelectedBook = (event) => {
        const { value } = event.target;
        if (!JSON.parse(value)) {
            event.target.className = "btn btn-danger";
            setSelected(true);
        }
        else {
            event.target.className = "btn btn-secondary";
            setSelected(false);
        }
    }

    return (
        <Card className={cardSelected}>
            <Link to={`/book/${asin}`}>
                <Card.Img variant="top" src={img} />
            </Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button variant="primary" name="added">
                        {'€ '}
                        {price}
                    </Button>
                    <Button onClick={toggleSelectedBook} variant="secondary" name="selected" value={selected}>
                        {btn}
                    </Button>
                </div>
                {selected && <CommentArea isbn={asin}/>}
            </Card.Body>
        </Card>
    )
}
