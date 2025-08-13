export  interface classType {
  id:number,
  cname:string,
  ctime:number,
  ccalorie:number,
  iname:string,
  difficulty:number
}
export default interface classNetWorkType{
  code:number,
  massage:string,
  data:classType,
  token:string
}
export  interface classInfoType{
  catStretch:number,
  catStretchCount: number,
  highKnee: number,
  highKneeCount: number,
  jumpJack:number,
  jumpJackCount: number,
  armCircle: number,
  armCircleCount: number,
  neckCircle:number,
  neckCircleCount: number,
  waistTwist:number,
  waistTwistCount:number,
  kneeCircle:number,
  kneeCircleCount: number,
  lungeWalk: number,
  lungeWalkCount:number,
  sideLung: number,
  sideLungCount: number,
  gluteActive: number,
  gluteActiveCount: number
}
export interface classInfoNetWorkType{
  code:number,
  massage:string,
  data:classInfoType,
  token:string
}