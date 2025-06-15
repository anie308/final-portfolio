import { useState } from "react";
import ibgroup from "/src/assets/images/derhex.png";
import memento from "/src/assets/images/chainfeed.png";
import acc from "/src/assets/images/safebank.png";
import daddy from "/src/assets/images/xebar.png";
import sunnyside from "/src/assets/images/zella.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

const allProjects = [
  {
    link: "https://derhex.com/",
    img: ibgroup,
    alt: "IBGroup vietnam website mockup",
    name: "Derhex",
    type: "Web Design • Frontend Development • Web3 Development",
    year: "2025",
    tools: "React • TailwindCSS • Solidity • Privy Wallets",
  },
  {
    link: "https://onchain-reddit.vercel.app/",
    img: memento,
    alt: "onchain reddit mockup",
    name: "Onchain Reddit",
    type: "Frontend Development • Web3 Development",
    year: "2025",
    tools: "React • TailwindCSS • Solidity • Privy Wallets",
  },
  {
    link: "https://safebankpro.com",
    img: acc,
    alt: "real business accountant project mockup",
    name: "SafebankPro",
    type: "FullStack Development",
    year: "2024",
    tools: "React • Nodejs",
  },

  {
    link: "https://zella.africa",
    img: sunnyside,
    alt: "sunnyside project mockup",
    name: "CRYPTO OFFRAMP",
    type: "Web and Mobile Development",
    year: "2024",
    tools: "React • Nextjs • React Native",
  },
  {
    link: "https://xebar.app",
    img: daddy,
    alt: "sunnyside project mockup",
    name: "CRYPTO OFFRAMP",
    type: "Web and Mobile Development",
    year: "2024",
    tools: "React • Nextjs • React Native",
  },
  // ➕ Add more projects here as needed
];

const PROJECTS_PER_PAGE = 4;

export default function Works({ forwardedRef }) {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * PROJECTS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);

  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-16"
    >
      <Heading title="Projects" />
      <div className="mt-6 grid grid-cols-1 gap-8 gap-y-8 md:grid-cols-2">
        {currentProjects.map((proj, index) => (
          <div
            key={index}
            // className="col-span-1 md:col-span-6 lg:col-span-4"
          >
            <Projects {...proj} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className=" p-[8px_10px] text-[18px] bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-base font-medium">{page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
