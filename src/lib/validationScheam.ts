import { ObjectSchema } from "joi";
import { CustomError } from "./customError";

export function validator<T>(schema: ObjectSchema<T>, dto: T): void {
  const { error } = schema.validate(dto);

  if (error) {
    throw new CustomError(400, error.details[0].message);
  }
}
