import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, push } = useRouter();

  useEffect(() => {
    push(PATH_DASHBOARD.eCommerce.shop);
  }, [pathname]);

  return null;
}