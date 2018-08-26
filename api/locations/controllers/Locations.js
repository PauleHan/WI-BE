'use strict';

/**
 * Locations.js controller
 *
 * @description: A set of functions called "actions" for managing `Locations`.
 */

module.exports = {

  /**
   * Retrieve locations records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.locations.search(ctx.query);
    } else {
      return strapi.services.locations.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a locations record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.locations.fetch(ctx.params);
  },

  /**
   * Count locations records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.locations.count(ctx.query);
  },

  /**
   * Create a/an locations record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.locations.add(ctx.request.body);
  },

  /**
   * Update a/an locations record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.locations.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an locations record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.locations.remove(ctx.params);
  }
};
