const errorCodes = require('../../../enums/error_codes.enum');
module.exports.errorHandlers = () => ({
  functionNotFound: (message) => ({
    success: false,
    error_code: errorCodes.FUNCTION_NOT_FOUND,
    message: !message ? 'The Function not found.' : message,
  }),
  insufficientPermissions: (message) => ({
    success: false,
    error_code: errorCodes.INSUFFICIENT_PERMISSIONS,
    message: !message ? "You don't have permission to perform this action." : message,
  }),
  dataAlreadyExist: (message) => ({
    success: false,
    error_code: errorCodes.DATA_ALREADY_EXISTS,
    message: !message ? 'The data is already exist' : message,
  }),
  internalErrorServer: (message) => ({
    success: false,
    error_code: errorCodes.INTERNAL_SERVER_ERROR,
    message: !message ? 'Oops! Something went wrong on our end. Please try again later.' : message,
  }),
  validationError: (message) => ({
    success: false,
    error_code: errorCodes.VALIDATION_ERROR,
    message: !message ? 'Invalid request data.' : message,
  }),
  invalidRequestBody: (message) => ({
    success: false,
    error_code: errorCodes.INVALID_REQUEST_BODY,
    message: !message ? 'Invalid request body. Please check the required keys.' : message,
  }),
  invalidCredentials: (message) => ({
    success: false,
    errorCode: errorCodes.INVALID_CREDENTIALS,
    message: !message ? 'Invalid email or password.' : message,
  }),
  dataAlreadyVerified: (message) => ({
    success: false,
    error_code: errorCodes.DATA_ALREADY_VERIFIED,
    message: !message ? 'The verification code has already been verified.' : message,
  }),
  dataVerifiedNotFound: (message) => ({
    success: false,
    error_code: errorCodes.DATA_VERIFIED_NOT_FOUND,
    message: !message ? 'Verification code not found.' : message,
  }),
  dataVerifiedExpired: (message) => ({
    success: false,
    error_code: errorCodes.DATA_VERIFIED_EXPIRED,
    message: !message ? 'Verification code is expired and deleted.' : message,
  }),
  dataPendingToConfirmed: (message) => ({
    success: false,
    error_code: errorCodes.DATA_PENDING_TO_CONFIRM,
    message: !message ? 'Code to be confirmed' : message,
  }),
  duplicateCredentials: (message) => ({
    success: false,
    error_code: errorCodes.DUPLICATE_CREDENTIALS,
    message: !message ? 'Phone number or email already registered.' : message,
  }),
  invalidData: (message) => ({
    success: false,
    error_code: errorCodes.INVALID_DATA,
    message: !message ? 'Phone number or email already registered.' : message,
  }),
  missingAuthCookie: (message) => ({
    success: false,
    error_code: errorCodes.MISSING_AUTH_COOKIE,
    message: !message ? 'Authentication token not found in request cookies' : message,
  }),
  dataIdRequired: (message) => ({
    success: false,
    error_code: errorCodes.DATA_ID_REQUIRED,
    message: !message ? 'Data id is required' : message,
  }),
  invalidObjectId: (message) => ({
    success: false,
    error_code: errorCodes.INVALID_OBJECT_ID,
    message: !message
      ? 'The id provided in the parameter is not a valid ObjectId format.'
      : message,
  }),
  dataInvalidFormat: (message) => ({
    success: false,
    error_code: errorCodes.DATA_INVALID_FORMAT,
    message: !message ? 'Invalid date format. Please use MM/DD/YY.' : message,
  }),
});
