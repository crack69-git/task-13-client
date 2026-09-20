"use server";

export const patchPostStatus = async (id, status) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/updatePostStatus/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error patching post status:", error);
    throw error;
  }
};

export const patchDelivaryStatus = async (id, delivaryStatus) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/updateDeliveryStatus/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ delivaryStatus }),
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error patching delivary status:", error);
    throw error;
  }
};
