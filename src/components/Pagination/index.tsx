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
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const showPrevButton = currentPage !== 1;
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
