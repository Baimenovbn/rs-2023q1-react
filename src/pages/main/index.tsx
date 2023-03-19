import { SearchBar } from '../../components';
import { useCallback } from 'react';

export default function MainPage() {
  const search = useCallback((searchValue: string) => {
    console.log(searchValue);
  }, []);

  return (
    <div>
      <SearchBar search={search} />
    </div>
  );
}
