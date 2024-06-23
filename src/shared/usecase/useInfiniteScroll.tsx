import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default (queryLimit: number) => {
  const [limit, setLimit] = useState(queryLimit);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);

  const { ref, inView } = useInView();

  return { ref, inView, limit, setLimit, hasReachedLimit, setHasReachedLimit };
};
