import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import website from "../assets/icon-website.svg";
import location from "../assets/icon-location.svg";
import returnDate from "./Helpers";
//"https://s3.amazonaws.com/media.eremedia.com/uploads/2013/05/23151721/Octocat.jpg"
export default function Main({ data }) {
  console.log(data);
  return (
    <>
      <header className="main-container__header">
        <img
          src={data.avatar_url}
          alt="picture profile of searched user"
          className="main-container__header__picture"
        />
        <section>
          <p className="main-container__header_username">{data.name}</p>
          <p className="main-container__header_link">@{data.login}</p>
          <p className="main-container__header_userjoined">
            Joined {returnDate(data.created_at)}
          </p>
        </section>
      </header>
      <section className="main-container__body">{data.bio}</section>

      <section className="main-container__social">
        <p className="main-container__social__element">
          <span className="main-container__social__element__text">Repos</span>
          <span className="main-container__social__element__value">
            {data.public_repos}
          </span>
        </p>
        <p className="main-container__social__element">
          <span className="main-container__social__element__text">
            Followers
          </span>
          <span className="main-container__social__element__value">
            {data.followers}
          </span>
        </p>
        <p className="main-container__social__element">
          <span className="main-container__social__element__text">
            Fallowing
          </span>
          <span className="main-container__social__element__value">
            {data.following}
          </span>
        </p>
      </section>
      <section className="main-container__links">
        <div
          className={`main-container__links__section " + ${
            !data.location ? "link--disabled " : ""
          }`}
        >
          <img src={location} />
          <p>{data.location}</p>
        </div>
        <div
          className={`main-container__links__section " + ${
            !data.blog ? "link--disabled " : ""
          }`}
        >
          <img src={website} />
          <a href={data.blog} target="_blank" className="default_link">
            website
          </a>
        </div>
        <div
          className={`main-container__links__section " + ${
            !data.twitter_username ? "link--disabled " : ""
          }`}
        >
          <img src={twitter} />
          <a
            href={"https://twitter.com/" + data.twitter_username}
            target="_blank"
            className="default_link"
          >
            Twitter
          </a>
        </div>
        <div
          className={`main-container__links__section " + ${
            !data.html_url ? "link--disabled " : ""
          }`}
        >
          <img src={company} />
          <a href={data.html_url} target="_blank" className="default_link">
            @github
          </a>
        </div>
      </section>
    </>
  );
}
