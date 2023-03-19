import { it, describe, expect } from 'vitest';
import { LocalStorageUtils } from '../../utils';

describe('LocalStorageUtils', () => {
  it('should return default value', () => {
    const defaultValue = 'default';
    const localStorageValue = LocalStorageUtils.GetValueByKey('Impossible key', defaultValue);
    expect(localStorageValue).toEqual(defaultValue);
  });
});
