import { useState } from 'react';
import { TProduct } from '../../types/product';
import ReadMoreButton from '../buttons/read-more-button/read-more-button';
import { limitDescriptionLength } from '../../utils/utils';
import { DESCRIPTION_LENGTH } from '../../const';

type DescriptionDetailsProps = {
  description: TProduct['description'];
};
function DescriptionDetails({
  description,
}: DescriptionDetailsProps): JSX.Element {
  const [isDescriptionFull, setDescriptionFull] = useState(
    description.length < DESCRIPTION_LENGTH
  );
  return (
    <div className="item-details__text-wrapper">
      <p className="item-details__text">
        {isDescriptionFull ? description : limitDescriptionLength(description)}
      </p>
      {!isDescriptionFull && (
        <ReadMoreButton setDescriptionFull={setDescriptionFull} />
      )}
    </div>
  );
}

export default DescriptionDetails;
