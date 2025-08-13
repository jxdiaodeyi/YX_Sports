 interface searchContent {
  id:number,
  cname:string,
  ctime:number,
  ccalorie:number,
  iname:string,
  difficulty:number
}
interface searchNetWorkType{
  code:number,
  massage:string,
  data:searchContent[]
  token:string

}

export {searchContent,searchNetWorkType}