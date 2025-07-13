import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full pt-24 pb-12 px-4 md:px-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Row: Name/Title (left), Tagline/Resume (right) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          {/* Left: Name + Title */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
              Darrel<br />Steward
            </h1>
            <div className="mt-4 text-2xl text-gray-400 font-medium">
              Product Designer
            </div>
          </div>
          {/* Right: Tagline + Resume Link */}
          <div className="flex-1 flex flex-col items-start md:items-end mt-6 md:mt-0">
            <p className="text-lg md:text-xl text-gray-500 max-w-xs md:text-right">
              Transforming data into the graphical interface & layouts schema for all types of applications.
            </p>
            <a
              href="/resume.pdf"
              className="mt-6 text-blue-600 font-semibold text-lg hover:underline flex items-center gap-1"
              download
            >
              Download Resume <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        {/* Profile Image */}
        <div className="mt-14 w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
            <Image
              src="/profile.jpg" // Replace with your actual image path
              alt="Darrel Steward headshot"
              width={600}
              height={400}
              className="object-cover w-full h-80 md:h-96"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
