/**
 * Hero Section Video & Cloud Live Stream Configuration
 *
 * This configuration controls the video background played when visitors land on the website.
 * You can effortlessly switch between:
 * 1. A local video file (e.g., `/videos/hero.mp4`)
 * 2. A direct cloud storage video URL (AWS S3, Cloudinary, BunnyCDN, Firebase, etc.)
 * 3. A cloud live stream URL (.m3u8 HLS stream from Cloudflare Stream, AWS IVS, Mux, etc.)
 *
 * HOW TO ATTACH YOUR CLOUD VIDEO / LIVESTREAM:
 * Simply replace `videoUrl` or `liveStreamUrl` below with your cloud link.
 * You can also set the `NEXT_PUBLIC_HERO_VIDEO_URL` or `NEXT_PUBLIC_HERO_STREAM_URL` environment variables.
 */

export interface HeroMediaConfig {
  /**
   * Title shown in the hero section (e.g., "Travel", "Hospitality", "Destinations")
   */
  title: string;

  /**
   * Subtitle under the title (e.g., "With purpose. Book retreats, active tours, and boutique stays in one place.")
   */
  subtitle: string;

  /**
   * Label for the single hero action button (e.g., "Explore Retreats", "Explore Destinations")
   */
  buttonLabel: string;

  /**
   * Destination link or anchor for the button (e.g., "#destinations", "/segments", "/properties")
   */
  buttonLink: string;

  /**
   * Direct video file URL (MP4 / WebM).
   * Can be a local path like "/videos/hero.mp4" or a cloud URL like "https://cdn.yourdomain.com/hero.mp4"
   */
  videoUrl: string;

  /**
   * Optional Cloud Live Stream URL (.m3u8 HLS stream).
   * If provided and active, the hero player will automatically stream from this endpoint!
   */
  liveStreamUrl?: string;

  /**
   * Fallback poster image displayed while video is loading or if video fails to play.
   */
  posterUrl: string;

  /**
   * Ambient video settings
   */
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
  playsInline: boolean;
}

export const HERO_CONFIG: HeroMediaConfig = {
  // Category Title & Subtitle
  title: "Star Hospitalities",
  subtitle: "Creating Destinations. Delivering Experiences. Integrated hospitality management, architectural development advisory, and asset value creation.",
  buttonLabel: "Explore Solutions",
  buttonLink: "/solutions",

  // Local or Cloud Video URL (Defaults to local high-definition ambient video)
  videoUrl:
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
    "/videos/hero.mp4",

  // Cloud Live Stream URL (Optional: Paste your .m3u8 livestream link here)
  liveStreamUrl:
    process.env.NEXT_PUBLIC_HERO_STREAM_URL ||
    "", // e.g. "https://customer-xxx.cloudflarestream.com/xxx/manifest/video.m3u8"

  // Poster Image (exact high-resolution first frame of the uploaded video)
  posterUrl: "/images/hero-poster.jpg",

  // Playback options
  autoplay: true,
  muted: true, // Autoplay requires muted in modern browsers
  loop: true,
  playsInline: true,
};

