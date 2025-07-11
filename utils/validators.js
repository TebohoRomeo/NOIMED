export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateNationalId = (id) => {
  return /^[0-9]{13}$/.test(id); // Adjust for your country format
};

