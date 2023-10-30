import { useAppDispatch, useAppSelector } from '../../hooks';
import { TProduct } from '../../types/product';
import { getReviewSendingStatus } from '../../store/reviews-data/reviews-data.selectors';
import { Fragment, useEffect, useState } from 'react';
import { MAX_COMMENT_LENGTH, RequestStatus, ratingMap } from '../../const';
import { fetchReviews, postReview } from '../../store/api-actions';
import { toast } from 'react-toastify';
import { resetReviewSendingStatus } from '../../store/reviews-data/reviews-data.slice';

type ReviewFormProps = {
  id: TProduct['id'];
};

function ReviewForm({ id }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const reviewSendingStatus = useAppSelector(getReviewSendingStatus);

  const [formData, setFormData] = useState({
    rating: 0,
    positive: '',
    negative: '',
  });

  const isUIBlocked = reviewSendingStatus === RequestStatus.Pending;
  const formDisabled = () => {
    if (formData.rating >= 4) {
      return (
        reviewSendingStatus === RequestStatus.Pending ||
        formData.positive.length >= MAX_COMMENT_LENGTH ||
        formData.positive.length === 0
      );
    } else if (formData.rating <= 3 || formData.rating === 0) {
      return (
        reviewSendingStatus === RequestStatus.Pending ||
        formData.negative.length >= MAX_COMMENT_LENGTH ||
        formData.negative.length === 0
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reviewData = {
      rating: Number(formData.rating),
      positive: formData.positive,
      negative: formData.negative,
    };
    dispatch(
      postReview({
        id,
        reviewData,
      })
    );
  };

  useEffect(() => {
    if (reviewSendingStatus === RequestStatus.Success) {
      setFormData({
        rating: 0,
        positive: '',
        negative: '',
      });
      dispatch(fetchReviews(id));
      toast.success('Спасибо за ваш отзыв');
    }
    if (reviewSendingStatus === RequestStatus.Rejected) {
      toast.error('Произошла ошибка, попробуйте снова');
    }
    dispatch(resetReviewSendingStatus());
  }, [dispatch, id, reviewSendingStatus]);

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form
              action="#"
              method="post"
              autoComplete="off"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className="review-form__inputs-wrapper">
                <div className="custom-input">
                  <label>
                    <span className="custom-input__message">
                      {formData.rating >= 4 &&
                        formData.positive.length === 0 && (
                          <b> Расскажите, чем вы остальсь довольны </b>
                        )}
                      {formData.positive.length !== 0 &&
                        formData.positive.length < MAX_COMMENT_LENGTH && (
                          <b>
                            {' '}
                            Осталось{' '}
                            {MAX_COMMENT_LENGTH - formData.positive.length}{' '}
                            символов{' '}
                          </b>
                        )}
                      {formData.positive.length >= MAX_COMMENT_LENGTH && (
                        <b>
                          {' '}
                          Максимальная длина отзыва не больше{' '}
                          {MAX_COMMENT_LENGTH} символов{' '}
                        </b>
                      )}
                    </span>
                    <input
                      type="text"
                      name="positive"
                      placeholder="Достоинства"
                      value={formData.positive}
                      onChange={handleInputChange}
                      disabled={isUIBlocked}
                    />
                  </label>
                </div>
                <div className="custom-input">
                  <label>
                    <span className="custom-input__message">
                      {formData.rating <= 3 &&
                        formData.rating !== 0 &&
                        formData.negative.length === 0 && (
                          <b> Расскажите, что вам не понравилось </b>
                        )}
                      {formData.negative.length !== 0 &&
                        formData.negative.length < MAX_COMMENT_LENGTH && (
                          <b>
                            {' '}
                            Осталось{' '}
                            {MAX_COMMENT_LENGTH - formData.negative.length}{' '}
                            символов{' '}
                          </b>
                        )}
                      {formData.negative.length >= MAX_COMMENT_LENGTH && (
                        <b>
                          {' '}
                          Максимальная длина отзыва не больше{' '}
                          {MAX_COMMENT_LENGTH} символов{' '}
                        </b>
                      )}
                    </span>
                    <input
                      type="text"
                      name="negative"
                      placeholder="Недостатки"
                      value={formData.negative}
                      onChange={handleInputChange}
                      disabled={isUIBlocked}
                    />
                  </label>
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating">
                    {Object.entries(ratingMap)
                      .reverse()
                      .map(([score, value]) => (
                        <Fragment key={score}>
                          <input
                            type="radio"
                            name="rating"
                            id={`input-star-rating-${score}`}
                            value={score}
                            checked={String(formData.rating) === score}
                            onChange={handleInputChange}
                            aria-label={`${score} звезд`}
                            disabled={isUIBlocked}
                          />
                          <label
                            htmlFor={`input-star-rating-${score}`}
                            title={value}
                          >
                            <svg width={40} height={40} aria-hidden="true">
                              <use xlinkHref="#icon-star" />
                            </svg>
                          </label>
                        </Fragment>
                      ))}
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button
                    className="btn review-form__button"
                    type="submit"
                    disabled={formDisabled()}
                  >
                    {!isUIBlocked ? 'Отправить отзыв' : 'Отправляем...'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewForm;
