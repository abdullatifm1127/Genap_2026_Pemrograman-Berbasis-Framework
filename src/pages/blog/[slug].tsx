import { useRouter } from "next/router";

export default function BlogSlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Blog Page</h1>
      <p>Slug: <strong>{slug}</strong></p>
    </div>
  );
}