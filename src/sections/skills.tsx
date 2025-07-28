import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import postgresIcon from "@/assets/icons/postgres.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import lightroomIcon from "@/assets/icons/lightroom.png";
import cppIcon from "@/assets/icons/c++.png";
import psIcon from "@/assets/icons/photoshop.png";
import premiereIcon from "@/assets/icons/premiere.png";
import sqlIcon from "@/assets/icons/sql.png"
import bootstrapIcon from "@/assets/icons/bootstrap.png"
import rIcon from "@/assets/icons/ricon.png"
import snowflakeIcon from "@/assets/icons/snowflake.png"
import linuxIcon from "@/assets/icons/linux.png"
export default function skills() {
  const data = [
    {
      title: "Languages",
      skills: [
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "C++",
          icon: cppIcon,
        },
        {
          name: "SQL",
          icon: sqlIcon,
        },
        {
          name: "R",
          icon: rIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Snowflake",
          icon: snowflakeIcon,
        },
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },
        {
          name: "Bootstrap",
          icon: bootstrapIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "Linux",
          icon: linuxIcon,
        },
      ],
    },
    {
      title: "Visual",
      skills: [
        {
          name: "Lightroom",
          icon: lightroomIcon,
        },
        {
          name: "Photoshop",
          icon: psIcon,
        },
        {
          name: "Premiere",
          icon: premiereIcon,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
