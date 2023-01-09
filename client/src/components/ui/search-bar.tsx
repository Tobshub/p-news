import "@styles/search-bar.scss";
import { useContext, useState } from "react";
import { Form } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import ThemeContext from "@context/theme";

export default function SearchBar() {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState("");

  return (
    <Form
      action="."
      className={`search-bar ${theme.middleground} d-flex justify-content-center`}
    >
      <fieldset
        className="input-group"
        style={{ width: "min(100%, 400px)" }}
      >
        <input
          className={`form-control form-control-sm`}
          placeholder="search"
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <IconContext.Provider
          value={{
            size: "24px",
            className: `${theme.foreground}`,
          }}
        >
          <button className="btn btn-outline-secondary" type="submit">
            <BsSearch />
          </button>
        </IconContext.Provider>
      </fieldset>
    </Form>
  );
}
