// zod
import { z } from 'zod';

const tagSchema = z.object({
  width: z.number(),
  height: z.number(),
  roll: z.number(),
  center: z.object({ x: z.number(), y: z.number() }),
  attributes: z.object({
    gender: z.optional(
      z.object({
        value: z.string(),
        confidence: z.number(),
      })
    ),
    age_est: z.object({
      value: z.string(),
      confidence: z.number(),
    }),
    ethnicity: z.object({
      white: z.object({ value: z.string(), confidence: z.number() }),
      black: z.object({ value: z.string(), confidence: z.number() }),
      asian: z.object({ value: z.string(), confidence: z.number() }),
      indian: z.object({ value: z.string(), confidence: z.number() }),
      hispanic: z.object({ value: z.string(), confidence: z.number() }),
    }),
  }),
});

export const detectionResultSchema = z.object({
  width: z.number(),
  height: z.number(),
  url: z.string(),
  tags: z.array(tagSchema),
});

export const detectionResultApiResponseSchema = z.object({
  status: z.string(),
  result: detectionResultSchema,
});

export const detectionResultExternalApiResponseSchema = z.object({
  status: z.string(),
  photos: z.array(detectionResultSchema),
});
