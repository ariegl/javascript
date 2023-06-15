import PostList from "../components/PostList";

function Dashboard() {

  return (
    <div className="flex justify-center items-center w-full min-h-screen h-auto">
      <div id="PostListContainer" className="w-6/12">
        <PostList/>
      </div>
    </div>
  );
}

export default Dashboard;
