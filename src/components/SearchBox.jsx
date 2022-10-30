import './styles/SearchBox.css';

const SearchBox = ({ className, onSearchHandler, placeHolder, value}) => {
  return (
    <input
      placeholder={placeHolder}
      type='search'
      className={`${className} search-box`}
      onChange={onSearchHandler}
      value={value}
    ></input>
  );
};

export default SearchBox;