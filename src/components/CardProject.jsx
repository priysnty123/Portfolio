import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../assets/projects.json";
import { ArrowRight, Globe } from "lucide-react";
import ProjectCardModal from "./Modal"; // Import the modal component
import { GitHub } from "@mui/icons-material";

const CardProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const showWebIcon = (appStore, playStore) => !appStore && !playStore;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const {
          id,
          image,
          title,
          description,
          github,
          demo,
          appStore,
          playStore,
        } = project;

        return (
          <div
            key={id}
            className="group relative w-full h-full"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 min-h-[400px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              <div className="relative p-5 z-10 flex flex-col flex-grow">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <div className="mt-4 space-y-3 flex-grow">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    {title}
                  </h3>
                </div>

                {/* Store/Web Links */}
                {/* Store/Web Links + Modal Trigger in one row */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex space-x-4">
                    {appStore && (
                      <a
                        href={appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        <img src="app-store.svg" alt="App Store" className="w-6 h-6" />
                      </a>
                    )}

                    {playStore && (
                      <a
                        href={playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition"
                      >
                        <img src="play-store.svg" alt="Play Store" className="w-6 h-6" />
                      </a>
                    )}

                    {showWebIcon(appStore, playStore) && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition"
                      >
                        <GitHub className="w-6 h-6" />
                      </a>
                    )}
                  </div>

                  {/* Modal Trigger aligned right */}
                  <ProjectCardModal
                    title={title}
                    description={description}
                    link={demo}
                  />
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProject;