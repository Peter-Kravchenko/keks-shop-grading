function ToTheBeginingButton(): JSX.Element {
  return (
    <button
      className="btn btn--second"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      в начало
    </button>
  );
}

export default ToTheBeginingButton;
