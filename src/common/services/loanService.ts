export const submitLoanApplication = async (amount: number, loanPurpose: string, loanMonths: string) => {
  if (loanPurpose === 'API Error') {
    throw new Error('Simulated API error');
  }

  try {
    const response = await fetch('https://clutch-interview-service.herokuapp.com/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, loanPurpose, terms: Number(loanMonths), offerId: '1234' }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Received non-JSON response");
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit loan application');
    }

    return await response.json();
  } catch (error) {
    console.error('Error posting to /submissions:', error);
    throw error;
  }
};
