import CreatePost from "@/components/CreatePost";
import Posts from "@/components/Posts";


export default function Home() {
  return (
    <div className="px-[200px] min-h-[100lvh] bg-muted-foreground">
      <Posts />
      <CreatePost />
    </div>
  );
}
