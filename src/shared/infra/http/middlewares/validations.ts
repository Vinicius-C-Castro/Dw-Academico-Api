import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from '@hapi/joi';
import { AppError } from '@shared/errors/app-error';

async function checkAndReturnValidationResult(
  schema: ObjectSchema<any>,
  data: any,
  joiConfig = {},
) {
  const { error, value: sanitizedData } = schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
    ...joiConfig,
  });

  if (!error) {
    return sanitizedData;
  }

  const report = error.details.map(detail => {
    const key = detail.path.join('.');
    const message = detail.message.replace(/['"]/g, '');
    return { [key]: message };
  });

  throw new AppError('Validation error', 422, report);
}

const validateRequest =
  (joiSchema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await checkAndReturnValidationResult(joiSchema, req);
      next();
    } catch (err) {
      next(err);
    }
  };

const validateParams =
  (joiSchema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;
      await checkAndReturnValidationResult(joiSchema, params, {
        stripUnknown: true,
      });
      req.params = params;
      next();
    } catch (err) {
      next(err);
    }
  };

const validateQuery =
  (joiSchema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { query } = req;
      const result = await checkAndReturnValidationResult(joiSchema, query);
      req.query = result;
      next();
    } catch (err) {
      next(err);
    }
  };

const validateBody =
  (joiSchema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      await checkAndReturnValidationResult(joiSchema, body, {
        stripUnknown: true,
      });
      req.body = body;
      next();
    } catch (err) {
      next(err);
    }
  };

export { validateBody, validateParams, validateQuery, validateRequest };
