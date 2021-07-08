import { IOdpovednost } from '../_interfaces/odpovednost';
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  public data: IOdpovednost;
  public vprodukt;
  constructor() { }
}
