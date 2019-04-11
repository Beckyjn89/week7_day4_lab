const Mountains = require('./models/mountains.js')
const MountainListView = require('./views/mountain_list_view.js')
const MountainSelectView = require('./views/mountain_select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const mountainsListContainer = document.querySelector('.mountains');
  const mountainListView = new MountainListView(mountainsListContainer);
  mountainListView.bindEvents();

  const mountainsSelectionContainer = document.querySelector('.region-dropdown');
  const mountainSelectView = new MountainSelectView(mountainsSelectionContainer);
  mountainSelectView.bindEvents();

  const mountains = new Mountains();
  mountains.bindEvents();
  mountains.getData();

});
