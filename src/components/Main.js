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
      <section className="main-container"></section>
    </main>
  );
}
