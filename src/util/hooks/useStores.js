import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

const useStores = () => {
  return useContext(MobXProviderContext);
};

export default useStores;
