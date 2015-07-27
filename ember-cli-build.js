/* global require, module */
var path = require('path');
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

// Ensures tests can find the dummy app config directory
process.env._DUMMY_CONFIG_ROOT_PATH = path.join(__dirname, 'tests', 'dummy');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
