import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MediaItem {
  id: number;
  type: "video";
  url: string;
  poster?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "video",
    url: "IAMWORK SHOWREEL .mp4",
    poster: "https://picsum.photos/seed/prague1/1200/800",
  },
  {
    id: 2,
    type: "video",
    url: "",
    poster: "https://picsum.photos/seed/street1/1200/800",
  },
  {
    id: 3,
    type: "video",
    url: "",
    poster: "https://picsum.photos/seed/abstract1/1200/800",
  },
  {
    id: 4,
    type: "video",
    url: "",
    poster: "https://picsum.photos/seed/fashion1/1200/800",
  },
  {
    id: 5,
    type: "video",
    url: "",
    poster: "https://picsum.photos/seed/camera1/1200/800",
  },
  {
    id: 6,
    type: "video",
    url: "",
    poster: "https://picsum.photos/seed/waves1/1200/800",
  },
];

function GridItem({ item }: { item: MediaItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative aspect-video w-full overflow-hidden bg-neutral-950"
    >
      <video
        ref={videoRef}
        src={item.url}
        poster={item.poster}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
      />
      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute right-4 bottom-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/60"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        {/* Hero Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src=""
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-60"
          />
          {/* 50% Black Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="relative z-10 text-[10px] tracking-[0.4em] text-white uppercase sm:text-xs"
        >
          Overtake.Filmz
        </motion.h1>
      </section>

      {/* Work Grid - Uniform 16:9 Grid */}
      <section className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2">
        {mediaItems.map((item) => (
          <div key={item.id}>
            <GridItem item={item} />
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-black px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase">Contact</p>
            <a
              href="mailto:hello@overtake.filmz"
              className="block text-[10px] tracking-[0.2em] text-white transition-opacity hover:opacity-50 sm:text-xs"
            >
              hello@overtake.filmz
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase">Social</p>
            <a
              href="https://instagram.com/overtake.filmz"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[10px] tracking-[0.2em] text-white transition-opacity hover:opacity-50 sm:text-xs"
            >
              @overtake.filmz
            </a>
          </div>
          <div className="pt-12">
            <p className="text-[8px] tracking-[0.2em] text-neutral-700 uppercase">
              Prague &bull; Worldwide
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
