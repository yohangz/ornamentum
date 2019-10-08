/**
 * Data table socket filter fetch model.
 */
export interface DataTableSocketFilterOptionsQuery {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Column field name.
   */
  field: string;

  /**
   * Filter text.
   */
  filter?: string;

  /**
   * Offset value (Start index).
   */
  offset?: number;

  /**
   * Data limit (Page size).
   */
  limit?: number;
}
