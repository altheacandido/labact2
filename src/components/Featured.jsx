
import { featuredData } from "../data";

function getFeaturedItem(id) {
  return featuredData.find(item => item.id === id);
}

function Featured() {
  const featuredItems = [getFeaturedItem(1), getFeaturedItem(2), getFeaturedItem(3)];

  return (
    <section className="featured">
      <h2>FEATURED</h2>
      <div className="featured-grid">
        <div className="featured-large">
          <img src={featuredItems[0]?.image} alt="Featured Large" />
        </div>
        <div className="featured-small">
          {featuredItems.slice(1).map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={`Featured Small ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
