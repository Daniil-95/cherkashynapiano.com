'use strict';

/**
 * concert service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concert.concert');
