module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a421dc24961ac0aa42ec7c8fd65a34b'),
  },
});
