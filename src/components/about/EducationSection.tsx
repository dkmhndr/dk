import Image from "next/image";
import React from 'react';


export default async function EducationSection() {
    const educations = [
        {
            key: 'smk',
            img: 'https://images.ctfassets.net/nkv8ctcqvvb5/7J2Dq0QxTySEOI7kpzfO78/a32db586ad60239e7f9ffc11522d4d4e/SMKN2.png',
            title: 'SMK Negeri 2 Karanganyar',
            date: '2017 - 2020',
            desc: 'Software Engineering'
        },
        {
            key: 'umby',
            img: 'https://images.ctfassets.net/nkv8ctcqvvb5/5y9Zv40bzV5Uvh2m8WyMYS/250782b7f19e2e0ea54e51af21738010/Mercu_Buana_Logo.png',
            title: 'Mercu Buana Yogyakarta University',
            date: '2022 - Present',
            desc: 'Bachelor of Communication Science'
        }
    ]
  return (
      <div
          className="flex main-box w-full flex-col lg:flex-row-reverse justify-center items-center gap-8 bg-dotted-spacing-5 bg-dotted-gray-500 p-8"
      >
          <div className='h-full py-auto w-full basis-1/5 align-middle uppercase'>
              <div className="h-full break-words">
                  <h1 className="text-4xl lg:text-6xl text-right font-black">
                      <span className='mx-2 md:mx-0 md:text-8xl'>📚</span>
                        Education
                  </h1>
              </div>
          </div>
              {educations.map((education) => (
                  <div className='main-box min-h-full w-full align-middle uppercase bg-base flex flex-col justify-between p-4 gap-4' key={education.key}>
                      <div className="flex items-center justify-end gap-2">
                          <div className="relative overflow-hidden rounded-t-xl">
                              <Image
                                  className="h-full w-full"
                                  src={education.img}
                                  alt='img'
                                  height={96}
                                  width={96}
                              />
                          </div>
                          <h1 className="text-2xl text-start font-bold">
                              {education.title}
                          </h1>
                      </div>
                      <div className="flex flex-col h-full justify-evenly gap-2 border-t-2 border-dotted border-gray-500 pt-2">
                          <p className="md:text-md line-clamp-1 text-end text-md font-semibold">
                              {education.date}
                          </p>
                          <p className="md:text-md line-clamp-1 text-end text-sm italic">
                              {education.desc}
                          </p>
                      </div>
                  </div>
              ))}
      </div>
  );
}
