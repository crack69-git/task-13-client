"use server";

export const getUserById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/users/${id}`,
      {
        method: "GET",
        cache: "no-store",
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
        cache: "no-store",
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
        cache: "no-store",
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
        cache: "no-store",
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

export const getProducts = async ({ name = "", category = "" } = {}) => {
  try {
    const params = new URLSearchParams();

    if (name.trim()) {
      params.set("name", name.trim());
    }

    if (category.trim() && category !== "all") {
      params.set("category", category.trim());
    }

    const queryString = params.toString();

    const url = `${process.env.NEXT_PUBLIC_URL}/api/get/products${
      queryString ? `?${queryString}` : ""
    }`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  try {
    console.log("Fetching single product with ID:", id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/get/product/${id}`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/all/getProducts`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
};
