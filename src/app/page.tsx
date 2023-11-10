'use client';

// react
import { useState } from 'react';

// providers
import Provider from './providers/Provider';

// components
import UploadDropzone from '@/components/UploadDropzone';
import SampleImages from '@/components/SampleImages';
import DetectionResult from '@/components/DetectionResult';
import BackgroundElements from '@/components/BackgroundElements';
import Title from '@/components/Title';

export default function Home({}) {
  const [imgUrl, setImgUrl] = useState('');

  return (
    <Provider>
      <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-24 pt-24 xl:container relative mx-auto gap-8 text-cyan-50">
        <Title />

        {imgUrl !== '' ? (
          <>
            <DetectionResult imgUrl={imgUrl} />
            <button
              className="bg-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:shadow-[0_0_8px_rgba(6,182,212,0.7)] transition-all duration-200 text-cyan-50"
              onClick={() => setImgUrl('')}
            >
              Use another image
            </button>
          </>
        ) : (
          <>
            <p className="text-lg mt-8 md:mt-16 text-center max-w-[80%] md:max-w-full">
              Select one of the sample images below or upload your own image to
              start
            </p>
            <SampleImages setImgUrl={setImgUrl} />
            <UploadDropzone setImgUrl={setImgUrl} />
          </>
        )}

        <BackgroundElements />
      </main>
    </Provider>
  );
}
