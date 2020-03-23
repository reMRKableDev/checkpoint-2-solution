const posterFallback = e => {
  e.target.onerror = null;
  e.target.src = "https://via.placeholder.com/300x450";
};

export default posterFallback;
