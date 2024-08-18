import React from 'react';
import { PaginationButton, PaginationContainer, PaginationInfo } from './Pagination.styled';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  goPrev(): void;
  goNext(): void;
}

const Pagination = ({ currentPage, itemsPerPage, totalItems, goPrev, goNext }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const showPrevButton = currentPage !== 1;
  const showNextButton = currentPage * itemsPerPage < totalItems;
  return (
    <PaginationContainer>
      <PaginationButton onClick={goPrev} disabled={!showPrevButton}>
        &larr;
      </PaginationButton>
      <PaginationInfo>
        {currentPage} of {totalPages}
      </PaginationInfo>
      <PaginationButton onClick={goNext} disabled={!showNextButton}>
        &rarr;
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
