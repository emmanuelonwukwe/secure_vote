
import Controller from "./Controller.js";
import TokenController from "./TokenController.js";

class UserController extends Controller {
  constructor(token) {
    super();
    this.token = token;
  }

  /**
   * This function gets the user who has the token
   * @param {object} data - The object of the election
   * @returns {object}
   */
  getUser() {
    const payload = TokenController.verifyToken(this.token);
    const user = payload.data;
    return user;
  }

  /**
   * This function gets the user Id who has the token
   */
  getId() {
    return this.getUser().id;
  }

  /**
   * This returns the user role
   */
  getRole() {
    return this.getUser().role;
  }
}

export default UserController;
