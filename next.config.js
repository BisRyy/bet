module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: '',
    // DB
    MONGODB_URI:
      process.env.MONGODB_URI ||
      'mongodb+srv://beteliq:RlQCd4IEn7JdrLQN@cluster0.7p9heea.mongodb.net/?retryWrites=true&w=majority',
    // CLOUD
    REACT_APP_CLOUD_NAME: 'dbyn25cyp',
    REACT_APP_CLOUD_API_KEY: '785511957617838',
    REACT_APP_CLOUD_API_SECRET: 'jE2ugA9Cc0nhvXG7V3BiuzYaEtY',
    REACT_APP_CLOUDINARY_URL: 'cloudinary://785511957617838:jE2ugA9Cc0nhvXG7V3BiuzYaEtY@dbyn25cyp',

    // MAPBOX
    MAPBOX_API: '',
    // FIREBASE
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APPID: '',
    FIREBASE_MEASUREMENT_ID: '',
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0
    AUTH0_DOMAIN: '',
    AUTH0_CLIENT_ID: '',
  },
};
