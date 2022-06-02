import { useState } from "react";
import Switch from "@mui/material/Switch";
import "../styles/price.css";
import priceArrow from "../img/price/arrow.png";
import tic from "../img/price/tic.png";

const Price = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="price">
      <h2>Get your best deal</h2>
      <div className="price-switch-wrapper">
        <div className="price-switch-monthly">Monthly</div>
        <Switch
          className="price-switch"
          checked={toggled}
          onChange={(e) => setToggled(e.target.checked)}
        />
        <div className="price-switch-yearly">Yearly</div>
        <img src={priceArrow} alt="Best Deal Arrow" />
      </div>
      <div className="price-card-wrapper">
        <div className="price-card">
          <div className="price-card-top">
            <h3>Personal</h3>
            <p>Special first packet for all</p>
            <div className="price-card-divider"></div>
            <span className="price-card-price">
              $8 <span>/Month</span>
            </span>
            <div className="price-card-details">
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Up to 5 page each group</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Up to 10 group page</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>5 Days group page saved</div>
              </div>
            </div>
          </div>
          <button>Start Free Trial</button>
        </div>
        <div className="price-card price-card-speacial">
          <div className="price-card-top">
            <h3>Regular</h3>
            <p>Recommended for personal pro</p>
            <div className="price-card-divider"></div>
            <span className="price-card-price">
              $20 <span>/Month</span>
            </span>
            <div className="price-card-details">
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Up to 15 page each group</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Download page up to 20 page</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Up to 10 group page</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>15 Days group page saved</div>
              </div>
            </div>
          </div>
          <button>Start Free Trial</button>
        </div>
        <div className="price-card">
          <div className="price-card-top">
            <h3>Personal</h3>
            <p>Special first packet for all</p>
            <div className="price-card-divider"></div>
            <span className="price-card-price">
              $48 <span>/Month</span>
            </span>
            <div className="price-card-details">
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Unlimited group pages</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Unlimited download page</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Unlimited page each group</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Customize sorting group pages</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>Customize group page name</div>
              </div>
              <div className="price-card-detail">
                <img src={tic} alt="Price Detail Tic" />
                <div>30 Days group page saved</div>
              </div>
            </div>
          </div>
          <button>Start Free Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
