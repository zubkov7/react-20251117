export const Layout = ({ children, sidebar }) => {
  return (
    <>
      <header>HEADER</header>
      {sidebar}
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  );
};
