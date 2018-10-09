'use strict';

/**
 * Collaborator.js controller
 *
 * @description: A set of functions called "actions" for managing `Collaborator`.
 */

module.exports = {

  /**
   * Retrieve collaborator records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.collaborator.search(ctx.query);
    } else {
      return strapi.services.collaborator.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a collaborator record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.collaborator.fetch(ctx.params);
  },

  /**
   * Count collaborator records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.collaborator.count(ctx.query);
  },

  /**
   * Create a/an collaborator record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.collaborator.add(ctx.request.body);
  },

  /**
   * Update a/an collaborator record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.collaborator.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an collaborator record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.collaborator.remove(ctx.params);
  }
};
