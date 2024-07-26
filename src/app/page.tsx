import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"
import Cursor from "./components/GradientCursor"

export default function Home() {
  return (
    <div className="z-100 mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:grid lg:grid-cols-2 lg:px-24 lg:py-0">
      <Cursor />
      <LeftSection />
      <RightSection />
    </div>
  );
}