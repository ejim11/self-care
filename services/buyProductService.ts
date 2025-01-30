/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export const buyProduct = async (priceId: string, router: Function) => {
  try {
    const res = await fetch("/api/checkout_session", {
      method: "POST",
      body: JSON.stringify([
        {
          price: priceId,
          quantity: 1,
        },
      ]),
      headers: {
        contentType: "application/json",
      },
    });

    const data = await res.json();

    router(data.sessionUrl);
  } catch (err) {
    console.log(err);
  }
};
