import {
  Template
} from 'meteor/templating';

import {
  EITs
} from '../api/eits.js';

import './body.html';
import './templates/eit_list.js'
import './templates/eit.js'

// Template.body.helpers({
//
//   eits() {
//     return EITs.find({});
//   },
// });

Template.body.events({
  'submit .new-eit' (event) {
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const firstname = target.fname.value
    const lastname = target.lname.value
    const gender = target.gender.value
    const dateOfBirth = target.date.value

    // Insert a eit into the collection
    EITs.insert({
      firstname,
      lastname,
      gender,
      dateOfBirth,
    });
    // Clear form
    target.fname.value = '';
    target.lname.value = '';
    target.gender.value = '';
    target.date.value = '';

  },
});