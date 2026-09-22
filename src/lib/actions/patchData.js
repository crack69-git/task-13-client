"use server";

export const patchPostStatus = async (id, status, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/updatePostStatus/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
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

export const patchDelivaryStatus = async (id, delivaryStatus, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/updateDeliveryStatus/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
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
