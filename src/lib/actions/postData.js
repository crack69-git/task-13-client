"use server";

export const postRequirements = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/requirements`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to post requirements");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting requirements:", error);
    throw error;
  }
};
