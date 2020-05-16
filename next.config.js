module.exports = {
  exportTrailinglash: true,
  exportPathMap: function () {
    const paths = {
      "/": { page: "/index" },
      "/cart": { page: "/cart" },
      "/about": { page: "/about" }
    };

    return paths;
  },
};
