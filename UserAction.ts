'use strict';
import {BaseAction} from "../baseflux/BaseAction";
import {ActionType} from "../constant/ActionType";

export class UserAction extends BaseAction {
  static ACTION_LOGIN = ActionType.ACTION_LOGIN;
  private _username: string;
  private _password: string;
  private _newPassword:string;
  private _securityCode:string;
  private _receiveObject:string;
  private _account:string;
  private _nickname:string;
  private _jsessionid:string;

  constructor(actionType: any, productCode: any) {
    super(actionType, productCode);
  }

  get jsessionid(): string {
    return this._jsessionid;
  }

  set jsessionid(value: string) {
    this._jsessionid = value;
  }

  get nickname():string {
    return this._nickname;
  }

  set nickname(value:string) {
    this._nickname = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get securityCode(): string {
    return this._securityCode;
  }

  set securityCode(value: string) {
    this._securityCode = value;
  }

  get receiveObject(): string {
    return this._receiveObject;
  }

  set receiveObject(value: string) {
    this._receiveObject = value;
  }

  get account(): string {
    return this._account;
  }

  set account(value: string) {
    this._account = value;
  }

  protected _checkParams(): boolean {
    super._checkParams();
    let result: boolean = false;
    switch (this.actionType) {
      case UserAction.ACTION_LOGIN:
    }
    return result;
  }
}
