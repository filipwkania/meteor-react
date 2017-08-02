import { Mongo } from 'meteor/mongo';

const players = new Mongo.Collection('players');

export function getPlayers() {
  return players.find().fetch();
}

export function createPlayer( name = 'NoName', score = 0 ) {
  players.insert({ name, score });
}

export function deletePlayer( id ) {
  players.remove(id);
}

export function updateScore( id , shouldIncrement ) {
  if(shouldIncrement) {
    players.update( id, {
      $inc: { score: 1}
    });
  } else {
    players.update( id, {
      $inc: { score: -1 }
    });
  }
}