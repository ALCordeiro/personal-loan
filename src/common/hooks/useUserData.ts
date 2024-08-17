import { useState, useEffect } from 'react';
import { getUserData } from '../services/userSuccessService';

export const useUserData = (userId: string) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userId);
        setUserData(data);
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { userData, loading, error };
};
