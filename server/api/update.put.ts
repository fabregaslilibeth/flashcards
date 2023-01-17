import { getQuery } from "h3";
import { edit } from "../lib/firestore";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { col, id } = getQuery(event);

    const body = await readBody(event);
    await edit(col, id, body);

    return { result: id }
  } catch (error) {
    return { error: error.message }
  }
});