export const isAdmin = () => {
  return import.meta.env.VITE_IS_ADMIN === "true";
};
