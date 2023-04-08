export const metadata = {
  title: 'My Pomodoro',
  description: '...',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Pomodoro</h1>
        </div>
        {children}
      </body>
    </html>
  )
}

export default Layout;
