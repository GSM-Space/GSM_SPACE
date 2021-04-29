import Main from "components/main/Main";
import { observer } from "mobx-react";
import React, { useCallback, useState } from "react";
import useStores from "util/hooks/useStores";
import { withRouter } from "react-router-dom";

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
          alert("로그인 성공");
          history.push("/petition/ongoing");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("구글 로그인을 해주세요.");
      });
  }, [handleSocialLogin, history]);

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

export default withRouter(AuthContainer);
