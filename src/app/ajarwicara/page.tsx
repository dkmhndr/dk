
import { getAllPosts } from '@/lib/contentful/api';

import PostCards from "@/components/ajarwicara/PostCards";
import BasicHeader from "@/components/layout/BasicHeader";
import PageTransition from '@/components/PageTransition';

export default async function Page() {
  const posts = await getAllPosts({ order: 'desc', limit: 1000 });
  
  return (
      <PageTransition>
        <div className='flex flex-col justify-between gap-8 lg:flex-row'>
          <div className='h-fit flex-1 lg:sticky lg:top-8  lg:min-w-[27dvw]'>
            <BasicHeader
                title="Ajarwicara"
                shorts="Glimpse of my thoughts"
            />
          </div>
          <div className='mx-auto w-full'>
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 py-2">
              <PostCards entries={posts} />
            </div>
          </div>
        </div>
      </PageTransition>
  );
}
