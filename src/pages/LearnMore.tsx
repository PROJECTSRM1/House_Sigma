import { Home } from "lucide-react";
import "./LearnMore.css";

import scam1 from "../assets/scam.png";
import scam2 from "../assets/scam2.png";
import scam3 from "../assets/scam3.png";
import ScamNav from '@/pages/ScamNav';


const LearnMore = () => {
  return (
    <div className="learn-more-container">

      <ScamNav />

      {/* Main Content */}
      <main className="main-content">
        <article className="article-container">

          {/* Hero Image */}
          <div className="hero-image">
            <img
              src={scam1}
              alt="Laptop showing scam website"
            />
          </div>

          {/* Article Header */}
          <header className="article-header">
            <h1 className="article-title">
              Beware of scam offering payment for reviewing real estate listings
            </h1>
            <p className="article-meta">
              September 17, 2025 / Joannah Connolly / AB, BC, ON, Real Estate
            </p>
          </header>

          {/* Article Body */}
          <div className="article-body">

            <p className="article-paragraph">
              We've all been targeted with one fraudulent scheme or another at some point in our adult lives. Now, there is a very realistic-looking scam that falsely claims to be legitimate paid work reviewing home listings, and is illegally branded with HouseSigma's logo and colour palette.
            </p>

            <p className="article-paragraph">
              Consumers across Canada are warned to avoid this prolific, highly convincing scam that HouseSigma has been made aware of by concerned consumers, some of whom have been targeted. The scammers approach victims through various platforms, such as adding WhatsApp and Telegram users to the scam's chat groups, posting jobs on LinkedIn and Indeed to advertise the fake opportunity, cold calling and texting victims, and more.
            </p>

            <p className="article-paragraph">
              Each path takes the unsuspecting consumer to a scam website that illegally uses HouseSigma's logo and branding, and claims to offer payment to "analyze and promote the most profitable properties" on a freelance basis. They may also use other similar methods that are designed to make victims send them funds.
            </p>

            {/* scam2 */}
            <div className="content-image-wrapper">
              <img
                src={scam2}
                alt="Scam website screenshot"
                className="content-image"
              />
            </div>

            {/* scam3 */}
            <div className="content-image-wrapper">
              <p className="image-caption">
                Image: Screenshot of the scam website home page, falsely branded as HouseSigma
              </p>
            </div>

            <p className="article-paragraph">
              Like many such scams, the victims are asked to deposit funds into an account to get the "job," with the promise that this will be far outweighed by earnings. This is followed by the scammers demanding increasingly high deposits to keep their account active.
            </p>

            <p className="article-paragraph">
              However much the victim pays into the account, they will never see that money again, and they will never be paid.
            </p>

            <h2 className="article-heading">
              Thousands of dollars lost
            </h2>

            <p className="article-paragraph">
              HouseSigma has learned of at least one user who believed the scam and has unfortunately lost thousands of dollars that they cannot recover, along with another who has lost hundreds.
            </p>

            <p className="article-paragraph">
              The scam also uses HouseSigma's branding on letterhead to send official-looking, watermarked legal "breach of contract" notices, claiming the victim did not file their work within a certain period and demanding huge fines be paid.
            </p>

            <p className="article-paragraph">
              HouseSigma has received a copy of such a letter from a scam victim who reached out to us. Much of the letter's text is extremely badly written and challenging to understand. What is clear is that the copy HouseSigma received demands $87,140 USDT (Tether, a form of cryptocurrency) in payment, claiming that the fine will be refunded if the full amount is paid, and threatening legal action if it is not (see screenshot below).
            </p>

            {/* scam3 again (letter screenshot) */}
            <div className="content-image-wrapper">
              <img
                src={scam3}
                alt="Scam letter screenshot"
                className="content-image with-border"
              />
              <p className="image-caption">
                Image: Screenshot of a letter sent to a victim of the scam, falsely claiming to be from HouseSigma
              </p>
            </div>

            <p className="article-paragraph">
              The letter is signed "John Steen, Project Director, HouseSigma" and marked with a convincing-looking stamp. No such employee or role exists at HouseSigma, Inc.
            </p>

            <h2 className="article-heading">Authorities have been advised</h2>

            <p className="article-paragraph">
              The HouseSigma team can confirm that this fraudulent scheme has no link of any kind to HouseSigma, Inc. or any of its associates, and that the company has no control over the scammers' illegal activity.
            </p>

            <p className="article-paragraph">
              HouseSigma further wishes to clarify that it never makes job offers via WhatsApp or Telegram, nor does it pay users for clicking on listings or "reviewing" them.
            </p>

            <p className="article-paragraph">
              Michael Carney, HouseSigma's Director of Business Development, said, "We at HouseSigma are appalled that scammers are hijacking the HouseSigma brand to shake down prospective job seekers. We're extremely concerned that people are losing money and we want to sound the alarm to help prevent this from happening to anyone else."
            </p>

            <p className="article-paragraph">
              HouseSigma has now notified the appropriate law enforcement agencies about the scam.
            </p>

            <p className="article-paragraph">
              Any users who are concerned about possible scams branded as HouseSigma, or have questions about the legitimacy of roles advertised under HouseSigma's name, may reach out to us at{" "}
              <a href="mailto:scam-alerts@housesigma.com" className="article-link">
                scam-alerts@housesigma.com
              </a>
            </p>

            {/* Tags */}
            <div className="tags-container">
              <span className="tag">real estate</span>
              <span className="tag">scam</span>
            </div>

            {/* Navigation Links */}
            <div className="nav-links-container">
              <a className="nav-link-block">
                « EXPLORE EDMONTON WITH HOUSESIGMA: NOW FEATURING SOLD DATA FROM EDMONTON REAL ESTATE BOARD
              </a>
              <a className="nav-link-block">
                FROM CLICKS TO FOOTSTEPS: NEW HOUSESIGMA TOOL GAUGES BUYER COMPETITION ON LISTINGS »
              </a>
            </div>

          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a className="footer-link">HouseSigma Inc. Brokerage</a>
            <a className="footer-link">Legal</a>
            <a className="footer-link">Privacy & Security</a>
            <a className="footer-link">Terms & Conditions</a>
            <a className="footer-link">Accessibility</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LearnMore;
