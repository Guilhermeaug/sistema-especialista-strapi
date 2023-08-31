export default ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        patient: {
          field: 'slug',
          references: 'searchTitle',
        },
        group: {
          field: 'slug',
          references: 'searchTitle',
        }
      },
    },
  },
});