/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'eager',

  lazyLoading: {
    enabled: false
  },

  isDevelopingAddon() {
    return true;
  }
});
