import Main from "components/main/Main";
import { observer } from "mobx-react";
import React, { useCallback, useState } from "react";
import useStores from "util/hooks/useStores";

const AuthContainer = observer(({ history }) => {
  const { store } = useStores();
  const { handleSocialLogin } = store.AuthStore;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const requestSocialLogin = useCallback(async () => {
    await handleSocialLogin()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [handleSocialLogin]);

  return (
    <Main
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      requestSocialLogin={requestSocialLogin}
    />
  );
});

export default AuthContainer;
