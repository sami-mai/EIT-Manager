import {
  Template
} from 'meteor/templating';

import {
  EITs
} from '../../api/eits.js';

import './eit.html';

Template.eit.events({
  'click .toggle-checked' () {
    // Set the checked property to the opposite of its current value
    EITs.update(this._id, {
      $set: {
        checked: !this.checked
      },
    });
  },
  'click .delete' () {
    EITs.remove(this._id);
  },
});