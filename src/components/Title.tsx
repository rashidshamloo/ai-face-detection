// fonts
import { domine } from '@/ui/fonts';

const Title = () => {
  return (
    <div className="md:mb-8">
      <h1
        className={`font-bold text-[clamp(1.5rem,_1.5rem_+_2vw,3rem)] drop-shadow-[0_0_16px_rgba(255,255,255,0.2)] text-center ${domine.className}`}
      >
        AI Face Detection
      </h1>
      <p className="text-lg text-center opacity-70">
        with age, gender, and ethnicity recognition
      </p>
    </div>
  );
};

export default Title;
