import {
  Meteor
} from 'meteor/meteor';
import {
  Template
} from 'meteor/templating';
import {
  ReactiveDict
} from 'meteor/reactive-dict';
import {
  EITs
} from '../api/eits.js';

import './body.html';
import './templates/eit_list.js'
import './templates/eit.js'

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.events({
  'submit .new-eit' (event) {
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const firstname = target.firstname.value
    const lastname = target.lastname.value
    const gender = target.gender.value
    const dateOfBirth = target.dateOfBirth.value

    // Insert a task into the collection
    Meteor.call("eits.insert", firstname, lastname, gender, dateOfBirth);

    // Insert a eit into the collection
    // EITs.insert({
    //   firstname,
    //   lastname,
    //   gender,
    //   dateOfBirth,
    //   createdAt: new Date(), // current time
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username,
    //
    // });
    // Clear form
    target.firstname.value = '';
    target.lastname.value = '';
    target.gender.value = '';
    target.dateOfBirth.value = '';

  },
});