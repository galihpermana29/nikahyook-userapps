import { getBudgetById } from '@/shared/actions/budgetService';
import SubrouteHeader from '../../container/Header/SubrouteHeader';
import BudgetEditContainer from './container/BudgetEditContainer';

const BudgetEdit = async ({ params }: { params: { budgetId: string } }) => {
  const { data } = await getBudgetById(params.budgetId);

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <>
      <SubrouteHeader backUrl={'/budget'} title="Edit Budget" />
      <BudgetEditContainer id={params.budgetId} data={data} />
    </>
  );
};

export default BudgetEdit;
