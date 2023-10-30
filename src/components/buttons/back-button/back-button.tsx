function BackButton(): JSX.Element {
  return (
    <div className="back-link">
      <div className="container">
        <a className="back-link__link" onClick={() => window.history.back()}>
          Назад
          <svg
            className="back-link__icon"
            width={30}
            height={16}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BackButton;
