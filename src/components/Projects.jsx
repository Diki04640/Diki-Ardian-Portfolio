import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaBootstrap, FaPhp, FaJava } from "react-icons/fa";
import { DiHtml5, DiCss3, DiJavascript1, DiNodejs } from "react-icons/di";
import {
  SiCodeigniter,
  SiMysql,
  SiEspressif,
  SiSocketdotio,
  SiLeaflet,
  SiExpress,
  SiArduino,
} from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const projectsData = [
    {
      id: 1,
      title: "SIBARA",
      subtitle: "Digital Information System",
      badge: "Web App",
      badgeColor: "bg-cyan-300",
      tags: [
        { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
        {
          name: "CodeIgniter",
          icon: <SiCodeigniter className="text-orange-600" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-600" />,
        },
      ],
      images: [
        "/images/loginSibara.png",
        "/images/dashboardSibara.png",
        "/images/managementSIBARA.png",
        "/images/userSIBARA.png",
        "/images/reportSIBARA.png",
        "/images/profilSIBARA.png",
      ],
      shortDesc:
        "Sistem informasi digital untuk manajemen barang bukti dan logistik barang.",
      longDesc:
        "SIBARA (Sistem Informasi Barang Bukti) adalah aplikasi berbasis web yang dirancang untuk mempermudah pengelolaan, pendataan, serta validasi data barang bukti secara real-time. Memiliki dashboard admin yang komprehensif serta validasi database yang ketat untuk keamanan data.",
    },
    {
      id: 2,
      title: "Smart Trash",
      subtitle: "Internet of Things (IoT)",
      badge: "IoT System",
      badgeColor: "bg-green-300",
      tags: [
        { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <DiJavascript1 className="text-yellow-500" />,
        },
        { name: "Node.js", icon: <DiNodejs className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "WebSocket", icon: <SiSocketdotio className="text-black" /> },
        { name: "Leaflet", icon: <SiLeaflet className="text-green-500" /> },
        { name: "Arduino", icon: <SiArduino className="text-teal-600" /> },
      ],
      images: ["/images/trashDashboard2.png", "/images/trashDashboard.jpeg"],
      shortDesc:
        "Sistem monitoring tempat sampah pintar berbasis IoT dengan peta lokasi real-time.",
      longDesc:
        "Proyek IoT yang mengintegrasikan mikrokontroler ESP8266 dengan sensor ultrasonik untuk memantau volume sampah. Menggunakan ekosistem Node.js, Express, dan WebSocket untuk komunikasi data real-time ke dashboard interaktif yang dilengkapi pemetaan Leaflet.js.",
    },
    {
      id: 3,
      title: "Sparepart Inventory",
      subtitle: "Java Desktop Application",
      badge: "Desktop App",
      badgeColor: "bg-purple-300",
      tags: [
        { name: "Java Swing", icon: <FaJava className="text-red-500" /> },
        {
          name: "FlatLaf",
          icon: <span className="text-blue-600 text-xs font-black">FL</span>,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
      images: [
        "/images/loginSparepart.png",
        "/images/dashboardSPAREPART.png",
        "/images/SPAREPART.png",
        "/images/bmSPAREPART.png",
        "/images/bkSPAREPART.png",
        "/images/RBM.png",
        "/images/RBK.png",
      ],
      shortDesc:
        "Aplikasi desktop untuk manajemen inventaris sparepart dengan UI modern.",
      longDesc:
        "Aplikasi manajemen inventaris sparepart berbasis desktop yang dibangun menggunakan Java Swing. Mengimplementasikan pustaka FlatLaf untuk antarmuka pengguna yang modern dan integrasi database SQL untuk pengelolaan data stok barang yang efisien.",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#f4f4f0] pt-24 pb-0 px-0 border-t-4 border-black relative overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute top-12 left-[5%] text-zinc-300 font-brutal text-8xl font-black select-none pointer-events-none hidden md:block opacity-40">
        ✦
      </div>
      <div className="absolute bottom-32 right-[5%] text-zinc-300 font-brutal text-9xl font-black select-none pointer-events-none hidden md:block opacity-40">
        ✖
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 px-12 sm:px-10 pb-24 w-full">
        <div className="mb-18 bg-white border-4 text-center border-black px-6 sm:px-8 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1">
          <h2 className="font-brutal text-2xl sm:text-5xl font-black uppercase tracking-tight text-black">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projectsData.map((project) => (
            <div key={project.id} className="relative group">
              <div className="absolute inset-0 bg-black border-4 border-black translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>

              <div className="relative bg-white border-4 border-black p-5 flex flex-col justify-between h-full transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:-translate-x-1">
                <div>
                  <div className="w-full border-4 border-black bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-5 aspect-video relative">
                    <span
                      className={`absolute top-2 left-2 z-10 border-2 border-black ${project.badgeColor} text-[10px] font-black uppercase px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      {project.badge}
                    </span>
                    <img
                      src={project.images[1]}
                      alt={`Preview ${project.title}`}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 bg-pink-600 rounded-full inline-block group-hover:animate-ping"></span>
                    <span className="text-xs font-black uppercase text-pink-600 tracking-wider block">
                      {project.subtitle}
                    </span>
                  </div>
                  <h3 className="font-brutal text-2xl font-black uppercase text-black mb-3 group-hover:text-pink-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <div className="w-full h-3 border-4 border-black mb-4 card-stripes group-hover:animate-stripes"></div>

                  <p className="font-sans text-sm text-zinc-600 font-medium leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-amber-300 text-black py-2.5 border-4 border-black font-brutal font-black uppercase tracking-wider text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  Detail Project ✦
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full h-10 border-t-4 border-b-4 border-black relative z-30 bg-amber-300 overflow-hidden custom-marquee-stripes"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-3 -right-4 z-60 bg-white border-4 border-black p-2 hover:bg-pink-600 hover:text-white transition-all rounded-full hover:rotate-90"
            >
              <IoCloseSharp size={26} />
            </button>

            <div className="w-full bg-[#f4f4f0] border-4 border-black max-h-[90vh] overflow-y-auto p-5 sm:p-10 scrollbar-none">
              <h3 className="font-brutal text-2xl sm:text-3xl font-black uppercase mb-4 sm:mb-6">
                {selectedProject.title}
              </h3>

              <div className="mb-6 flex justify-center w-full">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none items-center w-full justify-start">
                  {selectedProject.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full shrink-0 snap-center flex justify-center"
                    >
                      <div className="border-4 border-black bg-white p-2 flex items-center justify-center w-full shadow-sm">
                        <div className="bg-zinc-50 border-2 border-black p-3 sm:p-5 w-full flex justify-center items-center aspect-16/10 sm:aspect-video overflow-hidden">
                          <img
                            src={img}
                            alt="Preview"
                            className="w-full h-full max-w-full sm:max-w-max object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 sm:gap-8">
                <div>
                  <h4 className="font-brutal text-lg sm:text-xl font-black uppercase mb-2 sm:mb-3 border-b-4 border-black pb-1">
                    Project Overview
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
                    {selectedProject.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="font-brutal text-lg sm:text-xl font-black uppercase mb-2 sm:mb-3 border-b-4 border-black pb-1">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="bg-white border-2 border-black w-10 h-10 sm:w-13 sm:h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        title={tag.name}
                      >
                        <span className="text-xl sm:text-2xl">{tag.icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
