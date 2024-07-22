import { fetchNowPlaying, fetchTopTracks } from '@/lib/spotify/api';

export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const topTracks = await fetchTopTracks();
    return Response.json(topTracks);
  } catch (error) {
    console.error(error);
    return Response.json({ isPlaying: false });
  }
}
