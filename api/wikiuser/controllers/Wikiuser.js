'use strict';

/**
 * Wikiuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Wikiuser`.
 */

module.exports = {

  /**
   * Retrieve wikiuser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.wikiuser.search(ctx.query);
    } else {
      return strapi.services.wikiuser.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a wikiuser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.wikiuser.fetch(ctx.params);
  },

  /**
   * Count wikiuser records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.wikiuser.count(ctx.query);
  },

  /**
   * Create a/an wikiuser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.wikiuser.add(ctx.request.body);
  },

  /**
   * Update a/an wikiuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.wikiuser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an wikiuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.wikiuser.remove(ctx.params);
  }
};
