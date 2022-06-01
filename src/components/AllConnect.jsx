import socmedLinks from "../socmed.json";

const AllConnect = () => {
  return (
    <div className="allConnect">
      <h2>All platform connect to Findtrend</h2>
      <div className="allConnect-socmed">
        {socmedLinks.map((socmed) => (
          <div key={socmed.id} className="allConnect-socmed-links">
            <img src={socmed.soc} alt={socmed.socAlt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllConnect;
