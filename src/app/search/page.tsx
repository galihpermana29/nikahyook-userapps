import { ErrorBoundary } from 'react-error-boundary';
import { SearchContainer } from './container/SearchContainer';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <SearchContainer defaultTab={searchParams.tab || 'inpiration'} />
    </ErrorBoundary>
  );
}

export default SearchPage;
