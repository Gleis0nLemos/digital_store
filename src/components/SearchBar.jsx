import React from 'react';
import Search from '../assets/search-icon.svg';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearch, placeholder = 'Pesquisar produto' }) => {
  return (
    <div className="hidden lg:flex relative items-center ml-6">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSearch();
          }
        }}
        className='bg-light-gray-3 flex pl-6 py-4 w-[400px] lg:w-[410px] xl:w-[559px] rounded-lg border-none focus:outline-none'
      />
      <div className='absolute right-4 items-center flex'>
        <button onClick={onSearch}>
          <img src={Search} alt="Search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
