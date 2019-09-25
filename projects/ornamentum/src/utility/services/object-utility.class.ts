const splitPathExpression = /[,[\].]+?/;

export function get(obj: any, path: string): any {
  if (obj === null || obj === undefined) {
    return obj;
  }

  return String.prototype.split.call(path, splitPathExpression)
    .filter(Boolean)
    .reduce((res, key) => {
      if (res !== null && typeof res === 'object') {
        return res[key];
      }

      return undefined;
    }, obj);
}

export function orderBy(collection: any[], fields: string[], orders: Array<'asc'|'desc'>): any {
  console.log(fields);
  return collection.concat().sort((a: any, b: any) => {
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const order = orders[i];
      if (a[field] > b[field]) {
        return order === 'asc' ? 1 : -1;
      }

      if (a[field] < b[field]) {
        return order === 'asc' ? -1 : 1;
      }
    }

    return 0;
  });
}
