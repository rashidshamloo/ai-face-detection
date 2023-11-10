// next
import Image from 'next/image';

const BackgroundElements = () => {
  return (
    <>
      <div className="absolute left-8 md:left-16 top-8 md:top-20 before:-z-[1] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[300%] before:h-[300%] before:bg-[radial-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.05)_10%,transparent_50%)] text-cyan-50/80">
        <p className="text-xs md:text-base">By</p>

        <p className="font-bold text-sm md:text-xl">
          <a
            href="https://www.rashidshamloo.com"
            target="_blank"
            className="transition-all duration-200 hover:text-cyan-50 before:absolute before:h-[1px] before:w-0 before:will-change-transform before:bg-cyan-50 before:bottom-0 before:left-1/2 before:-translate-x-1/2 hover:before:w-full before:transition-all before:duration-500"
          >
            Rashid Shamloo
          </a>
        </p>
      </div>
      <div className="absolute right-4 md:right-8 xl:right-0 top-2 sm:top-4 md:top-16 select-none pointer-events-none -z-[1]">
        <Image
          className="max-w-[100px] sm:max-w-[150px] md:max-w-[300px] lg:max-w-[400px] opacity-80"
          src="/images/face.png"
          alt="Face"
          width={654}
          height={800}
          priority
        />
      </div>
    </>
  );
};

export default BackgroundElements;
