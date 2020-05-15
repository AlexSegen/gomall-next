module.exports = {
  exportTrailinglash: true,
  exportPathMap: function () {
    const paths = {
      "/": { page: "/Index" },
      "/cart": { page: "/Cart" },
      "/about": { page: "/About" }
    };

    return paths;
  },
};
