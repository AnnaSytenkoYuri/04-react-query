import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const notify = () => toast("Please enter your search query.");

interface SearchBarProps {
  onSubmit: (queryValue: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handelSubmit = (FormData: FormData) => {
    const queryValue = FormData.get("query") as string;

    if (queryValue) {
      onSubmit(queryValue);
    } else {
      notify();
    }
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handelSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}