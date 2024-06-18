import Posts from "@/components/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[200px] bg-muted-foreground">
      <Posts />
    </div>
  );
}
