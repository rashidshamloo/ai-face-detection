// next/server
import { NextResponse, NextRequest } from 'next/server';

// validator
import validator from 'validator';

// config
const API_URL = process.env.API_URL;

// sample data
import sampleData from '@/data/data.json';

// schemas
import { detectionResultExternalApiResponseSchema } from '@/schemas/schemas';

// types
import {
  detectionResultApiResponse,
  detectionResultExternalApiResponse,
} from '@/types/types';

// fetch detection result from the external API
const getDetectionResult = async (
  imgUrl: string
): Promise<detectionResultExternalApiResponse> => {
  const url = API_URL + imgUrl;
  const response = await fetch(url);
  const responseJson = await response.json();
  return detectionResultExternalApiResponseSchema.parse(responseJson);
};

export async function GET(req: NextRequest) {
  const imgUrl = req.nextUrl.searchParams.get('url');
  const isSampleImage = imgUrl && /^\/images\/samples\/\d+\.jpg$/.exec(imgUrl);

  // validate image url
  if (!imgUrl || (!isSampleImage && !validator.isURL(imgUrl)))
    return NextResponse.json(
      { status: 'failure', message: 'Bad image URL' },
      { status: 400 }
    );

  // if a sample image is provided, add a 1 sec delay
  if (isSampleImage) {
    await new Promise((res) => setTimeout(() => res(''), 1000));
    return NextResponse.json(
      { status: 'success', result: sampleData.find((d) => d.url === imgUrl) },
      { status: 200 }
    );
  }

  // else fetch result from the external API
  try {
    const apiResult = await getDetectionResult(imgUrl);
    const result: detectionResultApiResponse = {
      status: apiResult.status,
      result: apiResult.photos[0],
    };
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { status: 'failure', message: 'External API response failure' },
      { status: 500 }
    );
  }
}
