import { Injectable } from '@angular/core';

import { isNull } from 'lodash';

/**
 * Class representing data storage service.
 * @class DataStorageService.
 */
@Injectable()
export class DataStorageService {

  /**
   * Serialize the data value.
   * @returns Json stringified value.
   */
  private static serialize(value: any): string {
    return JSON.stringify(value);
  }

  /**
   * Deserialize the data value.
   * @returns Json parsed value.
   */
  private static deserialize(value: any): any {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value || undefined;
    }
  }

  /**
   * Set the local storage data.
   * @param lsKey - The local storage key name.
   * @param lsVal - The local storage key's value.
   */
  private static setData(lsKey: string, lsVal: any): void {
    window.localStorage.setItem(lsKey, lsVal);
  }

  /**
   * Get the local storage data.
   * @param lsKey - The local storage key name.
   * @returns local - The storage key's value.
   */
  private static getData(lsKey: string): any {
    return isNull(window.localStorage.getItem(lsKey)) ? '' : window.localStorage.getItem(lsKey);
  }

  /**
   * Set the storage data.
   * @param key - The storing name.
   * @param value - The storing value.
   */
  public set(key: string, value: any): void {
    DataStorageService.setData(key, DataStorageService.serialize(value));
  }

  /**
   * Get the storage data.
   * @param key - The storing name.
   * @returns storage - The value of key.
   */
  public get(key: string): any {
    return DataStorageService.deserialize(DataStorageService.getData(key));
  }
}
