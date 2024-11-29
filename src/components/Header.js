import Tab from "./Tab";

const Header = () => {
  return (
    <header className="flex justify-center mb-8">
      <div className="flex font-semibold">
        <Tab to="/" className="rounded-l-xl" label="Map" />
        <Tab to="/insight" className="rounded-r-xl" label="Insight" />
      </div>
    </header>
  );
};

export default Header;
