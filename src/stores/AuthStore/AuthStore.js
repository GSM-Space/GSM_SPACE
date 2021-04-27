import { action } from "mobx";
import { autobind } from "core-decorators";
import { getToken } from "util/Token";
import { postRequest } from "util/Axios";

@autobind
class AuthStore {
  @action
  handleSocialLogin = async () => {
    try {
      const data = await postRequest("/api/auth/socialmedia", null, getToken());
      return data;
    } catch (err) {
      throw err;
    }
  };
}

export default AuthStore;
