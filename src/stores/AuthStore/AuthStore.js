import { action } from "mobx";
import { autobind } from "core-decorators";
import { getToken } from "util/Token";

@autobind
class AuthStore {
  @action
  handleSocialLogin = async () => {
    try {
      const data = await postRequest("/auth/socialmedia", getToken());
      return data;
    } catch (err) {
      throw err;
    }
  };
}

export default AuthStore;
