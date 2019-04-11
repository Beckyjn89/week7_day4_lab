const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Mountains = function () {
  this.data = null;
};

Mountains.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/munros`
  const requestHelper = new RequestHelper(url);
  console.log(requestHelper);
  requestHelper.get()
    .then((mountains) => {
      this.data = mountains;
      console.log(this.data);
      const everyRegion = []
      let regions = mountains.forEach((mountain) => {
        everyRegion.push(mountain.region)
      });
      regions = everyRegion.filter((region, index, array) => {
        return array.indexOf(region) === index;
      });
      console.log(regions)


      PubSub.publish('Mountains:dropdown-options-ready', regions);
    })
    .catch()
};

Mountains.prototype.bindEvents = function () {
  PubSub.subscribe('MountainSelectView:regions-selected', (selectedRegions) => {
    const regionsMountains = [];
    const mountains = this.data;
    mountains.forEach((mountain) => {
      if (mountain.region === selectedRegions.detail) {
        regionsMountains.push(mountain);
      };
    });
    PubSub.publish('Mountains:selected-mountains-ready', regionsMountains)
  });
};


module.exports = Mountains;
