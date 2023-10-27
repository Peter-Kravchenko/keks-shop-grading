function ReadMoreButton(): JSX.Element {
  return (
    <button className="item-details__more">
      <span className="visually-hidden">Читать полностью</span>
      <svg width={27} height={17} aria-hidden="true">
        <use xlinkHref="#icon-more" />
      </svg>
    </button>
  );
}

export default ReadMoreButton;
