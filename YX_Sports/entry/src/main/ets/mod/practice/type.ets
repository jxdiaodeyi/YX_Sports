export interface WorkoutData {
  weekInfo: DailyWorkout[],
  allTime: number,
  allCalories:number
}
export interface DailyWorkout {
  calorie:number,
  stime: number
}
export interface ResponseData{
  code:number,
  data:WorkoutData,
  message:string
}
export interface ResponseTodayInfoType{
  calorie: number,
  stime: number
}
export interface ResponseTodayNetWorkType{
  code:number;
  data:ResponseTodayInfoType;
  message:string
}
export interface WeightType{
  weight_first: number,
  weight_current: number
}
export interface WeightTypeNetWorkType{
  code:number;
  data:WeightType;
  message:string
}

export interface dailyWorkOutType{
  allTime: number,
  allCalories:number
}
export interface DailyWorkOutNetWork{
  code:number,
  data:dailyWorkOutType,
  message:string
}

export interface weightInitTargetType {
  weight_first:number,
  weight_target:number
}
export interface weightInitTargetNetWorkType{
  code:number,
  data:weightInitTargetType,
  message:string
}