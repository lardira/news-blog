import './styles/SearchBox.css';

const SearchBox = ({ className, onSearchHandler }) => {
  return (
    <input
      type='search'
      className={`${className} search-box`}
      onChange={onSearchHandler}
    ></input>
  );
};

export default SearchBox;