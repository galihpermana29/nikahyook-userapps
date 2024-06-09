export default (obj: any) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => k !== undefined && v !== undefined)
  );
};
