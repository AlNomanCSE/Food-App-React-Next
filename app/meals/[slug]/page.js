"use client";

import { useRouter } from "next/router";

const SomeSlug = () => {
  const router = useRouter();
  const data = router.query;
  return (
    <>
      {data.title}
      <div>{data.summery}</div>
    </>
  );
};

export default SomeSlug;
