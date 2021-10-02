import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { user } from './user';
import {environment} from '../environments/environment';

@Injectable()
export declare class SweetAlertService {
  constructor();
  swal(): any;
  confirm(options: any): any;
  prompt(options: any): any;
  alert(options: any): any;
  question(options: any): any;
  success(options: any): any;
  warning(options: any): any;
  error(options: any): any;
  info(options: any): any;
}
