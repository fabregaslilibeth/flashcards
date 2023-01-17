import { UserInfo } from './../utils/types/user';

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

interface State {
  user: UserInfo | null
}