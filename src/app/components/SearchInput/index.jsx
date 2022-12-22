import SearchIcon from '../../../assets/images/icon/search.png';
import './style.sass';

const SearchInput = () => {
  return (
    <div className="app-search">
      <input placeholder="Search for people" className="app-search__input" />
      <img src={SearchIcon} alt="search icon" className="app-search__image" />
    </div>
  )
};

export default SearchInput;
