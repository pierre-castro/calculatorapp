import PropTypes from "prop-types";

function Screen({ number = "0" }) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-lg bg-screen p-4 text-right text-4xl text-textColor sm:p-6">
      {number}
    </div>
  );
}

Screen.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Screen;
