import "./styles/SearchBox.css";

const SearchBox = ({ className, onSearchHandler, placeHolder, value }) => {
  return (
    <div className="search-box-container">
      <input
        placeholder={placeHolder}
        type="search"
        className={`${className} search-box`}
        onChange={onSearchHandler}
        value={value}
      ></input>
    </div>
  );
};

export default SearchBox;
