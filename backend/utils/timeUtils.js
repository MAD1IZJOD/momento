exports.getExpirationTime = () => {
  const now = new Date();
  now.setHours(now.getHours() + 24); // Add 24h
  return now;
};