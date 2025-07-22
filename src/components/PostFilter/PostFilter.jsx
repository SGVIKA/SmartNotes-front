import "./PostFilter.css"

export default function PostFilter({filter, setFilter}) {
  return (
    <input
      className="search"
      placeholder="Поиск..."
      value={filter.query}
      onChange={(e) => setFilter({...filter, query: e.target.value})}
    />
  );
}
