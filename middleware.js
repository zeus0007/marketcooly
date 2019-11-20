export const localsMiddleware = (req, res, next) => {
  res.locals.title = "Shopping Mall";
  next();
};
