interface homeNetWorkType{
  code:number,
  massage:string,
  data:show[]
  token:string

}
interface  fat{
  name:string
  name2:string
}

interface show {
  id:number,
  cname:string,
  ctime:number,
  ccalorie:number,
  iname:string,
  difficulty:number
}

export  {homeNetWorkType,fat,show}