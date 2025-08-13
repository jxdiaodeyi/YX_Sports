export default interface vipPlanNetWorkType
{
  code:number,
  message:string,
  data:PlanItem[],
  token:string
}

export interface PlanItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  selected: boolean;
  backgroundColor: string;
  isFree?: boolean;
}