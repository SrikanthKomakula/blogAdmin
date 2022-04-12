export class Alert{
  id?:string;
  type?: AlertType;
  message?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
  fade?:boolean;


  // constructor(id:string, type:AlertType, message:string, autoClose:boolean, keepAfterRouteChange: boolean, fade:boolean){
  //   this.id = id;
  //   this.type = type;
  //   this.message = message;
  //   this.autoClose = autoClose;
  //   this.keepAfterRouteChange = keepAfterRouteChange;
  //   this.fade = fade;
  // }

  constructor(init?:Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType{
  Success,
  Error,
  Info,
  Warning
}
