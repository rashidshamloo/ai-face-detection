// next
import Image from 'next/image';

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-cyan-200/30 before:to-transparent';

const DetectionSkeleton = () => {
  return (
    <div
      className={`${shimmer} absolute inset-0 overflow-hidden flex items-center justify-center select-none`}
    >
      <Image
        src="/images/face-detection-icon.png"
        width="150"
        height="150"
        alt="Face Detection Icon"
        className="invert opacity-50"
      />
    </div>
  );
};

export default DetectionSkeleton;
