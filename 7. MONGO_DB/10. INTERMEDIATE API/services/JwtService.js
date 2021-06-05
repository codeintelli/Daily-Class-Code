import { JWT_SECURE } from "../config";
import jwt from "jsonwebtoken";
class JwtService {
  static sign(payload, expiry = "360s", secret = JWT_SECURE) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
  static verify(token, secret = JWT_SECURE) {
    return jwt.verify(token, secret);
  }
}

export default JwtService;
