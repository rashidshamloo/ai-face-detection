// zod
import { z } from 'zod';

// schemas
import {
  detectionResultSchema,
  detectionResultApiResponseSchema,
  detectionResultExternalApiResponseSchema,
} from '@/schemas/schemas';

export type detectionResult = z.infer<typeof detectionResultSchema>;
export type detectionResultApiResponse = z.infer<
  typeof detectionResultApiResponseSchema
>;
export type detectionResultExternalApiResponse = z.infer<
  typeof detectionResultExternalApiResponseSchema
>;
