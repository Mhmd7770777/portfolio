import Image from "next/image";
import React from "react";
import DashboardImg from "../public/assets/projects/projectImages/dashboard-img/main.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DashboardImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Dashboard App</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            I built this app to demonstrate knowledge working in React JS to
            build an extensive dashboard that display different types of charts
            that get inputs from dummy data. This app was styled using Tailwind
            and is hosted on Netlify. It supports theme changing between
            different colors in addition to dark and light modes.
          </p>
          <p className="mt-2">
            It also contains 3 different tables that offer pagination, search,
            and filtering, and 4 apps with differnt functionalities
            (color-picker,calendar, kanban, and an editor)
          </p>
          <a
            href="https://github.com/Mhmd7770777/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://dashboard-mhd.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Syncfusion
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Routes
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
