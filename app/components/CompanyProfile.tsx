export default function CompanyProfile() {
  return (
    <section
      id="company-profile"
      className="bg-[#0B1020] py-36 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-[0.35em] uppercase text-cyan-400">
            Company Profile
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">
            Discover NixMark
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400 leading-8">
            Explore our complete digital marketing company profile,
            services, portfolio and growth strategy.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <img
              src="/booklet-cover.png"
              alt="Company Profile"
              className="w-full max-w-xl rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,.25)] hover:scale-105 duration-500"
            />
          </div>

          {/* Right */}
          <div className="text-center lg:text-left">

            <h3 className="text-5xl font-bold leading-tight">
              Digital Marketing
              <br />
              Booklet
            </h3>

            <p className="mt-8 text-xl text-gray-400 leading-10">
              Discover our branding process, SEO strategies,
              Meta Ads, Website Development, portfolio,
              case studies and complete digital marketing
              solutions designed to grow your business.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">

              <a
                href="/booklet.pdf"
                target="_blank"
                className="rounded-full bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 duration-300"
              >
                📖 View PDF
              </a>

              <a
                href="/booklet.pdf"
                download
                className="rounded-full border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-white duration-300"
              >
                ⬇ Download PDF
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}