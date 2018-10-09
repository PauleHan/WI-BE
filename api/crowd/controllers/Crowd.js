'use strict';

/**
 * Crowd.js controller
 *
 * @description: A set of functions called "actions" for managing `Crowd`.
 */

module.exports = {

  /**
   * Retrieve crowd records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.crowd.search(ctx.query);
    } else {
      return strapi.services.crowd.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a crowd record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.crowd.fetch(ctx.params);
  },

  /**
   * Count crowd records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.crowd.count(ctx.query);
  },

  /**
   * Create a/an crowd record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.crowd.add(ctx.request.body);
  },

  /**
   * Update a/an crowd record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.crowd.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an crowd record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.crowd.remove(ctx.params);
  }
};
