var path = require('path');


module.exports = function (grunt) {
  return {
    options: {
      runType: 'runner',
      config: 'test/intern',
      bail: true,
      reporters: ['Console']
    },
    dev: {},
    api: {
      options: {
        runType: 'client',
        config: 'test/api_intern'
      }
    }
  };
};
