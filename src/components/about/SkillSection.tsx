import React from 'react';


export default async function SkillSection() {
    const skillsets = [
        {
            title: "Languages",
            skills: [
                "PHP",
                "Java",
                "TypeScript",
                "Dart",
                "Golang"
            ]
        },
        {
            title: "Frontend",
            skills: [
                "ReactJS and NextJS",
                "VueJS and NuxtJS",
                "Flutter",
                "TailwindCSS",
                "Bootstrap"
            ]
        },
        {
            title: "Backend",
            skills: [
                "Laravel",
                "Springboot",
                "JPOS",
                "MySQL",
                "PostgreSQL",
                "SQLServer",
            ]
        },
        {
            title: "Tools",
            skills: [
                "Docker",
                "Git",
                "RabbitMQ",
                "Bash"
            ]
        }
    ]
  return (
      <div
          className="flex main-box w-full flex-col lg:flex-row-reverse justify-center items-center gap-8 bg-dotted-spacing-5 bg-dotted-gray-500 p-8"
      >
          <div className='h-full py-auto w-full basis-1/5 align-middle uppercase'>
              <div className="h-full break-words">
                  <h1 className="text-4xl lg:text-6xl text-right font-black">
                      <span className='mx-2 md:mx-0 md:text-8xl'>💻</span>
                        Skillset
                  </h1>
              </div>
          </div>
              <div className='main-box min-h-full w-full align-middle uppercase bg-base flex flex-col justify-between p-4 gap-4'>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {skillsets.map((skillset) => (
                            <div className="flex flex-col gap-4 text-start" key={skillset.title}>
                                <h1 className="text-2xl font-bold">{skillset.title}</h1>
                                <ul>
                                    {skillset.skills.map((skill) => (
                                        <li className="text-sm" key={skill}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
              </div>
      </div>
  );
}
