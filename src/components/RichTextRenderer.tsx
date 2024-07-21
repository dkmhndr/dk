import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import UnderlineLink from './links/UnderlineLink';






// renderNode for option
const renderNode = {
  [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
    const { title, description, file } = node.data.target.fields;
    const extension = file.url.slice(-4);
    switch (extension) {
      case '.mp4':
        return (
          <video controls className='mx-auto mb-4 max-w-lg'>
            <source src={file.url} type='video/mp4' />
          </video>
        );
      case '.mp3':
        return (
          <audio controls className='mx-auto mb-4 max-w-lg'>
            <source src={file.url} type='audio/mp3' />
          </audio>
        );
      default:
        return <img src={file.url} alt={title} title={description}/>;
    }
  },
  [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
    switch (node.data.target.fields.title) {
      case 'Skillset': {
        const { skillset } = node.data.target.fields;
        return (
          <div className='mb-8 mt-3 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {skillset.items.map((item: any, index: number) => (
              <div
                key={index}
                className='bg-base-100 w-full pb-8'
              >
                <div className='main-box h-full p-6'>
                  <h4 className='text-2xl font-bold'>{item.title}</h4>
                  <ul className='list-disc text-lg'>
                    {item.content.map((content: any, idx: number) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );
      }
      default:
        return null;
    }
  },
  [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
    node.content.forEach((item: any) => {
      if (item.nodeType === 'hyperlink' && item.data.uri.includes('youtube')) {
        return children = (
            <iframe
                src={item.data.uri}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                className='w-full py-4 lg:w-[30dvw]'
                allowFullScreen
            ></iframe>
        );
      }
    });
      return (
          <p>
            {children}
          </p>
      );
  },
  [INLINES.HYPERLINK]: (node: any, children: any) => {
    return (
      <UnderlineLink className="not-prose" href={node.data.uri}>{children}</UnderlineLink>
    );
  }
};

export default function RichTextRenderer({ document }: { document: Document | any }) {
  return (
    <div className='renderPost'>
      {/* @ts-ignore */}
      {documentToReactComponents(document, { renderNode })}
    </div>
  );
}
