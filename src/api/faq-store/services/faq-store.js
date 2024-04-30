'use strict';

/**
 * faq-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faq-store.faq-store');
