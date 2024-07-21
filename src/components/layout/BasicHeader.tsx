


export type BasicHeaderProps = {
    title: string;
    shorts?: string;
};
export default function BasicHeader({
                                        title,
                                        shorts,
                                    }: BasicHeaderProps) {
    return (
        <div className='main-box mx-auto p-0 lg:h-[82dvh] flex flex-col'>
            <div className='p-4 lg:block flex-1'>
                <div className="w-full h-full flex flex-col justify-between">
                    <div>
                        <h1 className='text-content text-wrap lg:break-all line-clamp-none py-2 text-6xl lg:text-9xl font-bold drop-shadow-lg'>
                            {title}
                        </h1>
                        <p className='mt-2 line-clamp-3 text-xl lg:text-3xl text-gray-700 dark:text-gray-300 drop-shadow-lg '>
                            {shorts}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
