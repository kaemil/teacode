const SearchBar = ({ searchValue, setSearchValue }) => {
  const filterTextChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div className="contact--search-input">
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