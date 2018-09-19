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
  Meteor.subscribe("eits");
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

    // Clear form
    target.firstname.value = '';
    target.lastname.value = '';
    target.gender.value = '';
    target.dateOfBirth.value = '';

  },
  'click .toggle-checked' () {
    // Set the checked property to the opposite of its current value
    Meteor.call('eits.setChecked', this._id, !this.checked);
  },
  'click .deleteBtn' () {
    Meteor.call('eits.remove', this._id);
  },
});