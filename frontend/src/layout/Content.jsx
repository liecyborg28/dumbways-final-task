import { useEffect, useState } from "react";
import Footer from "./Footer";

function Greeting() {
  return (
    <div className="flex pt-40 sm:flex-col sm:items-center lg:flex-row lg:justify-between lg:items-center">
      <div className="w-2/5">
        <img
          src="/avatar.png"
          alt="avatar"
          className="sm:w-60 lg:w-80 rounded-xl m-8 ml-14 shadow-xl shadow-slate-600 transition ease-in-out duration-500 hover:scale-105"
        />
      </div>
      <div className="sm:1/1 lg:w-3/5 lg:flex-col mr-8 sm:items-center lg:items-start">
        <div className="flex sm:justify-center lg:justify-normal sm:pt-8 lg:pt-0 lg:items-center">
          <h1 className="text-gray-900 font-bold text-6xl">Hi, I'm Nando</h1>
          <img
            className="w-14 ml-4"
            src="https://img.icons8.com/?size=100&id=17672&format=png&color=000000"
            alt="waving_hand_emoji"
          />
        </div>

        <div className="text-2xl text-slate-600 font-semibold my-4 sm:text-center lg:text-left">
          Full-Stack Developer
        </div>
        <p className="text-xl text-slate-600 sm:text-center sm:mx-14 lg:mx-0 lg:text-left">
          I am a passionate and results-oriented Fullstack Developer with two
          years of hands-on experience in building full-stack web applications
          using the MEAN and MERN stacks. With an academic background in
          Information Systems, I bring a strong understanding of both technology
          and business needs, enabling me to develop solutions that are not only
          technically robust but also strategically aligned with user and
          organizational goals.
        </p>
        <div className="flex pt-8 sm:justify-center lg:justify-normal">
          <span className="material-symbols-outlined text-slate-500">
            location_on
          </span>
          <span className="text-slate-500 ml-2">
            Pontianak, Kalimantan Barat, Indonesia
          </span>
        </div>
        <div className="flex items-center pt-2 sm:justify-center lg:justify-normal">
          <div className="rounded-full w-2 h-2 bg-green-500"></div>
          <span className="text-slate-500 ml-2">
            Available for new projects
          </span>
        </div>
        <div className="flex mt-4 sm:justify-center lg:justify-normal">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=6285250621375&text&type=phone_number&app_absent=0"
            className="flex justify-center items-center min-w-min bg-green-500 rounded-lg m-4 ml-0 py-3 px-8 font-semibold transition duration-200 ease-in-out hover:bg-green-700">
            <img
              className="w-6 mr-2"
              src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
              alt="whatsapp_button"
            />
            <span className="text-lg">Let's Talk</span>
          </a>
          <a
            target="_blank"
            href="/cv.pdf"
            className="flex justify-center items-center min-w-min bg-gray-950 rounded-lg my-4 mr-4 py-3 px-8 font-semibold transition duration-200 ease-in-out hover:bg-gray-800">
            <img
              className="w-6 mr-2"
              src="https://img.icons8.com/?size=100&id=9bP5A8pZYGgr&format=png&color=FFFFFF"
              alt="download_cv_button"
            />
            <span className="text-lg">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function TechStack() {
  const techStacks = [
    {
      name: "HTML5",
      url: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "CSS3",
      url: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    },
    {
      name: "JavaScript",
      url: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    },
    {
      name: "Typescript",
      url: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    },
    {
      name: "Angular",
      url: "https://img.icons8.com/?size=100&id=l9a5tcSnBwcf&format=png&color=000000",
    },
    {
      name: "React",
      url: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    },
    {
      name: "MongoDB",
      url: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    },
    {
      name: "PostgreSQL",
      url: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
    },
  ];

  return (
    <div id="stack">
      <h1 className="text-gray-900 font-bold text-3xl ml-12 pt-20">
        Tech Stack - Tools I Use Everyday
      </h1>
      <marquee direction="right" className="pt-14 mx-14">
        <div className="flex">
          {techStacks.map((e, i) => (
            <div key={i} className="flex-col items-center justify-center">
              <div className="flex animate-marquee-right rounded-2xl w-20 h-20 shadow-md shadow-slate-200 bg-white mx-8 hover:shadow-slate-300 justify-center items-center min-w-min">
                <img className="w-12 h-12" src={e.url} alt={e.name} />
              </div>
              <div className="w-full text-slate-600 text-center pt-1">
                {e.name}
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
}

function WorkExperiences() {
  const experiences = [
    {
      name: "Kukerja",
      start: "Juli 2022",
      end: "Juni 2024",
      as: "Front-End Developer",
      url: "/experiences/kukerja.png",
      jobs: [
        "Conducted user needs analysis during application design using Figma.",
        "Created and ensured user-friendly application interfaces.",
        "Developed web-based application interfaces using Angular.",
        "Performed testing, debugging, and maintenance of web applications.",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Figma", "Angular"],
    },
  ];

  return (
    <div id="experience">
      <h1 className="text-gray-900 font-bold text-3xl ml-12 pt-24">
        Work Experiences:
      </h1>
      <div className="pt-14">
        {experiences.map((e, i) => (
          <div
            key={i}
            className="flex rounded-2xl min-h-min shadow shadow-slate-200 bg-white hover:shadow-slate-300 min-w-min mx-14 mb-10 p-4">
            <div className="flex w-full">
              <img className="w-18 max-h-max mr-8" src={e.url} alt={e.name} />
              <div className="flex-col w-full">
                <div className="flex lg:flex-row sm:flex-col justify-between w-full">
                  <div className="flex-col">
                    <div className="font-bold text-xl text-gray-900">
                      {e.as}
                    </div>
                    <div className="text-md text-green-600">{e.name}</div>
                  </div>
                  <div className="text-slate-500">{`${e.start} - ${e.end}`}</div>
                </div>
                <ul className="pl-4 pt-4 list-disc">
                  {e.jobs.map((el, j) => (
                    <li key={j} className="text-slate-600">
                      {el}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 flex flex-wrap">
                  {e.skills.map((el, j) => (
                    <div
                      key={j}
                      className="rounded-4xl py-0 px-4 mr-2 bg-gray-100 text-slate-500 text-md">
                      {el}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MyProjects() {
  const defaultProjects = [
    {
      project_name: "General POS",
      description:
        "General POS is a scalable Point of Sale system built with the MEAN Stack, designed to support modern business operations...",
      techs: "Angular,TypeScript,HTML5,CSS3",
      github_url: "",
      live_demo_url: "http://general-pos-fe.vercel.app",
      image_url:
        "https://plus.unsplash.com/premium_photo-1753071355370-e8025111987f?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setProjects(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div id="projects">
      <h1 className="text-gray-900 font-bold text-3xl ml-12 pt-20">
        My Projects:
      </h1>
      <div className="flex flex-wrap justify-between mt-14 mx-14">
        {[...defaultProjects, ...projects].map((e, i) => (
          <div
            key={i}
            className="flex-col sm:w-full shadow lg:w-24/50 min-h-min rounded-2xl min-w-min mb-10 hover:shadow-slate-300">
            <div className="w-full bg-gray-100 rounded-t-2xl flex justify-center">
              <img
                src={e.image_url || e.image}
                alt={e.project_name || e.name}
                className="h-50"
              />
            </div>
            <div className="flex-col p-6">
              <span className="font-bold text-2xl text-gray-900">
                {e.project_name || e.name}
              </span>
              <p className="mt-4 text-md text-gray-600">
                {e.description || e.desc}
              </p>
              <div className="pt-4 flex flex-wrap">
                {(e.techs || "").split(",").map((el, j) => (
                  <div
                    key={j}
                    className="rounded-4xl py-0 px-4 mr-2 mb-2 bg-gray-100 text-slate-500 text-md mt-1">
                    {el}
                  </div>
                ))}
              </div>
              <div className="flex pt-6 gap-6">
                <a
                  href={e.github_url || e.github || "#"}
                  className={
                    (e.github_url || e.github
                      ? "text-blue-700"
                      : "text-slate-400") + " text-sm"
                  }>
                  {e.github_url || e.github
                    ? "View on Github"
                    : "Private Repository"}
                </a>
                <a
                  href={e.live_demo_url || e.url || "#"}
                  className={
                    (e.live_demo_url || e.url
                      ? "text-blue-700"
                      : "text-slate-400") + " text-sm"
                  }>
                  {e.live_demo_url || e.url ? "Live Demo" : "Demo Unavailable"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LetsBuild() {
  return (
    <div className="py-24 flex flex-col">
      <span className="font-bold text-3xl text-center text-slate-900">
        Let's build something together
      </span>
      <span className="text-slate-600 text-center pt-2">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </span>
      <div className="text-slate-500 py-4 text-center">
        buildwithnando@gmail.com | +62 852-506-213-75
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="max-w-7xl w-full">
      <Greeting />
      <TechStack />
      <WorkExperiences />
      <MyProjects />
      <LetsBuild />
      <Footer />
    </div>
  );
}

export default Content;
