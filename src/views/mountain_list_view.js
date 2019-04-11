const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountain_view.js')

const MountainListView = function (container) {
  this.container = container;
};

MountainListView.prototype.bindEvents = function () {
  PubSub.subscribe('Mountains:selected-mountains-ready', (evt) => {
    this.mountains = evt.detail;
    this.render();
  })
};

MountainListView.prototype.render = function () {
  this.container.innerHTML = "";
  this.mountains.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};

module.exports = MountainListView;
