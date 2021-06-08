//[ ] all error throw by Custom user / programmer
class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static alreadyExists(message) {
    return new CustomErrorHandler(409, message);
  }
  static wrongCredentials(message = "Username And Password Is Wrong") {
    return new CustomErrorHandler(401, message);
  }
  static unAuthorized(message = "User Unauthorized") {
    return new CustomErrorHandler(401, message);
  }
  static UserNotFound(message = "User Not Found") {
    return new CustomErrorHandler(404, message);
  }
  static ServerError(message = "Internal server error") {
    return new CustomErrorHandler(500, message);
  }
}
export default CustomErrorHandler;
