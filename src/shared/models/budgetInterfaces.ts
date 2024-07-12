export type TBudgetCategory =
  | 'venue'
  | 'food'
  | 'fashion'
  | 'service'
  | 'others';

export type TBudgetStatus = 'need-to-pay' | 'paid';

export type TBudgetMetadata = {
  total_budget: string;
  total_spend: string;
  progress: string;
};

export type TBudget = {
  id: number;
  name: string;
  nominal: number;
  category: TBudgetCategory;
  status: TBudgetStatus;
};

export type TBudgetAllocation = {
  venue_nominal: number;
  venue_percentage: string;
  food_nomnal: number; // NOTE: it's a typo from the response.
  food_percentage: string;
  fashion_nominal: number;
  fashion_percentage: string;
  service_nominal: number;
  service_percentage: string;
  other_nominal: number;
  other_percentage: string;
};

export type TAllocation = {
  label: string;
  nominal: number;
  percentage: string;
};

export type TCreateBudgetPayload = Omit<TBudget, 'id' | 'status'>;
export type TUpdateBudgetPayload = Partial<Omit<TBudget, 'id'>>;

export interface IGetUserBudgetResponse extends TBudgetMetadata {
  budgets: TBudget[];
}

export type TGetUserBudgetFilters = {
  status?: TBudgetStatus;
  category?: TBudgetCategory;
};
