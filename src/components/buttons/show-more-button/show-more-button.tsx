import cn from 'classnames';
import { useAppDispatch } from '../../../hooks';
import { showMoreProductsAction } from '../../../store/app-process/app-process.slice';

type TShowMoreButtonProps = {
  reviewBlock?: boolean;
};

function ShowMoreButton({
  reviewBlock = false,
}: TShowMoreButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleShowMoreClick = () => {
    if (!reviewBlock) {
      dispatch(showMoreProductsAction());
    }
  };

  return (
    <button
      className={cn({
        ['btn btn--second']: true,
        ['comments__button']: reviewBlock,
      })}
      type="button"
      onClick={handleShowMoreClick}
    >
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
