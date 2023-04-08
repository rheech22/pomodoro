export const metadata = {
  title: 'My Pomodoro',
  description: '...',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout;
