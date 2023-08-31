/**
 * patient controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::patient.patient",
  ({ strapi }) => ({
    async findEvaluation(ctx) {
      const patient = await strapi.db.query("api::patient.patient").findOne({
        select: ["id"],
        where: {
          title: ctx.params.title,
          locale: ctx.query.locale,
        },
        populate: ["deep"],
      });
      const evaluation = patient.evaluation;
      return this.sanitizeOutput(evaluation);
    },
    async findDiagnostic(ctx) {
      const patient = await strapi.db.query("api::patient.patient").findOne({
        select: ["id"],
        where: {
          title: ctx.params.title,
          locale: ctx.query.locale,
        },
        populate: ["deep"],
      });
      const diagnostic = patient.diagnostic;
      return this.sanitizeOutput(diagnostic);
    },
    async findTherapeutic(ctx) {
      const patient = await strapi.db.query("api::patient.patient").findOne({
        select: ["id"],
        where: {
          title: ctx.params.title,
          locale: ctx.query.locale,
        },
        populate: ["deep"],
      });
      const therapeutic = patient.therapeutic;
      return this.sanitizeOutput(therapeutic);
    },
  })
);
