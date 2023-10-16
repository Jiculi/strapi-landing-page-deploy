'use strict';

/**
 * `landing-page-populate` middleware
 */

const populate = {};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');

    await next();
  };
};
