import Image from "next/image";
import Link from "next/link";
import React from "react";
import EcommerceImg from "../public/assets/projects/projectImages/ecommerce-img/main.png";
import ProjectItem from "./ProjectItem";
import DashboardImg from "../public/assets/projects/projectImages/dashboard-img/main.png";
import SpaceImg from "../public/assets/projects/projectImages/space-exp-img/home/main.png";
import TiktikImg from "../public/assets/projects/projectImages/tiktik-img/main.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mhd Headphones"
            backgroundImg={EcommerceImg}
            projectUrl="/ecommerce"
            tech="React JS"
          />
          <ProjectItem
            title="Responsive Dashboard"
            backgroundImg={DashboardImg}
            projectUrl="/dashboard"
            tech="React JS"
          />
          <ProjectItem
            title="Tiktok clone"
            backgroundImg={TiktikImg}
            projectUrl="/tiktik"
            tech="Next JS"
          />
          <ProjectItem
            title="Space Tourism"
            backgroundImg={SpaceImg}
            projectUrl="/space"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
