require('dotenv').config();

export const jwtConstants = {
  secret: process.env.NEST_PRIVATE_KEY_JWT_CONSTANTS,
};
