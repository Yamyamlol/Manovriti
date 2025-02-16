export default function SearchBar({ searchTerm, setSearchTerm }) {
    const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    }
  
    return (
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-xs p-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300"
      />
    )
  }
  