export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      user: null,
    }
  },
})

interface State {
  user: UserInfo | null
}

interface UserInfo {
  email: string
  age: number
}