import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id} of this page</div>;
}
