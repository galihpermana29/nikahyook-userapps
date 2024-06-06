'use client';

import { useEffect, useState } from 'react';

// INFO: this can be used to avoid hydration errors, or show a different components when client components isn't mounted yet.
// EXAMPLE:
// export default function Component() {
//    const mounted = useMounted();
//
//    if (!mounted) return <LoadingComponent />
//
//    return <RealComponent />
// }

export default function useMounted() {
  // Whenever component is not mounted, return mounted as false
  const [mounted, setMounted] = useState(false);

  // Right when component is mounted, set mounted as true and return mounted
  useEffect(() => setMounted(true), []);

  return mounted;
}
