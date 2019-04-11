const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const MountainListView = require('./mountain_list_view.js')

const MountainView = function(container, mountain) {
  this.mountainsContainer = container;
  this.mountain = mountain;
};

MountainView.prototype.render = function () {
  const mountainContainer = document.createElement('div');
  mountainContainer.classList.add('mountain');

  const name = this.createContentHeading();
  mountainContainer.appendChild(name);

  const height = this.createContentHeight();
  mountainContainer.appendChild(height);

  const meaning = this.createContentMeaning();
  mountainContainer.appendChild(meaning);

  this.mountainsContainer.appendChild(mountainContainer);
};

MountainView.prototype.createContentHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('mountain-name');
  name.textContent = this.mountain.name;
  return name;
};

MountainView.prototype.createContentHeight = function () {
  const height = document.createElement('p');
  height.classList.add('mountain-height');
  height.textContent = `Height: ${this.mountain.height} m`;
  return height;
};

MountainView.prototype.createContentMeaning = function () {
  const meaning = document.createElement('p');
  meaning.classList.add('mountain-meaning');
  meaning.textContent = `Meaning: ${this.mountain.meaning}`;
  return meaning;
};

module.exports = MountainView;
