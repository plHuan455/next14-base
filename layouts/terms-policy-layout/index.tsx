import Header from "layouts/main-layout/header"

interface Props {}

const TermsPolicyLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <Header disableWaveSwitcher />
      <main className="relative mt-[calc(var(--default-header-height)+6px)] lg:mt-[calc(var(--default-header-height)+12px)] container pb-[100px]">
        {children}
      </main>
    </div>
  )
}

export default TermsPolicyLayout
