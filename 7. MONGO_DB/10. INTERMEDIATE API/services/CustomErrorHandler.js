//[ ] all error throw by Custom user / programmer
class CustomErrorHandler extends Error {
  constructor(status, msg) {
    this.status = status;
    this.message = msg;
  }

  static alreadyExists(message) {
    return new CustomErrorHandler(409, message);
  }
}
export default CustomErrorHandler;
