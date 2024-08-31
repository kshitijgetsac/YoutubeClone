import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard author="kshitij" views = "46m" timestamp = "7 days ago" image = "photo.jpg"></VideoCard>
      <VideoCard author="taneja" views = "4m" timestamp = "20 days ago" image = "photo.jpg"></VideoCard>
    </div>
  );
}
