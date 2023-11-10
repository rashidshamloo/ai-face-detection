'use client';

// react
import { useState } from 'react';

// uploadthing
import { UploadDropzone as UDZ } from '@/utils/uploadthing';

const UploadDropzone = ({
  setImgUrl,
}: {
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [error, setError] = useState('');
  return (
    <div>
      <UDZ
        appearance={{
          allowedContent: 'text-cyan-100/50',
          label:
            'text-cyan-500 hover:text-cyan-300 transition-all duration-200',
          uploadIcon: 'text-cyan-100/80',
          container: 'border-cyan-200/50 bg-cyan-50/10 md:p-20',
          button:
            'bg-cyan-600 hover:bg-cyan-500 hover:shadow-[0_0_8px_rgba(6,182,212,0.7)] transition-all duration-200 text-cyan-50',
        }}
        endpoint="imageUploader"
        onUploadBegin={() => setError('')}
        onClientUploadComplete={(res) => {
          if (res) setImgUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          setError(error.message);
        }}
      />
      {error !== '' && (
        <p className="text-red-500/70 mt-1 text-center">Error: {error}</p>
      )}
    </div>
  );
};

export default UploadDropzone;
