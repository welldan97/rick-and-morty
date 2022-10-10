export interface ButtonData {
  type: 'regular' | 'between' | 'first' | 'last' | 'next' | 'previous';
  pageNumber: number;
  isDisabled: boolean;
  isActive: boolean;
}
