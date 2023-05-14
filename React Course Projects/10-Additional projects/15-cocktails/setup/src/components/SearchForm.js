import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

//uncontrolled input approach
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section search">
      <h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </div>
        </form>
      </h2>
    </section>
  );
};

export default SearchForm;
