import PropTypes from "prop-types";

function Header({ theme, setTheme }) {
  return (
    <div className="flex items-center justify-between text-textColor">
      <h1 className="text-4xl font-bold">calc</h1>
      <div id="theme-selector" className="flex items-center gap-2 p-2 sm:gap-4">
        <h2 className="text-base font-medium"></h2>
        <div>
          <div className="mx-[2px] flex justify-between text-sm font-bold">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="flex w-16 rounded-lg bg-keypadBg px-1 py-1">
            <input
              type="range"
              min="1"
              max="3"
              value={theme}
              className="w-[55px] cursor-pointer bg-transparent"
              onChange={(e) => setTheme(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
