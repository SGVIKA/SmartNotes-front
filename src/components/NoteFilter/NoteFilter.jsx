import "./NoteFilter.css"

export default function NoteFilter({filter, setFilter}) {
  return (
    <input
      className="search"
      placeholder="Поиск..."
      value={filter.query}
      onChange={(e) => setFilter({...filter, query: e.target.value})}
    />
  );
}
