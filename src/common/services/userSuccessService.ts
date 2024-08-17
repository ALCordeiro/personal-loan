export const getUserData = async (userId: string) => {
  try {
    const response = await fetch(`https://clutch-interview-service.herokuapp.com/loans?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};
