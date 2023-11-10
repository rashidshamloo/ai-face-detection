'use client';

// next
import Image from 'next/image';

const sampleImageCount = 4;

const SampleImages = ({
  setImgUrl,
}: {
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex max-w-full [&>*]:h-[100px] justify-center items-center gap-2 flex-wrap">
      {[...Array(sampleImageCount)].map((_, i) => (
        <button
          key={i}
          className="[&>img]:transition-all [&>img]:will-change-transform [&>img]:duration-200 [&>img]:hover:scale-[1.15] rounded-md overflow-hidden relative aspect-[1.6] hover:brightness-110 hover:border-cyan-100/50 border-[1px] border-transparent hover:shadow-[0_0_8px_rgba(236,254,255,0.7)] transition-all duration-200"
          onClick={() =>
            setImgUrl(`/images/samples/${String(i + 1).padStart(2, '0')}.jpg`)
          }
          aria-label={`Sample ${i + 1}`}
        >
          <Image
            alt={`Sample Image ${i + 1}`}
            src={`/images/samples/${String(i + 1).padStart(2, '0')}.jpg`}
            className="object-cover"
            sizes="500px"
            fill
          />
        </button>
      ))}
    </div>
  );
};

export default SampleImages;
