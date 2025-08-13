export interface planMes{
  name:string,
  time:string,
  difficulty:string,
  icon:string
}


export default  interface planNetWorkType{
  code:number,
  message:string,
  data:planMes,
  token:string
}

export interface  courseInfoType{
  id:number,
  cname:string,
  ctime:number,
  ccalorie:number,
  iname:string,
  difficulty:number
}

export interface courseInfoNetWorkType{
  code:number,
  message:string,
  data:courseInfoType[],
  token:string
}