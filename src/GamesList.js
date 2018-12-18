import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({ games }) {
    //if there are no games from the collection, display a message
  const emptyMessage = (
    <p>There are no games yet in your collection.</p>
  );

  //Iterate throught games collection and create games list
  const gamesList = (
    <p>games list</p>
  );

  //If games collection is empty, we render empty message, else we render games List from the collection
  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}
//Here we setup games router, connected games component to redux, and rendered empty message when we have empty collection