import Posts from "@/components/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[200px] h-[100lvh] bg-muted-foreground">
      <Posts />
    </div>
  );
}
