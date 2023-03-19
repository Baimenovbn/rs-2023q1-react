export enum LOCAL_STORAGE_KEYS {
  SEARCH_INPUT = 'search-input',
}

export class LocalStorageUtils {
  static GetValueByKey<ValueType>(key: LOCAL_STORAGE_KEYS | string, defaultValue: ValueType) {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item) as ValueType;
      }
    } catch (e) {
      return defaultValue;
    }

    return defaultValue;
  }

  static SetValueByKey<T>(key: LOCAL_STORAGE_KEYS | string, value: T) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
