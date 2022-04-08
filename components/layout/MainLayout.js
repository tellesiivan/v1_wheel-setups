import Sidenav from "./Sidenav";

export default function MainLayout({ children }) {
  const auth = true;

  const content = auth ? (
    <div className="flex h-full">
      <Sidenav />
      {children}
    </div>
  ) : (
    children
  );

  return content;
}
