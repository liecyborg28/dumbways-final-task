import { useState } from "react";

function Link({ section }) {
  return (
    <a
      href={`${section.url}`}
      className="m-2 text-slate-500 hover:text-slate-900">
      {section.name}
    </a>
  );
}

function Navbar() {
  const [mode, setMode] = useState("light_mode");
  const sections = [
    {
      name: "Tech Stack",
      url: "#stack",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Projects",
      url: "#projects",
    },
  ];

  function handleMode() {
    if (mode === "light_mode") {
      setMode("dark_mode");
    } else {
      setMode("light_mode");
    }
  }

  return (
    <div className="flex justify-between items-center max-w-7xl w-full h-18 fixed bg-white z-50">
      <img
        src="/logo.png"
        alt="logo"
        className="w-8 ml-6 transition duration-200 ease-in-out hover:scale-120 cursor-pointer"
      />
      <div className="flex items-center mr-6">
        {sections.map((e, i) => (
          <Link key={i} section={e} />
        ))}
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=6285250621375&text&type=phone_number&app_absent=0"
          className="flex justify-center items-center min-w-min bg-green-500 rounded-lg m-4 py-2 px-4 font-semibold transition duration-200 ease-in-out hover:bg-green-700">
          <img
            className="w-4 mr-2"
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="whatsapp_button"
          />
          <span className="">Let's Talk</span>
        </a>
        <a
          target="_blank"
          href="/cv.pdf"
          className="flex justify-center items-center min-w-min bg-gray-950 rounded-lg my-4 mr-4 py-2 px-4 font-semibold transition duration-200 ease-in-out hover:bg-gray-800">
          <img
            className="w-4 mr-2"
            src="https://img.icons8.com/?size=100&id=9bP5A8pZYGgr&format=png&color=FFFFFF"
            alt="download_cv_button"
          />
          <span className="">Download CV</span>
        </a>
        <button className="cursor-pointer py-2 px-4" onClick={handleMode}>
          <span className="material-symbols-outlined text-slate-500 hover:text-slate-900">
            {mode}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
