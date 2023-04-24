import { useRouter } from "next/router"
import GoBack from "@/components/GoBack";

const Post = () => {
  const router = useRouter();
  const {pid} = router.query
  console.log("routeeer:",router);

  return (
    <div>
      <GoBack/>
      <h1>Post: #{pid}</h1>
    </div>
  )
}

export default Post;