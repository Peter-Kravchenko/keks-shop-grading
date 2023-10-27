import cn from 'classnames';

type TShowMoreButtonProps = {
  block?: string;
};

function ShowMoreButton({ block = '' }: TShowMoreButtonProps): JSX.Element {
  return (
    <button
      className={cn({
        ['btn btn--second']: true,
        ['comments__button']: block,
      })}
      type="button"
    >
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
