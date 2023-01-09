import SearchBar from "@UIcomponents/search-bar";
import ThemeContext from "@context/theme";
import ArticleFlow from "@layouts/article-flow";
import { useContext } from "react";

export default function HomeIndex() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`index ${theme.foreground}`}>
      <SearchBar />
      <ArticleFlow />
    </div>
  );
}
