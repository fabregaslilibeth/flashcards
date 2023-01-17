import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

// by convention, composable function names start with "use"
export function useUser() {
  // state encapsulated and managed by the composable
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);

  // watch(
  //   () => userStore.getUser,
  //   () => {
  //     if (userStore.getUser) {
  //       const userData = userStore.getUser
  //     }
  //   },
  //   {
  //     immediate: true,
  //     deep: true,
  //   }
  // )

  // expose managed state as return value
  return { user, userStore };
}
