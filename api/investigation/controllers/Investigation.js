'use strict';

/**
 * Investigation.js controller
 *
 * @description: A set of functions called "actions" for managing `Investigation`.
 */

module.exports = {

  /**
   * Retrieve investigation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.investigation.search(ctx.query);
    } else {
      return strapi.services.investigation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a investigation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.investigation.fetch(ctx.params);
  },

  /**
   * Count investigation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.investigation.count(ctx.query);
  },

  /**
   * Create a/an investigation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.investigation.add(ctx.request.body);
  },

  /**
   * Update a/an investigation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.investigation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an investigation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.investigation.remove(ctx.params);
  }
};
