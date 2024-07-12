import SubrouteHeader from '../container/Header/SubrouteHeader';
import BudgetAddContainer from './container/BudgetAddContainer';

function BudgetAdd({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const callbackUrl = searchParams['callback-url'] as string | undefined;

  return (
    <>
      <SubrouteHeader title="Add Budget" />
      <BudgetAddContainer callbackUrl={callbackUrl} />
    </>
  );
}

export default BudgetAdd;
