import React from 'react';

import {env} from "@/lib/constants";
import {generateSeoMeta} from "@/lib/seo";

import EducationSection from '@/components/about/EducationSection';
import SiteSection from '@/components/about/SiteSection';
import SkillSection from '@/components/about/SkillSection';
import WorkSection from "@/components/about/WorkSection";
import AnimationHero from '@/components/home/AnimationHero';
import PageTransition from '@/components/PageTransition';

export async function generateMetadata() {
    const postUrl = new URL(env.url.website + '/about');
    // @ts-ignore
    return {
        ...generateSeoMeta({
            title: "Dika Mahendra",
            description: "Lives in 0s and 1s with ♪ in between",
            alternates: { canonical: postUrl.toString() },
            openGraph: {
                title: "Dika Mahendra",
                description: "Lives in 0s and 1s with ♪ in between",
                url: postUrl,
                type: 'article',
                authors: ['Dika Mahendra'],
                tags: ['about'],
                siteName: 'Dika Mahendra',
                images: [
                    {
                        url: "https://images.ctfassets.net/nkv8ctcqvvb5/2glfSVWIce4tP00YSHlGsz/bf9a83120482501a33a0115ebf83a068/avatar.jpg",
                        width: 1200,
                        height: 630,
                        alt: "Dika Mahendra",
                    },
                ],
            },
        }),
    };
}

export default function About() {
    return (
        <PageTransition>
            <div className='flex flex-col min-h-full justify-between gap-8'>
                <AnimationHero
                    img="https://images.ctfassets.net/nkv8ctcqvvb5/2glfSVWIce4tP00YSHlGsz/bf9a83120482501a33a0115ebf83a068/avatar.jpg"
                    title='Dika Mahendra'
                    description={(
                        <p className="text-justify">
                            With over three years of experience as a fullstack engineer, I have built a strong foundation in software development. My journey began at a vocational high school where I majored in Software Engineering, and I am currently pursuing a Bachelor's degree in Communication Science. This combination of technical skills and communication knowledge helps me create projects that connect well with people.
                        </p>)}
                />
                <EducationSection/>
                <WorkSection/>
                <SkillSection/>
                <SiteSection/>
            </div>
        </PageTransition>
    );
}
