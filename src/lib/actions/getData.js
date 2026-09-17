"use server";

export const getUserById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/users/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};
