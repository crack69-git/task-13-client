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

export const getPosts = async (token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/getPosts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPostById = async (id, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/getPosts/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
};

export const getSupplierById = async (id, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/supplier/single/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching supplier by ID:", error);
    throw error;
  }
};
