import times from 'lodash/fp/times';

import { ButtonData } from './types';

const buildButtonData = (
  min: number,
  max: number,
  currentPage: number,
): ButtonData[] =>
  times(
    i => ({
      type: 'regular',
      pageNumber: i + min + 1,
      isDisabled: false,
      isActive: currentPage === i + min + 1,
    }),
    max - min,
  );

const getWhenStartSlices = (
  pageCount: number,
  currentPage: number,
): ButtonData[] => {
  const firstMax = Math.max(3, currentPage + 2);
  const secondMin = pageCount - 3 + (currentPage - 7);
  return [
    ...buildButtonData(0, firstMax, currentPage),
    {
      type: 'between',
      pageNumber: Math.round((firstMax + secondMin) / 2),
      isDisabled: false,
      isActive: false,
    },
    ...buildButtonData(secondMin, pageCount, currentPage),
  ];
};

const getWhenEndSlices = (
  pageCount: number,
  currentPage: number,
): ButtonData[] => {
  const firstMax = currentPage - pageCount + 9;
  const secondMin = Math.min(pageCount - 3, currentPage - 3);

  return [
    ...buildButtonData(0, currentPage - pageCount + 9, currentPage),
    {
      type: 'between',
      pageNumber: Math.round((firstMax + secondMin) / 2),
      isDisabled: false,
      isActive: false,
    },
    ...buildButtonData(
      Math.min(pageCount - 3, currentPage - 3),
      pageCount,
      currentPage,
    ),
  ];
};

const getWhenMiddleSlices = (
  pageCount: number,
  currentPage: number,
): ButtonData[] => {
  const firstMax = 3;
  const secondMin = currentPage - 3;
  const secondMax = currentPage + 2;
  const thirdMin = pageCount - 3;

  return [
    ...buildButtonData(0, 3, currentPage),
    {
      type: 'between',
      pageNumber: Math.round((firstMax + secondMin) / 2),
      isDisabled: false,
      isActive: false,
    },
    ...buildButtonData(currentPage - 3, currentPage + 2, currentPage),
    {
      type: 'between',
      pageNumber: Math.round((secondMax + thirdMin) / 2),
      isDisabled: false,
      isActive: false,
    },
    ...buildButtonData(pageCount - 3, pageCount, currentPage),
  ];
};

const maxRegularButtons = 13;
// Generate pagination buttons, show 13 buttons in total
const getRegularButtonData = (
  pageCount: number,
  currentPage: number,
): ButtonData[] => {
  // Generate page buttons when there are less than 13 pages: show all buttons
  if (pageCount <= maxRegularButtons)
    return buildButtonData(0, pageCount, currentPage);
  // the current page is in the beginning, split in 2 slices
  if (currentPage < 7) return getWhenStartSlices(pageCount, currentPage);
  // when the current page is in the end, split in 2 slices
  if (currentPage > pageCount - 6)
    return getWhenEndSlices(pageCount, currentPage);
  // when the current page is in the middle, split in 3 slices
  return getWhenMiddleSlices(pageCount, currentPage);
};

const getButtonData = (
  pageCount: number,
  currentPage: number,
): ButtonData[] => {
  // No buttons when there is only 1 page or zero
  if (pageCount === 0 || pageCount === 1) return [];

  const regularButtonData = getRegularButtonData(pageCount, currentPage);

  return [
    {
      type: 'first',
      pageNumber: 1,
      isDisabled: false,
      isActive: false,
    },
    {
      type: 'previous',
      pageNumber: currentPage - 1,
      isDisabled: currentPage === 1,
      isActive: false,
    },
    ...regularButtonData,
    {
      type: 'next',
      pageNumber: currentPage + 1,
      isDisabled: currentPage === pageCount,
      isActive: false,
    },
    {
      type: 'last',
      pageNumber: pageCount,
      isDisabled: false,
      isActive: false,
    },
  ];
};

export default getButtonData;
