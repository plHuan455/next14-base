import Header from "./header"
import SlideBar from "./slide-bar"

interface Props {
  children: React.ReactNode
}
export default function LayoutDashboard({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="flex">
        <div>
          <SlideBar />
        </div>
        <div className="mt-[--dashboard-header-height] grow min-w-0">{children}</div>
      </div>
    </div>
  )
}
