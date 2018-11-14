'use strict';
import {UserAction} from "../../framework/action/UserAction";
import {ActionType} from "../../framework/constant/ActionType";
import {NativeStorage} from "ionic-native";

export class Login  {

  username = "";
  password = "";

  constructor() {
  }

  private _doLogin(username: string, password: string) {
    return new Promise((resolve, reject) => {
      let action: UserAction = new UserAction("app-login", "xxxx");
      action.username = username;
      action.password = password;
      action.callback = (error, responseJson) => {
        if (!error && undefined != responseJson.ret && responseJson.ret == 0) {
          // 登陆成功 
        }
      };
      action.dispatch();
    });
  }


}
