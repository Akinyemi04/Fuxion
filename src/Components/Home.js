import React from "react";
import logo1 from "../images/amazon-web-services-partner-network-logo-2FDD89EBEC-seeklogo 1 (1).png";
import logo2 from "../images/google-cloud-for-startups 1.png";
import logo3 from "../images/microsoft-startups 1.png";
import logo4 from "../images/Vector (3).svg";
import assist from "../images/partner plus.png";
import integrate from "../images/integrate.png";
import collabo from "../images/collaborate.png";
import mini1 from "../images/Token PNG 4.png";
import main from "../images/Token PNG 1 (1).png";
import mini2 from "../images/Token PNG 5 (1).png";
import cyprus from "../images/Cyrus-1 1.png";
import dawg from "../images/Dawg 1.png";
import drizzy from "../images/IMG_6125 1.png";
import constantin from "../images/konstantin 1.png";
import mik from "../images/mikhailaleks 1.png";
import chapo from "../images/chapo 1.png";
import x from "../images/x.svg";
import youtube from "../images/cib_youtube.svg";
import github from "../images/icomoon-free_github.svg";
import linkedin from "../images/linkedin.svg";
import file from "../images/simple-icons_googledocs.svg";
import log1 from "../images/logo1.svg";
import log2 from "../images/logo 2.svg";
import log3 from "../images/logo 3.svg";
import log4 from "../images/logo4.svg";
import log5 from "../images/logo 5.png";
import frame1 from "../images/Frame 25.svg";
import frame2 from "../images/Frame 24.svg";
import frame3 from "../images/Frame 23.svg";
import frame4 from "../images/Frame 22.svg";

const Home = () => {
  const screen = window.screen.availWidth;
  return (
    <>
      {screen > 900 ? (
        <div className="Home">
          <section className="one">
            <h1>
              unified gaTEWAY TO A CONNECTED <span>WEB3 FUTURE</span>
            </h1>
            <p>
              <span>Fuxion Labs</span> develops tools for users to navigate the
              Web3 world, offering access different DApp services, and tapping
              into existing communities.
            </p>
          </section>
          <section className="two">
            <span>SUPPORTED BY</span>
            <img src={logo3} alt="" />
            <img src={logo2} alt="" />
            <img src={logo1} alt="" />
            <div>
              <img src={logo4} alt="" />
              <img src={assist} alt="" />
            </div>
          </section>
          <section className="three">
            <div>
              <img src={collabo} alt="" />
              <aside>
                <h4>Web3 Hub</h4>
                <p>
                  Our Telegram Bot avails you with Precision tools that ensure
                  you have a profitable Crypto Trading/Sniping experience.
                </p>
                <p>
                  Key features include: multiple trading wallets, token deposit
                  & withdrawals, swift and secure transactions, Limit order
                  Protocol and lots more to come...
                </p>
                <button>Deadshot</button>
              </aside>
            </div>
            <div>
              <aside>
                <h4>Spend</h4>
                <p>
                  Spend your Crypto Trading profits with our NFT Virtual and
                  Physical cards
                </p>
                <button>NFT Debit card</button>
              </aside>
              {/* <div>
          <img src={} alt="" />
          <img src={} alt="" />
        </div> */}
            </div>
            <div>
              <img src="" alt="" />
              <aside>
                <h4>Escrow</h4>
                <p>
                  Make crypto payments safely and securely with our web3 Escrow
                  platform.
                </p>
                <p>
                  Make crypto payments safely and securely with our web3 Escrow
                  platform.
                </p>
                <button>Web3 Escrow</button>
              </aside>
            </div>
            <div>
              <aside>
                <h4>Integrate</h4>
                <p>
                  Integrate instant features within your tech development, with
                  InFuxe
                </p>
                <button>Integrate</button>
              </aside>
              <img src={integrate} alt="" />
            </div>
            <div>
              <img src={collabo} alt="" />
              <aside>
                <h4>Collaborate</h4>
                <p>
                  Collaborate with us for NFC-enabled debit cards + added perks
                  for both communities
                </p>
                <button>Collab</button>
              </aside>
            </div>
          </section>
          <section className="four">
            <div className="image">
              <img className="left" src={mini2} alt="" />
              <img src={main} alt="" />
              <img className="right" src={mini1} alt="" />
            </div>
            <aside>
              <h4>$FUXE Token</h4>
              <p>
                {" "}
                $FUXE is our native utility token. It powers the ecosystem,
                enabling premium access to our products and other top tier
                features.
              </p>
              <div>
                <span className="black">Whitepaper</span>
                <span className="white">Get $FUXE</span>
              </div>
            </aside>
          </section>
          <section className="five">
            <h1>Meet our Team</h1>
            <div className="main">
              <section>
                <div className="info">
                  <div className="sec">
                    <img className="profile" src={cyprus} alt="" />
                    <span>C E O </span>
                  </div>
                  <p>Cyrus Garcia</p>
                </div>
                <div className="social">
                  <img src={x} alt="" />
                </div>
              </section>

              <section>
                <div className="info">
                  <div className="sec">
                    <img className="profile" src={dawg} alt="" />
                    <span>C M O </span>
                  </div>
                  <p>Patrick Andras</p>
                </div>
                <div className="social">
                  <img src={linkedin} alt="" />
                  <img src={x} alt="" />
                  <img src={youtube} alt="" />
                </div>
              </section>

              <section>
                <div className="info">
                  <div className="sec">
                    <img className="profile" src={chapo} alt="" />
                    <span>SENIOR ADVISOR</span>
                  </div>
                  <p>chapo</p>
                </div>
                <div className="social">
                  <img src={file} alt="" />
                  <img src={x} alt="" />
                </div>
              </section>

              <section>
                <div className="info">
                  <div className="sec">
                    <img className="profile" src={constantin} alt="" />
                    <span>DIRECTOR</span>
                  </div>
                  <p>K. Casparov</p>
                </div>
                <div className="social">
                  <img src={x} alt="" />
                </div>
              </section>

              <section>
                <div className="info">
                  <div className="sec">
                    <img className="profile" src={mik} alt="" />
                    <span className="plain">DEVELOPER </span>
                  </div>
                  <p>Mikhail Alexandrov</p>
                </div>
                <div className="social">
                  <img src={linkedin} alt="" />
                  <img src={github} alt="" />
                </div>
              </section>

              <section>
                <div className="info">
                  <div className="sec">
                    <img className="profile" src={drizzy} alt="" />
                    <span className="plain">UI DESIGNER </span>
                  </div>
                  <p>A. Daniel</p>
                </div>
                <div className="social">
                  <img src={x} alt="" />
                </div>
              </section>
            </div>
          </section>
          <section className="six">
            <article>
              <h3>Partners</h3>
              <div>
                <img src={log1} alt="" />
                <img src={log2} alt="" />
                <img src={log3} alt="" />
                <img src={log4} alt="" />
                <img src={log5} alt="" />
              </div>
            </article>
            <article>
              <h3>Become a Fuxionist</h3>
              <p>
                Join our community to learn more about what we’re building. Get
                the latest news and insights in our groups below.
              </p>
              <div>
                <img src={frame3} alt="" />
                <img src={frame4} alt="" />
                <img src={frame1} alt="" />
                <img src={frame2} alt="" />
              </div>
            </article>
          </section>
        </div>
      ) : (
        <p> website only availble for pc right now</p>
      )}
    </>
  );
};

export default Home;
