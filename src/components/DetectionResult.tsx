// react
import { useState } from 'react';

// next
import Image from 'next/image';

// RTK query
import { useGetDetectionDataQuery } from '@/lib/redux/api/apiSlice';

// skeleteon ui
import DetectionSkeleton from '@/components/skeleton/DetectionSkeleton';

// clsx
import clsx from 'clsx';

const DetectionResult = ({ imgUrl }: { imgUrl: string }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const { data, isError, isSuccess, isLoading } =
    useGetDetectionDataQuery(imgUrl);

  if (isError) {
    return (
      <p className="text-red-500 text-center">Error: API response error</p>
    );
  }

  return (
    <div
      className={clsx(
        'relative w-full rounded-md overflow-hidden border-2 border-cyan-400/10 bg-cyan-100/10',
        !imgLoaded ? 'aspect-[3/2] max-w-[800px]' : 'max-w-full'
      )}
    >
      <Image
        src={imgUrl}
        alt="Result Image"
        width="0"
        height="0"
        className={clsx(
          'w-full max-w-[800px] max-h-[800px]',
          isLoading ? 'opacity-60' : ''
        )}
        sizes="800px"
        onLoad={() => setImgLoaded(true)}
        priority
      />
      {isLoading && <DetectionSkeleton />}
      {isSuccess &&
        data.tags.map((tag: any, i: number) => (
          <div
            key={i}
            style={{
              width: `${tag.width}%`,
              height: `${tag.height}%`,
              left: `${tag.center.x - tag.width / 2}%`,
              top: `${tag.center.y - tag.height / 2}%`,
              rotate: `${tag.roll}deg`,
            }}
            className="border-cyan-300 border-2 absolute select-none"
          >
            <div className="absolute top-full bg-cyan-300/70 px-2 py-[2px] text-cyan-900 min-w-[calc(100%_+_4px)] -left-[2px]">
              <p>
                {tag.attributes.gender !== undefined &&
                  tag.attributes.gender.value}
              </p>
              <p>
                {tag.attributes.ethnicity !== undefined &&
                  Object.keys(tag.attributes.ethnicity).find(
                    (key: any) => tag.attributes.ethnicity[key].value === 'true'
                  )}
              </p>
              <p className="whitespace-nowrap">
                {tag.attributes.age_est !== undefined &&
                  `age: ${tag.attributes.age_est.value}`}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetectionResult;
