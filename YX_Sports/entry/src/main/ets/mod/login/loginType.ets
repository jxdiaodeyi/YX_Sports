export default interface  loginNetWorkType{
  code:number,
  message:string,
  data:loginType,
  token:string
}

export interface loginType{
  userId:number,
  telephone:string,
  vip:number,
  isNew:number
}



