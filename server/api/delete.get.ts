import { getQuery } from "h3";
import { del } from "../lib/firestore";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { col, id } = getQuery(event);

    await del(col, id);

    return { result: id }
  } catch (error) {
    return { error: error.message }
  }
});