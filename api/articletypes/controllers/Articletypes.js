'use strict';

/**
 * Articletypes.js controller
 *
 * @description: A set of functions called "actions" for managing `Articletypes`.
 */

module.exports = {

  /**
   * Retrieve articletypes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.articletypes.search(ctx.query);
    } else {
      return strapi.services.articletypes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a articletypes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.articletypes.fetch(ctx.params);
  },

  /**
   * Count articletypes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.articletypes.count(ctx.query);
  },

  /**
   * Create a/an articletypes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.articletypes.add(ctx.request.body);
  },

  /**
   * Update a/an articletypes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.articletypes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an articletypes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.articletypes.remove(ctx.params);
  }
};
