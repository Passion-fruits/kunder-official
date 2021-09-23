import { useRouter } from "next/dist/client/router";
export default function Link({ menu, route }) {
  const router = useRouter();
  return <span onClick={() => router.push("/" + route)}>{menu}</span>;
}
