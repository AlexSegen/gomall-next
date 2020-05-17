module.exports = {
  exportTrailinglash: true,
  exportPathMap: function () {
    const paths = {
      "/": { page: "/" },
      "/cart": { page: "/cart" },
      "/about": { page: "/about" }
    };

    return paths;
  },
};
