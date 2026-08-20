import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
  showAvatar = true,
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <div className="search-row">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="search-bar__button"
          aria-label="Search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </form>

      {showAvatar && (
        <button className="avatar" aria-label="Profile" type="button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="8" r="4" fill="#14151a" />
            <path
              d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
              fill="#14151a"
            />
          </svg>
        </button>
      )}
    </div>
  );
}