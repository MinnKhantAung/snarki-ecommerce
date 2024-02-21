export const getPaginateParams = (params) => {
  const { page, limit } = params;
  return {
    page: page ?? 1,
    limit: limit ?? 10,
  };
};
