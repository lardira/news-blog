import './styles/NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found-page'>
      <img src='https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg?w=1380&t=st=1667579096~exp=1667579696~hmac=4cda1c410c302384d8c33a35181865f888a61ea00fe8d43c02df5ecefeee4286' />
      <a href='https://www.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_7906236.htm#query=404%20not%20found&position=19&from_view=keyword'>
        Image by storyset on Freepik
      </a>
      <p className='go-home-link'>
        <Link to='/posts'>To Home Page </Link>
      </p>
    </div>
  );
}

export default NotFound;
