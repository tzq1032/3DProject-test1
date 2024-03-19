import { defineStore } from "pinia";
import type {LoginFormData} from'../../../type/userType'
import { reqLogin } from "../../../api/user";

//创建用户仓库
let useUserStore = defineStore("User",{
  //存储数据
state:()=>{
  return{}
},
actions:{
  async userLogin(data:LoginFormData){
    let result =  await reqLogin(data);
    console.log(result);
  }

},
getters:{

}
})

export default useUserStore;