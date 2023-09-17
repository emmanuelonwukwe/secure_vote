
/**
 * This function helps to handle error responses of the api and should be called in the caught block of any
 *  try catch statement
 * @param {object} error - The error caught in the catch block 
 * @param {object} res - The express app response of the route which throws the error
 */
function handleCaughtErrorRes(error, res) {
    res.status(error.statusCode ?? 500);
    res.json({
        errorName: error.name,
        message: error.message,
        stackTrace: process.env.APP_ENVIRONMENT == 'development' ? error?.stack : 'No trace as app env is not in `development` mode'
    });
}

export default handleCaughtErrorRes;