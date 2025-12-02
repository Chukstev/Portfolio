import Navigation from "./Navigation.jsx";

function Header() {
  return (
    <div>
      <header className="flex justify-end items-center w-full fixed top-0 py-8">
        <Navigation />
      </header>
    </div>
  );
}
export default Header;
