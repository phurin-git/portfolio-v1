import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"
import Cursor from "./components/GradientCursor"

export default function Home() {
  return (
    <div className="mx-auto min-w-min max-w-screen-xl px-6 py-12 lg:grid lg:grid-cols-2 lg:px-24 lg:py-0">
      <Cursor />
      <LeftSection />
      <RightSection />
    </div>
  );
}