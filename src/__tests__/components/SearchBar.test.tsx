import { SearchBar } from '../../components';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, SpyInstance } from 'vitest';
import userEvent from '@testing-library/user-event';

const changeHandler = vi.fn();
const setUp = () => render(<SearchBar search={changeHandler} />);

describe('SearchBar component', () => {
  let setItemSpy: SpyInstance;
  let getItemSpy: SpyInstance;
  beforeEach(() => {
    setItemSpy = vi.spyOn(global.Storage.prototype, 'setItem');
    getItemSpy = vi.spyOn(global.Storage.prototype, 'getItem');
  });

  describe('should interact with localStorage', () => {
    it('should call input value handler with value from localStorage once mounted', () => {
      global.Storage.prototype.getItem = vi.fn().mockReturnValueOnce(JSON.stringify('mockedData'));
      render(<SearchBar search={changeHandler} />);
      expect(changeHandler).toHaveBeenCalledWith('mockedData');
    });

    it('should not set value if storage has no value', () => {
      global.Storage.prototype.getItem = vi.fn().mockReturnValueOnce(null);
      setUp();
      const input = screen.getByPlaceholderText(/search/i);
      expect(input).toHaveValue('');
    });

    it('should call localStorage.setItem once after unmount', () => {
      const { unmount } = setUp();
      unmount();
      expect(setItemSpy).toHaveBeenCalledTimes(1);
    });

    it('should call localStorage.getItem once in whole lifecycle', () => {
      const { unmount } = setUp();
      unmount();
      expect(getItemSpy).toHaveBeenCalledTimes(1);
    });

    it('should call setValue correctly', async () => {
      setUp();
      const STUB_VALUE = 'value for input';
      const user = userEvent.setup();
      const input = screen.getByPlaceholderText(/search/i);
      await user.type(input, STUB_VALUE);
      await user.click(screen.getByTestId(/search-button/i));
      expect(screen.getByDisplayValue(STUB_VALUE)).toBeInTheDocument();
    });
  });
});
