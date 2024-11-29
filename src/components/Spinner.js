import PropTypes from "prop-types";

const Spinner = ({ className }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-slate-400/30 ${className}`}
    >
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-700 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
