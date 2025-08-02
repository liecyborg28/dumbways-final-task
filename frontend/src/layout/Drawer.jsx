import React from "react";

const Drawer = React.forwardRef(({ onClose }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-blue-950 shadow-lg transform transition-transform duration-300 translate-x-full z-50">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-500 text-2xl">
          ✕
        </button>
      </div>
      <ul className="flex flex-col gap-6 px-6 text-gray-600 font-medium">
        <li>
          <a onClick={onClose} href="#stack">
            Tech Stack
          </a>
        </li>
        <li>
          <a onClick={onClose} href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a onClick={onClose} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={onClose}
            href="/cv.pdf"
            className="bg-black text-white py-2 px-4 rounded-full w-full">
            Download CV
          </a>
        </li>
      </ul>
    </div>
  );
});

export default Drawer;
