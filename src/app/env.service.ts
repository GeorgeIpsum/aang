import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public mapBox = '';

  public enableDebug = true;

  constructor() { }
}
