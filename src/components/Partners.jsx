import "../styles/partners.css";
import brands from "../brands.json";

const Partners = () => {
  return (
    <div className="partners">
      <h2>Findtrend make +1000 Startup grow</h2>
      <div className="partners-visual">
        {brands &&
          brands.map((brand) => (
            <div className="partners-visual-brand" key={brand.id}>
              <img src={brand.brand} alt={brand.brandCaption} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Partners;
