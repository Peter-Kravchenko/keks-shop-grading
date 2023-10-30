import cn from 'classnames';
import { useAppDispatch } from '../../../hooks';
import {
  showMoreProductsAction,
  showMoreReviewsAction,
} from '../../../store/app-process/app-process.slice';

type ShowMoreButtonProps = {
  reviewBlock?: boolean;
};

function ShowMoreButton({
  reviewBlock = false,
}: ShowMoreButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleShowMoreClick = () => {
    if (!reviewBlock) {
      dispatch(showMoreProductsAction());
    }
    if (reviewBlock) {
      dispatch(showMoreReviewsAction());
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
