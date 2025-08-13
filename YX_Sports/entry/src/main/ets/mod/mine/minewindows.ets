export interface mineListType{
  img:string,
  title:string,
  id:number
}

export interface mineNetWorkType{
  code : number,
  message : string,
  data : userInfoType,
  token : string
}

export interface userInfoType{
  //id号
  userId:number,
  //昵称
  username:string,
  //性别
  gender:string
  //身高
  height:number
  //体重
  weight_current:number
  // //会员等级
  // vip:number
}

export interface userInfoListType{
  title:string,
  id:number
}

export interface appAccountType{
  img:string,
  text:string,
  id:number
}

export interface MessageSettingType{
  tex : string,
  id : number
}
