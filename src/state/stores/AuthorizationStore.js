import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const AuthorizationStore = new Store("authorization", {
  data: {
  login: '',
    password: ''
  },
  options: {
    shouldInitFromState: true,
    stateKey: "authorization",
  },
  reducers: [
    {
      type: LOGIN,
      action(state, payload) {
        // разобраться
        return {
          ...state,
          login: payload.login,
          password: payload.password
        };
      },
    },
    {
      type: LOGOUT,
      action(state) {
        return {
          ...state,
          login: '',
          password: ''
        };
      },
    },
  ],
});

Registry.addStore(AuthorizationStore);
export { AuthorizationStore };
