import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header className="p-3 bg-dark text-white">
        <Link to="/">Home</Link>
      </header>

      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}
