export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
        resource_type: "raw",
      },
      actionOptions: {
        upload: {
          folder: "uploads",
        },
        delete: {},
      },
    },
  },
});
