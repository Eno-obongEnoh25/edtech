export interface ICourse {
  id: number;
  title: string;
  headline: string;
  primary_category: string;
  primary_subcategory: string;
  is_paid: string;
  is_private: string;
  // num_lectures: number;
  price: string;
}


export interface IUdemyResponse  {
  results: ICourse []
}
