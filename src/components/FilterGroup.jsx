const FilterGroup = ({ title, filters, onChange }) => {
  return (
    <div className="bg-white p-8 w-80 mb-6 rounded-md">
      <h3 className="text-dark-gray-2 font-bold">{title}</h3>
      <hr className="border border-light-gray-2 my-4" />
      {filters.map((filter, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-semibold mb-2">{filter.label}</h4>
          {filter.options.map((option, idx) => (
            <div key={idx} className="flex items-center mb-1">
              <input
                type={option.type}
                name={filter.name}
                value={option.value}
                className={option.type}
                onChange={onChange}
              />
              <label className="ml-2 text-14px text-dark-gray-2">{option.text}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterGroup;
