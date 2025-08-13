export default interface  registerNetWorkType{
  code:number,
  message:string,
  data:registerType,
  token:string
}

export interface registerType{
  userId:number,
}