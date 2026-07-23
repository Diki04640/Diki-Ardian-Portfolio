import { useEffect, useState } from "react";
import { IoClose, IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import {
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
  HiOutlineCog,
  HiOutlineCheckCircle,
  HiOutlineCode,
} from "react-icons/hi";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Detail = ({ project, onBack }) => {
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  const imageList =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  const slides = imageList.map((src) => ({ src }));

  const handleImageClick = (idx) => {
    setPhotoIndex(idx);
    setIsOpenLightbox(true);
  };

  return (
    /* Container luar memiliki overflow-y-auto agar aman di semua ukuran layar */
    <div className="fixed inset-0 z-[999] bg-black/75 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto hide-scrollbar">
      
      {/* Modal Card dengan max-height dan overflow tersendiri */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white border-4 border-black p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(255,192,203,1)] overflow-y-auto hide-scrollbar my-auto">
        <button
          onClick={onBack}
          className="absolute top-4 right-4 bg-pink-600 text-white border-3 border-black p-2 font-brutal shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black transition-all cursor-pointer z-20"
        >
          <IoClose size={24} />
        </button>

        <div className="border-b-4 border-black pb-6 mb-6 pr-12">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`bg-amber-300 text-black font-brutal font-black text-[10px] sm:text-xs px-2.5 py-1 border-2 border-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block ${
                project.badgeColor || ""
              }`}
            >
              {project.badge || project.category || "Project"}
            </span>
            {project.subtitle && (
              <span className="text-xs font-black uppercase text-pink-600 tracking-wider">
                {project.subtitle}
              </span>
            )}
          </div>
          <h2 className="font-brutal text-2xl sm:text-4xl font-black uppercase text-black">
            {project.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#f4f4f0] border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-brutal text-sm font-black uppercase mb-1 text-black border-b-2 border-black pb-1 flex items-center gap-1.5">
              <HiOutlineDocumentText className="text-lg" /> Ringkasan
            </h3>
            <p className="font-sans text-xs text-zinc-700 font-bold leading-relaxed whitespace-pre-line">
              {project.overview || project.shortDesc}
            </p>
          </div>

          {project.challenge && (
            <div className="bg-red-50 border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-brutal text-sm font-black uppercase mb-1 text-black border-b-2 border-black pb-1 flex items-center gap-1.5">
                <HiOutlineExclamationCircle className="text-lg text-red-600" /> Tantangan
              </h3>
              <p className="font-sans text-xs text-zinc-700 font-bold leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {project.process && (
            <div className="bg-amber-50 border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-brutal text-sm font-black uppercase mb-1 text-black border-b-2 border-black pb-1 flex items-center gap-1.5">
                <HiOutlineCog className="text-lg text-amber-600" /> Solusi
              </h3>
              <p className="font-sans text-xs text-zinc-700 font-bold leading-relaxed">
                {project.process}
              </p>
            </div>
          )}

          {project.outcome && (
            <div className="bg-emerald-50 border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-brutal text-sm font-black uppercase mb-1 text-black border-b-2 border-black pb-1 flex items-center gap-1.5">
                <HiOutlineCheckCircle className="text-lg text-emerald-600" /> Hasil
              </h3>
              <p className="font-sans text-xs text-zinc-700 font-bold leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="font-brutal text-sm font-black uppercase text-black mb-3 flex items-center gap-1.5">
            <HiOutlineCode className="text-lg" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tag, index) => (
                <div
                  key={index}
                  title={tag.name}
                  className="bg-white border-2 border-black w-10 h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0"
                >
                  <div className="text-2xl flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {tag.icon}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {imageList.length > 0 && (
          <div className="border-t-3 border-black pt-6 mb-8">
            <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory custom-brutal-scrollbar">
              {imageList.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  className="snap-center shrink-0 w-[280px] sm:w-[360px] cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-auto object-contain border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 border-t-3 border-black pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-800 text-white border-3 border-black px-4 py-2 font-brutal font-black uppercase text-xs flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black transition-all"
            >
              <FaGithub size={16} /> Repository
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-300 text-black border-3 border-black px-4 py-2 font-brutal font-black uppercase text-xs flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-600 hover:text-white transition-all"
            >
              <IoGlobeOutline size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>

      <Lightbox
        open={isOpenLightbox}
        close={() => setIsOpenLightbox(false)}
        index={photoIndex}
        slides={slides}
      />
    </div>
  );
};

export default Detail;