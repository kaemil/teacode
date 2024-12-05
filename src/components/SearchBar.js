const SearchBar = ({ searchValue, setSearchValue, setPage }) => {
  const filterTextChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    setPage(1);
  };

  return (
    <div className="contact-search-input">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={filterTextChange}
      />
      <button onClick={() => setSearchValue('')}>Clear</button>
    </div>
  );
};

export default SearchBar;
