import socmedLinks from "../socmed.json";
import "../styles/allConnect.css";
import tweet1 from "../img/allConnect/tweet1.png";
import tweet2 from "../img/allConnect/tweet2.png";
import tweet3 from "../img/allConnect/tweet3.png";

const AllConnect = () => {
  return (
    <div className="allConnect">
      <h2>All platform connect to Findtrend</h2>
      <div className="allConnect-socmed-wrapper">
        <div className="allConnect-socmed">
          {socmedLinks.map((socmed) => (
            <div key={socmed.id} className="allConnect-socmed-links">
              <img src={socmed.soc} alt={socmed.socAlt} />
            </div>
          ))}
        </div>
      </div>
      <div className="allConnect-tweets">
        <img className="allConnect-tweet" src={tweet1} alt="Elon Musk Tweet" />
        <img
          className="allConnect-tweet"
          src={tweet2}
          alt="Elon Musk Retweet Sawyer Merritt"
        />
        <img className="allConnect-tweet" src={tweet3} alt="Elon Musk Tweet" />
      </div>
    </div>
  );
};

export default AllConnect;
