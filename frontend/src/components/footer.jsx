import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row center">
        <div className="column">
          <h3 className="title">IMPORTANT LINKS</h3>
          <a className="gray" href="https://www.pixeledgebd.com">
            Pixeledge Website
          </a>
          <a className="gray" href="https://discord.gg/32p9RSxsCb">
            Pixeledge Discord
          </a>
          <a className="gray" href="https://discord.gg/9WAWV6qaAE">
            CodeHub Discord
          </a>
        </div>
      </div>
      <div className="credits">
        <p id="left">Powered by PixeledgeBD</p>
        <p id="right">Owned by AlveeHawak</p>
      </div>
    </footer>
  );
};

export default Footer;
