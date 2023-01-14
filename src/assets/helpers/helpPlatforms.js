const helpPlatforms = (platforms, newPlatform) => {
  if(platforms.includes(newPlatform)) {
    return platforms.filter(platform => platform !== newPlatform);
  }
  else {
    return [...platforms, newPlatform].sort();
  };
};

export default helpPlatforms;