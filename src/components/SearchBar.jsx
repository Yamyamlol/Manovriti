export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return <input type="text" placeholder="Search notes..." value={searchTerm} onChange={handleSearch} className="w-64" />
}

