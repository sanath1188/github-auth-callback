/**
 * Redirects users to our own GitHub OAuth2.0 page
 */
exports.handler = async () => {
    const CLIENT_ID = '931bb26a620156d45488'  // SecretString stores our values as a string so we need to transform it into an object to make it easier to work with
    const Location = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo%20user`  // Standard GitHub OAuth URL learn more here: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#1-request-a-users-github-identity
    return {
        statusCode: 302,  // "302" required for AWS Lambda to permit redirects
        headers: { Location }  // "Location" header sets redirect location
    }
}
