import { v4 } from "uuid";

export default function genId(): string {
  const gen = v4();
  return gen.substring(3, 15);
}
