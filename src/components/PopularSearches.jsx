

function PopularSearches() {
  const searches = ["Hirono", "Peach Riot", "Action Figure", "MEGA Collection", "New Arrival", "Top Selling", "Molly", "Crybaby"];
  
  return (
    <section className="popular-searches">
      <h2>POPULAR SEARCHES</h2>
      <div className="search-tags">
        {searches.map((search, index) => (
          <span key={index}>{search}</span>
        ))}
      </div>
    </section>
  );
}

export default PopularSearches;
