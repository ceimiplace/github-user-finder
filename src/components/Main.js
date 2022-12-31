import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import website from "../assets/icon-website.svg";
import location from "../assets/icon-location.svg";
export default function Main() {
  return (
    <main className="main-container">
      <header className="main-container__header">
        <img
          src="https://s3.amazonaws.com/media.eremedia.com/uploads/2013/05/23151721/Octocat.jpg"
          alt="picture profile of searched user"
          className="main-container__header__picture"
        />
        <section>
          <p className="main-container__header_username">Name</p>
          <a className="main-container__header_link" href="#">
            @Link to page
          </a>
          <p className="main-container__header_userjoined">When did he join</p>
        </section>
      </header>
      <section className="main-container__body">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </section>

      <section className="main-container__social">
        <p className="main-container__social__element">
          <span className="main-container__social__element__text">Repos</span>
          <span className="main-container__social__element__value">9</span>
        </p>
        <p className="main-container__social__element">
          <span className="main-container__social__element__text">
            Followers
          </span>
          <span className="main-container__social__element__value">456</span>
        </p>
        <p className="main-container__social__element">
          <span className="main-container__social__element__text">
            Fallowing
          </span>
          <span className="main-container__social__element__value">8</span>
        </p>
      </section>
      <section className="main-container__links">
        <div className="main-container__links__section">
          <img src={location} />
          <p>San Francisco</p>
        </div>
        <div className="main-container__links__section">
          <img src={website} />
          <a href="#" target="_blank" className="default_link">
            website
          </a>
        </div>
        <div className="main-container__links__section">
          <img src={twitter} />
          <a href="#" target="_blank" className="default_link">
            Twitter
          </a>
        </div>
        <div className="main-container__links__section">
          <img src={company} />
          <a href="#" target="_blank" className="default_link">
            github
          </a>
        </div>
      </section>
    </main>
  );
}
