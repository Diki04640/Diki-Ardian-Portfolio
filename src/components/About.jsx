import {
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCodeigniter,
  SiMysql,
  SiArduino,
} from "react-icons/si";

const About = () => {
  const allSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter className="text-orange-600" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Java (Swing)", icon: <FaJava className="text-red-500" /> },
    { name: "Arduino / IoT", icon: <SiArduino className="text-teal-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-zinc-700" /> },
  ];

  return (
    <section
      id="about"
      className="w-full bg-amber-300 pt-20 pb-28 overflow-hidden scroll-mt-20 relative border-b-4 border-black"
    >
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center relative z-10">
        <div className="mb-16 bg-white border-4 text-center border-black px-8 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
          <h2 className="font-brutal text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            My Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 sm:gap-10 w-full justify-items-center">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
              className="animate-float group flex flex-col items-center justify-center bg-white border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 cursor-help"
              title={skill.name}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl">
                {skill.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
