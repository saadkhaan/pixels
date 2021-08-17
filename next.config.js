module.exports = {
  async redirects() {
    return [
      {
        source: "/projects/newspage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects/cwl",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects/limousine-web-design",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects/valleydez",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
