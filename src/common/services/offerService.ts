export const fetchOffer = async (amount: number, loanPurpose: string, loanMonths: string) => {
  try {
    const response = await fetch('https://clutch-interview-service.herokuapp.com/offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount, loanPurpose: loanPurpose, terms: Number(loanMonths) }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Received non-JSON response");
    }

    return await response.json();
  } catch (error) {
    console.error('Error posting to /offers:', error);
    throw error;
  }
};
