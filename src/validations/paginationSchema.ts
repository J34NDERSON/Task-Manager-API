import { z } from "zod";

export const paginationSchema = z
  .object({
    title: z
      .string({
        required_error: "title is required!",
        invalid_type_error: "title must be a string!",
      })
      .min(3, "page must have at least 3 characters!")
      .max(255, "max page length exceeded!"),

    status: z.enum(["completed", "pending"], {
      required_error: "status is required!",
      invalid_type_error: "status must be 'completed' or 'pending'!",
    }),
  })
  .strict();

export type paginationDataTypes = z.infer<typeof paginationSchema>;
