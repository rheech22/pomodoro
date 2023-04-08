import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex p-3 shadow-2xl">
        <Link className="mr-auto" href="/">
          <h1>Pomodoro</h1>
        </Link>
        <Link className="mr-10 underline" href="/pomodoro">focus</Link>
        <Link className="underline" href="/report">report</Link>
      </div>
      <main className="p-10">
        {children}
      </main>
    </>
  );
};

export default Layout;
