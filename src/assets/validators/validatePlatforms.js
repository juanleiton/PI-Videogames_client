const validatePlatforms = (platforms, allPlatforms) => {
  const allPlatformNames = allPlatforms.map(platform => platform.name);
  const error0 = "At least one value must be provided for 'platforms'.";
  const error1 = "All values must be valid gaming platforms.";
  if(platforms.length < 1) return error0;
  if(!platforms.every(platform => allPlatformNames.includes(platform))) return error1;
  return "";
};

export default validatePlatforms;