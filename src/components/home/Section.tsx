export type SectionProps = {
  titlePosition: string;
  title: string;
  icon: string;
  children: any;
  titleChild?: React.ReactNode;
  isScrollable?: boolean;
};

export default function Section({
  titlePosition,
  title,
  icon,
  children,
  titleChild,
  isScrollable,
}: SectionProps) {
  return (
    <div
      className={`flex min-h-96 w-full flex-col ${
        titlePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-start justify-items-center gap-8`}
    >
      <div className='main-box min-h-full w-full basis-1/5 align-middle uppercase'>
        <div
          className={`flex items-center ${
            titlePosition === 'right' ? 'justify-end' : 'justify-start'
          }`}
        >
          <h1
            className={`text-2xl md:text-6xl ${
              titlePosition === 'right' ? 'text-right' : 'text-left'
            } font-black`}
          >
            <span className='mx-2 md:mx-0 md:text-8xl'>{icon}</span>
            {title}
          </h1>
        </div>
        <div className={titleChild ? 'mt-4' : 'hidden'}>{titleChild}</div>
      </div>
      <div className='main-box max-w-full overflow-hidden p-0 md:min-h-full md:grow'>
        <div
          className={`flex h-full ${
            isScrollable ? 'overflow-x-auto' : 'overflow-clip'
          } bg-dotted-spacing-1 bg-dotted-gray-500 items-center rounded-xl px-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
