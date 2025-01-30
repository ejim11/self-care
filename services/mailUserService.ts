export const mailUser = async (
  email: string,
  subject: string,
  title: string,
  amount: number
) => {
  try {
    await fetch("/api/emailUser", {
      method: "POST",
      body: JSON.stringify({ email, subject, title, amount }),
      headers: {
        contentType: "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
