import { Injectable } from '@angular/core';

/**
 * Common validation regular expressions
 */
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  /**
   * Unique id value validation patten expression.
   */
  public static readonly idPatternValidatorExpression = new RegExp('^[A-Za-z]+[\\w\\-]*$');
}
