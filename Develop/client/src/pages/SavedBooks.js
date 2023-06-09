import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import {useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  const { data: userData, loading: userLoading, error: userError } = useQuery(GET_ME);
  
const [removeBook, { data: removeData, loading: removeLoading, error: removeError }] = useMutation(REMOVE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      throw new Error('You are not authenticated to remove a book!');
    }

    try {
      // const { data: updatedUser } = await removeBook({ variables: { bookId }, context: { headers: { Authorization: `Bearer ${token}` } } });

       const { data } = await removeBook({
         variables: { bookId },
         context: { headers: { Authorization: `Bearer ${token}` } },
       });

    } catch (err) {
      console.error(err);
        throw new Error(`An error occurred removing the book! Error message: ${err.message}`);
    }
  };

    
  if (userLoading) {
    return <h2>Loading...</h2>;
  } else if (userError || !userData) {
    console.error(userError);
  }

  // if data isn't here yet, say so
  if (removeLoading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className='text-light bg-dark p-5'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.me.savedBooks.length
            ? `Viewing ${userData.me.savedBooks.length} saved ${userData.me.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.me.savedBooks.map((book) => {
            return (
              <Col md="4">
                <Card key={book.bookId} border='dark'>
                  {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
