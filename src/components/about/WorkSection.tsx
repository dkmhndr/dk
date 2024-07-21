import React from 'react';


export default async function WorkSection() {
    const works = [
        {
            key: 'jala',
            img: 'https://images.ctfassets.net/nkv8ctcqvvb5/4s8jGc6D50xLjE82mIo3zi/de2f84e6d36aaa7c6b2b2fe3259d5521/Logo-Jala-Tech.png',
            title: 'JALA Tech',
            date: '2023 - Present',
            position: 'Fullstack Engineer',
            desc: (
                <p className="min-h-80 normal-case text-justify">
                    An end-to-end Solution to increase productivity and efficiency of shrimp farms.
                    <br/><br/>
                    In JALA Tech, I'm responsible for developing and maintaining JALA Web Application, such as:
                    <ul className="pl-1 list-disc list-inside">
                        <li>Optimizes Existing Features</li>
                        <li>Implement and Deliver New Features and Improvements</li>
                        <li>Handle Incident and Bug Fixing</li>
                    </ul>
                </p>
            )
        },
        {
            key: 'ibn',
            img: 'https://images.ctfassets.net/nkv8ctcqvvb5/5XJ1ZRvX59RR0lEz1BNQB1/7f5baff78c49210edc51c79f220bb42b/logo-ibn.png',
            title: 'Inovasi Bakti Nusantara',
            date: '2020 - 2023',
            position: 'Fullstack Engineer',
            desc: (
                <p className="min-h-80 normal-case">
                    <span className="text-justify">An IT software consultant and PPOB solution provider company.<br/><br/>
                    In 3 years, I've contributed to various awesome projects such as:</span>
                    <ul className="pl-1 list-disc list-inside">
                        <li>Point of Sale Application for Tanjidor.id</li>
                        <li>Voucher Game Management System for OtomaX</li>
                        <li>Telegram Customer Service Bots and Auto Deposit Engine</li>
                        <li>H2H PPOB Marketplace</li>
                        <li>Golf Course Booking for Jababeka Golf and Country Club</li>
                    </ul>
                </p>
            )
        }
    ]
    return (
        <div
            className="flex main-box w-full flex-col lg:flex-row justify-center items-center gap-8 bg-dotted-spacing-5 bg-dotted-gray-500 p-8"
        >
            <div className='h-full py-auto w-full basis-1/5 align-middle uppercase'>
                <div className="h-full break-words">
                    <h1 className="text-4xl lg:text-6xl text-start font-black">
                        <span className='mx-2 md:mx-0 md:text-8xl'>👨‍💻</span>
                        Work
                    </h1>
                </div>
            </div>
            {works.map((work) => (
                <div className='main-box min-h-full w-full align-middle uppercase bg-base flex flex-col justify-between p-4 gap-4' key={work.key}>
                    <div className="flex items-center justify-start gap-2">
                        <div className="flex min-h-24 justify-center items-center overflow-hidden rounded-t-xl">
                            <img
                                className="w-24"
                                src={work.img}
                                alt='img'
                            />
                        </div>
                        <h1 className="text-2xl text-start font-bold">
                            {work.title}
                        </h1>
                    </div>
                    <div className="flex flex-col h-full justify-evenly gap-2 border-t-2 border-dotted border-gray-500 pt-2">
                        <p className="md:text-md line-clamp-1 text-start text-md font-semibold">
                            {work.date}
                        </p>
                        <p className="md:text-md line-clamp-1 text-start text-sm italic">
                            {work.position}
                        </p>
                    </div>
                    <div>
                        {work.desc}
                    </div>
                </div>
            ))}
        </div>
    );
}
