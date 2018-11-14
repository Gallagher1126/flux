
'use strict';
import {myDispatcher} from "./Dispatcher";

export abstract class BaseAction{
    private _actionType:any;
    private _productCode:any;
  /**
   * callback参数规范：（error,result）;
   */
    protected _callback:Function;

    constructor(actionType:any, productCode:any) {
        this._actionType = actionType;
        this._productCode = productCode;
    }

    get actionType():any {
        return this._actionType;
    }

    set actionType(value:any) {
      this._actionType = value;
    }

    get productCode():any {
        return this._productCode;
    }

    get callback():Function {
        return this._callback;
    }

    set callback(value:Function) {
        this._callback = value;
    }

    dispatch(){
        if(!this._checkParams()){
            console.log("BaseAction-> dispatch-> actionType: " + this.actionType);
            throw new Error("BaseAction->  Error: 请检查参数是否设置正确");
        }
        myDispatcher.dispatch(this);
    }

    /**
     * abstract function.子类实现。Ts中暂不加abstract，编译js方法会消失。
     * Dispatch之前检查参数是否设置正确
     * @protected
     * @returns{boolean}
     */
    protected _checkParams():boolean {
        return true;
    }
}
