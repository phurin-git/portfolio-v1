import LeftSection from "./LeftSection";
import RightSection from "./RightSection"
export default function Home() {
  return (
    <div className="">
      <div className="md:container md:mx-auto h-screen flex justify-center gap-4">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
