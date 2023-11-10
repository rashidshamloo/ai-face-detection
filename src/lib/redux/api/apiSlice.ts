// redux toolkit
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

// schemas
import { detectionResultApiResponseSchema } from '@/schemas/schemas';

// types
import { detectionResult } from '@/types/types';

export const apiSlice = createApi({
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: '/',
    })
  ),
  endpoints: (builder) => ({
    getDetectionData: builder.query<detectionResult, string>({
      query: (imgUrl) => `api/detect?url=${imgUrl}`,
      transformResponse: (response) => {
        return detectionResultApiResponseSchema.parse(response).result;
      },
    }),
  }),
});

export const { useGetDetectionDataQuery } = apiSlice;
