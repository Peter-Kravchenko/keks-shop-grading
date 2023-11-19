type ReadMoreButtonProps = {
  setDescriptionFull: (descriptionFull: boolean) => void;
};

function ReadMoreButton({
  setDescriptionFull,
}: ReadMoreButtonProps): JSX.Element {
  return (
    <button
      className="item-details__more"
      onClick={() => setDescriptionFull(true)}
    >
      <span className="visually-hidden">Читать полностью</span>
      <svg width={27} height={17} aria-hidden="true">
        <use xlinkHref="#icon-more" />
      </svg>
    </button>
  );
}

export default ReadMoreButton;
