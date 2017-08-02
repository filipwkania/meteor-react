import { Meteor } from 'meteor/meteor';
import * as Players from './../imports/api/players';

Meteor.startup(() => {
  console.log('====================================');
  console.log(Players.getPlayers());
  console.log('====================================');
});
