"use server";

export const deleteProduct = async (id) => {
  try {
    console.log("Deleting product with ID:", typeof id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/delete/product/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
