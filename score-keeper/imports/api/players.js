import { Mongo } from 'meteor/mongo';
import numeral from   'numeral';

const players = new Mongo.Collection('players');

export function getPlayers() {
  return players.find({}, { 
    sort: {
       score: -1
    }
  }).fetch(); 
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

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map( (player, index) => {
    index !== 0 && players[index-1].score > player.score ?
      rank++ : null;
    
      return {
        ...player,
        rank,
        position: numeral(rank).format('0o')
      };
  });
}