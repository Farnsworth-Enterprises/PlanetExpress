require("dotenv").config();

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Authentication middleware. When used, the access token must exist and be verified against the Auth0 JSON Web Key Set (JWKS) endpoint.
// If the token is valid, req.user will be set with the JSON object decoded from the token.
// If the token is invalid, a 401 Unauthorized response will be sent.
const checkJwt = jwt.expressjwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `${process.env.ISSUER_BASE_URL}.well-known/jwks.json`,
	}),

	// Validate the audience and the issuer.
	audience: process.env.CLIENT_ID,
	issuer: process.env.ISSUER_BASE_URL,
	algorithms: ["RS256"],
});

module.exports = { checkJwt };
