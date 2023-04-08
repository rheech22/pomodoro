const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <h1>Pomodoro</h1>
      </div>
      {children}
    </>
  )
}

export default Layout;
