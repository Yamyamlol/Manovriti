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
        className="w-full max-w-xs p-3 rounded-lg border border-[#8796C3] focus:outline-none focus:ring-2 focus:ring-[#3D53A0] focus:border-[#3D53A0] transition-all duration-300"
      />
    )
  }
  