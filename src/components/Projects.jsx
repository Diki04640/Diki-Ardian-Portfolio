import { useState } from "react";
import Detail from "./Detail";
import { FaBootstrap, FaPhp, FaJava } from "react-icons/fa";
import { DiHtml5, DiCss3, DiJavascript1, DiNodejs } from "react-icons/di";
import {
  SiCodeigniter,
  SiMysql,
  SiSocketdotio,
  SiLeaflet,
  SiExpress,
  SiArduino,
} from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      overview:
        "SIBARA (Sistem Informasi Barang Bukti) adalah platform manajemen berbasis web yang dibangun untuk digitalisasi dan penataan pendataan barang bukti secara terstruktur dan transparan.",
      challenge:
        "Pengelolaan barang bukti sebelumnya masih menggunakan pencatatan manual yang rentan terhadap risiko kesalahan input (human error), redundansi data, serta lambatnya proses pencarian dokumen barang bukti saat dibutuhkan secara mendadak.",
      process:
        "Merancang arsitektur database relasional dengan MySQL yang aman dan menggunakan framework CodeIgniter untuk mempercepat alur CRUD. Antarmuka dibuat intuitif menggunakan Bootstrap agar staf dapat mengoperasikan sistem tanpa perlu pelatihan rumit.",
      outcome:
        "Sistem berhasil memotong waktu pencarian data barang bukti hingga 80%, meningkatkan akurasi validasi stok, serta menyediakan laporan riwayat barang yang otomatis dan siap dicetak kapan saja.",
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
      overview:
        "Solusi pemantauan kapasitas tempat sampah berbasis IoT yang memungkinkan petugas kebersihan memantau status kepenuhan tempat sampah di berbagai lokasi secara real-time.",
      challenge:
        "Penumpukan sampah yang tidak terprediksi sering membuat lingkungan kurang higienis, serta rute pengangkutan sampah petugas yang tidak efisien karena harus mengecek tempat sampah satu per satu secara manual.",
      process:
        "Mengintegrasikan mikrokontroler ESP8266 dengan sensor ultrasonik HC-SR04 untuk mengukur ketinggian sampah. Data dikirimkan secara langsung (real-time) via WebSocket ke server Node.js dan ditampilkan pada dashboard peta interaktif Leaflet.js.",
      outcome:
        "Memungkinkan pemantauan kondisi tempat sampah secara presisi (real-time), serta membantu optimalisasi rute pengambilan sampah sehingga menghemat waktu dan tenaga petugas.",
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
        "/images/dashboardSPAREPART.png",
        "/images/SPAREPART.png",
        "/images/bmSPAREPART.png",
        "/images/bkSPAREPART.png",
        "/images/RBM.png",
        "/images/RBK.png",
      ],
      shortDesc:
        "Aplikasi desktop untuk manajemen inventaris sparepart dengan UI modern.",
      overview:
        "Aplikasi inventaris berbasis desktop yang dirancang khusus untuk mempermudah pencatatan keluar-masuk barang dan stok sparepart pada bengkel/gudang secara luring (offline-first).",
      challenge:
        "Tampilan bawaan (GUI) Java Swing yang terkesan kaku dan kusam kerap membuat user experience (UX) tergolong kurang nyaman bagi staf operasional gudang.",
      process:
        "Mengombinasikan Java Swing dengan pustaka Look and Feel FlatLaf untuk menghadirkan antarmuka bertema modern dark/light mode. Sistem terhubung langsung ke database MySQL untuk manajemen stok dan transaksi barang.",
      outcome:
        "Menghasilkan aplikasi desktop cepat, responsif, dan mudah digunakan dengan pencatatan riwayat barang masuk/keluar yang rapi serta otomatis cetak nota/laporan.",
    },
  ];

  return (
    <>
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

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 px-6 sm:px-10 pb-24 w-full">
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
                    onClick={() => {
                      setSelectedProject(project);
                    }}
                    className="w-full bg-amber-300 text-black py-2.5 border-4 border-black font-brutal font-black uppercase tracking-wider text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
                  >
                    ✦ Read the case study ✦
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
      </section>

      {/* Render modal detail secara langsung di atas halaman */}
      {selectedProject && (
        <Detail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;