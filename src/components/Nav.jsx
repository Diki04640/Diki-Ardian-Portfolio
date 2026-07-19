import { useState, useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Nav = () => {
  const [showContact, setShowContact] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const formRef = useRef();

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_25rki5o",
        "9ueaio9",
        formRef.current,
        "BWsTQCVAf95onVbiu",
      )
      .then(
        () => {
          setToast({
            show: true,
            message: "Mantap! Pesan kamu berhasil dikirim. ✦",
            type: "success",
          });
          formRef.current.reset();
          setShowContact(false);
        },
        (error) => {
          setToast({
            show: true,
            message: "Waduh gagal kirim: " + error.text,
            type: "error",
          });
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:py-10 md:px-12 max-w-7xl mx-auto w-full pointer-events-none">
      <nav className="flex items-center justify-between w-full pointer-events-auto">
        <a
          href="#home"
          className="font-brutal text-xl md:text-2xl font-black tracking-wide bg-white border-4 border-black rounded-xl px-4 h-12 flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          DA
        </a>

        <button
          onClick={() => setShowContact(true)}
          className="bg-pink-600 text-white border-4 border-black h-12 px-6 rounded-xl font-brutal font-black uppercase flex items-center justify-center transition-all hover:bg-pink-700 hover:text-white hover:-translate-y-1 active:translate-y-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
        >
          Let's Talk!
        </button>

        {toast.show && (
          <div
            className={`fixed bottom-5 right-5 z-200 pointer-events-auto max-w-sm border-4 border-black p-4 font-brutal font-black uppercase text-xs shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-bottom-5 duration-300 flex items-center justify-between gap-4 ${
              toast.type === "success"
                ? "bg-emerald-400 text-black"
                : "bg-red-400 text-black"
            }`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => setToast({ ...toast, show: false })}
              className="bg-white border-2 border-black p-0.5 hover:bg-black hover:text-white transition-colors"
            >
              <IoCloseSharp size={16} />
            </button>
          </div>
        )}

        {showContact && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={() => setShowContact(false)}
          >
            <div
              className="bg-[#f4f4f0] border-4 border-black w-full max-w-md relative p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-300 max-h-[95vh] overflow-y-auto scrollbar-none"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-3 right-3 bg-white text-black border-4 border-black p-1.5 rounded-full hover:bg-pink-600 hover:text-white hover:rotate-90 transition-all duration-300 z-20 cursor-pointer"
              >
                <IoCloseSharp size={22} />
              </button>

              <h3 className="font-brutal text-2xl sm:text-3xl font-black uppercase mb-4 text-black border-b-4 border-black pb-2">
                Let's Connect!
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSendEmail}
                className="flex flex-col gap-3 mb-6"
              >
                <div>
                  <label className="text-[10px] font-black text-zinc-500 block mb-1">
                    Nama Anda:
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    autoComplete="new-password"
                    placeholder="Jhon Doe"
                    className="w-full bg-white border-2 border-black p-2 font-bold text-xs focus:bg-amber-100 outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black text-zinc-500 block mb-1">
                    Email Anda:
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    autoComplete="one-time-code"
                    placeholder="jhondoe@example.com"
                    className="w-full bg-white border-2 border-black p-2 font-bold text-xs focus:bg-amber-100 outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black text-zinc-500 block mb-1">
                    Pesan Anda:
                  </label>
                  <textarea
                    name="message"
                    required
                    autoComplete="off"
                    rows="4"
                    placeholder="Halo..."
                    className="w-full bg-white border-2 border-black p-2 font-bold text-xs focus:bg-amber-100 outline-none resize-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full mt-2 bg-amber-300 text-black py-2.5 border-4 border-black font-brutal font-black uppercase tracking-wider text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-600 hover:text-white hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all disabled:opacity-50 cursor-pointer text-center"
                >
                  {isSending ? "MENGIRIM..." : "✦ KIRIM PESAN ✦"}
                </button>
              </form>

              <div className="border-t-4 border-black pt-4">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-3">
                  Atau temukan saya di platform lain:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://github.com/Diki04640"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 bg-white border-4 border-black p-2 rounded-xl hover:bg-zinc-800 hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <FaGithub size={20} />
                    <span className="font-black text-[9px] uppercase">
                      Github
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/diki-ardian-9aa308421/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 bg-white border-4 border-black p-2 rounded-xl hover:bg-blue-600 hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <FaLinkedinIn size={20} />
                    <span className="font-black text-[9px] uppercase">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/dikiardyyy?igsh=ejVlOHRlNzA3Yjht"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 bg-white border-4 border-black p-2 rounded-xl hover:bg-pink-500 hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <FaInstagram size={20} />
                    <span className="font-black text-[9px] uppercase">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
