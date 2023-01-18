import { UserInfo } from './../utils/types/user';

interface State {
  user: UserInfo | null
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    user: null,
  }),

  getters: {
    getActiveUserById(state) {
      return state.user
    },
  },
  actions: {
    setUser(newUser: UserInfo) {
      this.user = newUser
    },
  },
})
