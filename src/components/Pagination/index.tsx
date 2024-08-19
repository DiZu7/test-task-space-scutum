import React from 'react';

import * as SC from './Pagination.styled';

type PropsType = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  goPrev(): void;
  goNext(): void;
}

const Pagination: React.FC<PropsType> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  goPrev,
  goNext,
}) => {
  // Calculate the total number of pages based on the total items and items per page and round up to a larger whole number
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Determine when the Prev button should be enabled.
  const showPrevButton = currentPage !== 1;

  // Determine when the Next button should be enabled.
  const showNextButton = currentPage * itemsPerPage < totalItems;

  return (
    <SC.PaginationContainer>
      <SC.PaginationButton onClick={goPrev} disabled={!showPrevButton}>
        &larr;
      </SC.PaginationButton>
      <SC.PaginationInfo>
        {currentPage} of {totalPages}
      </SC.PaginationInfo>
      <SC.PaginationButton onClick={goNext} disabled={!showNextButton}>
        &rarr;
      </SC.PaginationButton>
    </SC.PaginationContainer>
  );
};

export default Pagination;
