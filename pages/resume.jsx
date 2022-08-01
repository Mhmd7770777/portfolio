import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Mohammad | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/Mhd-removebg-preview.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Mohammad Hijazi</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/mohammad-hijazi-918888235/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Mhmd7770777"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>Frontend Developer </p>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">:</span> HTML <span className="px-2">|</span>
            CSS/Sass
            <span className="px-2">|</span>Tailwind{" "}
            <span className="px-2">|</span>React
            <span className="px-2">|</span> Nextjs
            <span className="px-2">|</span> Jest
            <span className="px-2">|</span> Typescript
            <span className="px-2">|</span> styled components
            <span className="px-2">|</span> git
            <span className="px-2">|</span> SQL
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Waiting for Joshua</span>
          </p>
          <p className="py-1 italic">Freelance Work (2022 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created mobile responsive and scalable components in Nextjs and
              Typescript
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Created pixel perfect components based on figma design provided by
              the clients.
            </li>
          </ul>
        </div>
        {/* Project */}
        <h5 className="text-center underline text-[18px] py-4">
          Personal Projects
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Responsive Dashboard</span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created fully functional and mobile responsive dashboard with
              different kinds of charts and tables using React JS.
            </li>
            <li>
              Implemented 4 different apps (calendar, kanban, color-picker, text
              editor) with multiple different functionalities such as drag and
              drop.
            </li>
            <li>
              Implemented 3 tables with pagination, filter, sort, search, and
              ability to edit.
            </li>
            <li>
              Created different kinds of chart component (line, pie, pyramid...)
            </li>
          </ul>
        </div>
        {/* Project */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Tiktok clone</span>
          </p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created a fully functional and mobile responsive components in
              Next js and Typescript.
            </li>
            <li>Set up Google OAuth for users login.</li>
            <li>Added the ability to upload, like, and comment on videos</li>
            <li>Connected my app to sanity cms as a backend.</li>
            <li>
              Implemented the search function for both accounts and videos.
            </li>
            <li>Added the ability to filter the videos based on topics.</li>
          </ul>
        </div>
        {/* Project */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Mhd Headphones</span>
          </p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created a fully functional and mobile responsive e-commerce
              website in Nextjs.
            </li>
            <li>Connected my app to sanity cms as a backend.</li>
            <li>Connected stripe to handle payments and shipping.</li>
            <li>
              Created the cart component in wich you can add to, remove from,
              and modify the content of.
            </li>
          </ul>
        </div>

        {/* Project */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Space tourism</span>
          </p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created a fully functional and mobile responsive website using
              plain Html, CSS, and javascript.
            </li>
            <li>Created pixel-perfect website based on a figma design.</li>
            <li>
              Created functional tabs to browse through different sections.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
