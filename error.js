// file:///F:/Mern%20Project%20Remasterd/server/error.js
export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
