export interface FiltersContextInterface {
  filters: Filters;
  applyFilters: (key: FilterType, value: FilterValue) => void;
  filtersActive: boolean;
}

export enum FilterType {
  USER = 'user',
  YEAR = 'year',
  RECEIPTS = 'receipts',
}

export interface Filter {
  value: FilterValue;
}

export type FilterValue = string | null;

export type Filters = Record<FilterType, Filter>;
