import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import BudgetContainer from './container/BudgetContainer';

const Budget = async () => {
  return (
    <div className="bg-ny-gray-50">
      <BudgetContainer />
      <BottomNav />
    </div>
  );
};

export default Budget;
