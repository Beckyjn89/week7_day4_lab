const PubSub = require('../helpers/pub_sub.js');

const MountainSelectView = function (container) {
  this.container = container;
};

MountainSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Mountains:dropdown-options-ready', (evt) => {
    const regions = evt.detail;
    regions.forEach((region) => {
      const option = document.createElement('option')
      option.textContent = region;
      option.value = region;
      this.container.appendChild(option);
    });
    this.container.addEventListener('change', (evt) => {
      const selectedRegion = evt.target.value;
      PubSub.publish('MountainSelectView:regions-selected', selectedRegion)
    });
  });
};



module.exports = MountainSelectView;
