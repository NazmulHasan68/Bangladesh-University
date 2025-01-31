import founder from '../../../assets/commonPhoto/founder.png';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function SpeachFounder() {
  return (
    <div className="max-w-7xl mx-4 md:mx-auto md:my-12 my-5 px-6 flex bg-slate-50 p-2 rounded-xl gap-6 md:gap-24 items-center">
      <div className=" basis-3/4 text-center md:text-left">
        <blockquote className="italic text-2xl text-gray-800 rounded-lg md:p-8 p-2 relative">
          <FaQuoteLeft className="absolute left-0 top-1 transform -translate-y-1/2 md:text-4xl text-xl text-red-400"/>
          <FaQuoteRight className="absolute right-0 top-32 sm:top-20 md:top-36 transform -translate-y-1/2 md:text-4xl text-xl text-red-400"/>
          <p className='text-xs md:text-xl mt-3 text-slate-400'>
            As the founder of this university, I believe in the power of education to transform lives,
            and I am committed to providing a platform where every student can unlock their true potential
            and lead with purpose.
          </p>
        </blockquote>
      </div>
      <div className=" basis-1/4">
        <img src={founder} alt="Founder" className="w-24 md:w-48 "/>
      </div>
    </div>
  );
}
