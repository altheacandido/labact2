
import { featuredData } from "../data"; 


function getFeaturedAltItem(id) {
  return featuredData.find(item => item.id === id);
}

function FeaturedAlt() {

  const altItems = [getFeaturedAltItem(4), getFeaturedAltItem(5), getFeaturedAltItem(6)];

  return (
    <section className="featured-alt">
      <h2>RECOMMENDED FOR YOU</h2>
      <div className="featured-alt-grid">

        <div className="featured-alt-large">
          {altItems[0] && <img src={altItems[0].image} alt="Featured Large" />}
        </div>

        <div className="featured-alt-small">
          {altItems.slice(1).map((item) => (
            item && (
              <div key={item.id} className="featured-alt-small-item">
                <img src={item.image} alt={`Featured Alt Small ${item.id}`} />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedAlt;
