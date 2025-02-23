import { createSignal } from "olova";

import MyPhoto from "/photo.jpg";
export default function TestimonialSlider() {
  const [Data, setData] = createSignal({
    name: "Nazmul Hossain",
    job: "JavaScript Developer at Seraprogrammer",
    description:
      "Hello! I'm Nazmul Hossain, a passionate JavaScript developer specializing in creating innovative web solutions and user-friendly interfaces. ",
  });

  return (
    <div className="bg-black flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image container */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden flex justify-center items-center">
              <img
                src={MyPhoto}
                alt="Testimonial"
                className="w-full h-auto rounded-3xl max-w-xs md:max-w-sm"
              />
            </div>
          </div>

          {/* Content container */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                {() => Data().name}
              </h3>
              <p className="text-gray-400">{() => Data().job}</p>
            </div>

            <p className="text-white text-base md:text-lg leading-relaxed">
              {() => Data().description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
