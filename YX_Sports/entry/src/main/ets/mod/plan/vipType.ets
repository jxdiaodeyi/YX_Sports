export default interface vipNetWorkType
{
  code:number,
  message:string,
  data:vipInfoType,
  token:string
}

export interface vipInfoType {
  userId:number,
  vip:number
}