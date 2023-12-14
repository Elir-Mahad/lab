import GeneralMenu from "../components/Menu/GeneralMenu";

function Layout({ children }) {
  return (
    <div>
      <GeneralMenu />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
