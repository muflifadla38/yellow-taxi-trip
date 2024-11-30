import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { formatLocalDateTime } from "../utils/helper";
import { CrossIcon, FilterIcon } from "../components/Icons";

const Filter = ({ defaultDate, fetchData, setLoading }) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const limits = [15, 25, 35, 50, 100];
  const paymentTypes = [
    { value: "NOC", label: "No Charge" },
    { value: "CSH", label: "Cash" },
    { value: "CRD", label: "Credit Card" },
    { value: "DIS", label: "Dispute" },
    { value: "UNK", label: "Unknown" },
  ];

  const [filters, setFilters] = useState({
    pickupDate: null,
    dropoffDate: null,
    minFare: null,
    maxFare: null,
    minDistance: null,
    maxDistance: null,
    paymentType: null,
    limit: limits[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowMobileFilters(false);
    setLoading(true);

    const params = {
      ...(filters.pickupDate && {
        pickupDatetime: filters.pickupDate,
      }),
      ...(filters.dropoffDate && {
        dropoffDatetime: filters.dropoffDate,
      }),
      ...(filters.minFare && {
        minFareAmount: Number(filters.minFare),
      }),
      ...(filters.maxFare && {
        maxFareAmount: Number(filters.maxFare),
      }),
      ...(filters.minDistance && {
        minDistance: Number(filters.minDistance),
      }),
      ...(filters.maxDistance && {
        maxDistance: Number(filters.maxDistance),
      }),
      ...(filters.paymentType && { paymentType: filters.paymentType }),
      ...(filters.limit && { limit: filters.limit }),
    };

    fetchData(params);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <button
        className="md:hidden fixed right-4 top-4 z-[1300] bg-slate-500 text-white p-2 rounded-full shadow-lg"
        onClick={() => setShowMobileFilters(!showMobileFilters)}
      >
        {showMobileFilters ? <CrossIcon /> : <FilterIcon />}
      </button>

      <div
        className={`${
          showMobileFilters ? "block" : "hidden"
        } md:block bg-white p-4 rounded-lg md:mb-4 fixed md:relative top-0 left-0 right-0 md:top-auto md:left-auto md:right-auto z-[1200] md:z-auto h-screen md:h-auto`}
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:flex md:flex-wrap md:gap-4 md:space-y-0"
        >
          <div className="md:flex-1 sm:hidden">
            <span className="block mb-1 text-lg font-medium text-gray-700">
              Filter
            </span>
          </div>
          <div className="md:flex-1">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <DatePicker
              selected={filters.pickupDate}
              popperClassName="some-custom-class"
              popperPlacement="top-end"
              minDate={new Date("2014-01-01T00:00:00.000")}
              maxDate={new Date("2014-12-31T00:00:00.000")}
              showTimeInput
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy HH:mm"
              isClearable
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                },
              }}
              onChange={(date) =>
                handleFilterChange({
                  ...filters,
                  pickupDate: date && formatLocalDateTime(date),
                })
              }
              placeholderText="Start Date"
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:flex-1">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Dropoff Date
            </label>
            <DatePicker
              selected={filters.dropoffDate}
              minDate={new Date("2014-01-01T00:00:00.000")}
              maxDate={new Date("2014-12-31T00:00:00.000")}
              showTimeInput
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy HH:mm"
              isClearable
              onChange={(date) =>
                handleFilterChange({
                  ...filters,
                  dropoffDate: date && formatLocalDateTime(date),
                })
              }
              placeholderText="End Date"
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="md:flex-1">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Fare Amount ($)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                step="any"
                placeholder="Min"
                value={filters.minFare}
                onChange={(e) =>
                  handleFilterChange({ ...filters, minFare: e.target.value })
                }
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                step="any"
                placeholder="Max"
                value={filters.maxFare}
                onChange={(e) =>
                  handleFilterChange({ ...filters, maxFare: e.target.value })
                }
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="md:flex-1">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Trip Distance (miles)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                step="any"
                placeholder="Min"
                value={filters.minDistance}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    minDistance: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                step="any"
                placeholder="Max"
                value={filters.maxDistance}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    maxDistance: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="md:flex-none">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Payment Type
            </label>

            <select
              onChange={(e) =>
                handleFilterChange({ ...filters, paymentType: e.target.value })
              }
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              defaultValue={filters.paymentType}
            >
              <option value="">Select Options</option>
              {paymentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:flex-none">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Limit
            </label>

            <select
              onChange={(e) =>
                handleFilterChange({ ...filters, limit: e.target.value })
              }
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              defaultValue={filters.limit}
            >
              {limits.map((limit) => (
                <option key={limit} value={limit}>
                  {limit}
                </option>
              ))}
            </select>
          </div>

          <div className="items-end content-end">
            <button
              type="submit"
              className="py-[11px] px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
};

export default Filter;
