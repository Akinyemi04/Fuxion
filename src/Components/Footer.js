import React from "react";
import "../Stylings/Footer.css";

const Footer = () => {
  return (
    <footer>
      <article>
        <aside>
          <p>Want to Partner with us?</p>
          <p>Talk to us today</p>
        </aside>
        <button>Contact us</button>
      </article>
      <nav>
        <div>
          <h6>Products</h6>
          <p>Staking</p>
          <p>FuxionHub</p>
          <p>Web3 Escrow</p>
          <p>NFT Debit Card</p>
        </div>
        <div>
          <h6>Documentation</h6>
          <p>Whitepaper</p>
          <p>FuxionHub Guide</p>
        </div>
        <div>
          <h6>Subscribe for Updates</h6>
          <input placeholder="e-mail" type="text" />
          <button>Submit</button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
