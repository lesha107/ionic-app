function deepSearchInObject<T>(base: Partial<T>, value: Partial<T>, field: keyof T): T | undefined {
  let findedValue;

  for (const key in base) {
    if (Object.prototype.hasOwnProperty.call(base, key)) {
      const item = base[key];

      const nestedValue = Array.isArray(item)
        ? deepSearchInArray(item, value, field)
        : typeof item === "object"
        ? deepSearchInObject(item, value, field)
        : null;

      if (nestedValue) {
        findedValue = nestedValue;
        break;
      }
    }
  }

  return findedValue;
}

function deepSearchInArray<T>(base: Array<T>, value: Partial<T>, field: keyof T): T | undefined {
  let findedValue;

  for (let i = 0; i < base.length; i++) {
    const item = base[i];

    if (item[field] === value[field]) {
      findedValue = item;
      break;
    }

    const nestedValue = Array.isArray(item)
      ? deepSearchInArray(item, value, field)
      : typeof item === "object"
      ? deepSearchInObject(item, value, field)
      : null;

    if (nestedValue) {
      findedValue = nestedValue;
      break;
    }
  }

  return findedValue;
}

export function appDeepSearch<T>(base: T[] | Partial<T>, value: Partial<T>, field: keyof T): T | undefined {
  return Array.isArray(base)
    ? deepSearchInArray(base, value, field)
    : typeof base === "object"
    ? deepSearchInObject(base, value, field)
    : null;
}
