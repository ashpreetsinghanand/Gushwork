import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (!isAuthenticated) {
        router.push('/');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
