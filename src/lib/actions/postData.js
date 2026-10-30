"use server";

export const postRequirements = async (data, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/requirements`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
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

export const postSupplier = async (data, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/supplier`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to post supplier");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting supplier:", error);
    throw error;
  }
};

export const postProduct = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to post product");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;
  }
};

export const postCart = async (data) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to post cart");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting cart:", error);
    throw error;
  }
};

export const postOrder = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/order/post`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    console.log("Response from postOrder:", response);
    if (!response.ok) {
      throw new Error("Failed to post order");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting order:", error);
    throw error;
  }
};
