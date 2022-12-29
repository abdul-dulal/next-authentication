const BASE_URL = "http://localhost:3000";

export const getUser = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const data = await res.json();
  return data;
};

export const addUser = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${BASE_URL}/api/users`, options);
    const data = res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteUser = async (id) => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(`${BASE_URL}/api/users?userId=${id}`, options);
    const data = await res.json();
    console.log(options);
    return data;
  } catch (err) {
    return err;
  }
};
