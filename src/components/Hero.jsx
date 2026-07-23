const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-[#f4f4f0] overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(#e5e5e0 1px, transparent 1px), linear-gradient(90deg, #e5e5e0 1px, transparent 1px)",

        backgroundSize: "40px 40px",
      }}
    >
      {/* ✦ Bintang */}

      <div className="absolute top-20 left-4 md:left-20 text-pink-600 animate-float text-2xl md:text-4xl opacity-50 select-none pointer-events-none">
        ✦
      </div>

      {/* ✖ Silang */}

      <div className="absolute bottom-24 right-2 md:right-20 text-cyan-500 animate-float text-2xl md:text-6xl opacity-40 select-none pointer-events-none [animation-delay:2s]">
        ✖
      </div>

      {/* Lingkaran */}

      <div className="absolute top-1/4 right-2 w-8 h-8 md:right-20 md:w-16 md:h-16 border-4 border-black rounded-full animate-float opacity-20 select-none pointer-events-none [animation-delay:1s]"></div>

      {/* Kotak */}

      <div className="absolute bottom-1/4 md:left-20 left-6 w-6 h-6 md:w-12 md:h-12 bg-amber-300 border-2 border-black rotate-45 animate-pulse opacity-30 select-none pointer-events-none"></div>

      <section
        id="home"
        className="w-full max-w-5xl mx-auto h-[calc(100%-68px)] pt-24 pb-12 px-4 sm:px-8 flex flex-col items-center justify-center text-center relative z-10"
      >
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="font-brutal text-3xl sm:text-6xl md:text-5xl font-black text-black leading-none uppercase tracking-tight">
            HI, saya
          </h1>

          <div className="mt-4 bg-white text-amber-300 px-4 py-2 sm:px-10 sm:py-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-2">
            <span className="font-brutal text-3xl sm:text-7xl md:text-7xl font-black tracking-wide block uppercase text-black">
              Diki Ardian
            </span>
          </div>

          <div className="mt-2 bg-pink-600 text-white px-4 py-2 sm:px-10 sm:py-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-3">
            <span className="font-brutal text-lg sm:text-lg md:text-4xl md:px-18 font-black tracking-wide block uppercase">
              Fullstack Developer
            </span>
          </div>
        </div>

        <p className="text-sm sm:text-xl md:text-2xl font-bold text-zinc-700 max-w-sm sm:max-w-2xl font-sans leading-relaxed mt-8 px-4">
          Mahasiswa Sistem Informasi yang suka ngulik kode, dan menciptakan
          solusi digital yang solutif.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full px-20 sm:w-auto">
          <a
            href="#projects"
            className="bg-amber-300 text-black px-6 py-3 border-4 border-black font-brutal font-black uppercase text-xs sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 transition-all duration-100 text-center"
          >
            View Projects
          </a>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 right-0 w-full bg-pink-600 border-t-4 border-b-4 border-black py-2 sm:py-4 overflow-hidden select-none z-20">
        <div className="flex flex-row w-max min-w-full whitespace-nowrap animate-marquee uppercase font-brutal text-base sm:text-xl md:text-2xl font-black tracking-wider text-white">
          <span className="px-2">
            ✦ FULL-STACK DEVELOPER ✦ WEB DEVELOPER ✦ INFORMATION SYSTEM ✦
          </span>

          <span className="px-2">
            ✦ FULL-STACK DEVELOPER ✦ WEB DEVELOPER ✦ INFORMATION SYSTEM ✦
            MANAGEMENT ✦
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
