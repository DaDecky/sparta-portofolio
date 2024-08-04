import Image from "next/image";
import Profile from "./components/Profile";
import Content from "./components/Content/Content";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 ">
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <div className="flex p-10 w-full justify-center flex-wrap max-w-[1440px]">
        <Profile />
        <Content />
      </div>
    </main>
  );
}
