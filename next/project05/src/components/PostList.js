import React, {useRef, useEffect, useState} from "react";
import { Avatar } from "@fluentui/react-components";
import axios from "axios";
import SendIcon from '@mui/icons-material/Send';
import SkeletonPost from "../skeletons/posts/skeletonPost";

function Card(props) {
    const {author, date, description, title, commentsActive, image} = props;
    const commentInput = useRef(null);
    const handleInput = (e) => {
        if (commentInput.current) {
            commentInput.current.style.height = `${e.target.scrollHeight}px`;
        }
        console.log(e.target.scrollHeight);
      };

  return (
    <div className="border bg-slate-200 border-gray-300 w-full my-4 px-10">
      <div className="header w-full py-4 flex justify-between items-center">
        <div className="flex justify-start items-center">
          <Avatar
            initials={"user"}
            color="royal-blue"
            name="pumpkin avatar"
            size={56}
          ></Avatar>
          <div className="flex justify-start items-center flex-wrap ps-4">
            <span className="w-full text-md">
              <strong>{author}</strong>
            </span>
            <span className="w-full font-light text-md">{date}</span>
          </div>
        </div>
        <div id="titlePost" className="flex flex-wrap justify-end items-center">
            <p className="w-full font-bold text-xl text-end">{title}</p>
            <p className="w-full font-bold text-yellow-700 text-end text-lg">{date}</p>
        </div>
      </div>
      <div className="body py-4 flex">
        <div className="">
            <span className="tracking-wide text-justify">
            {description}
            </span>
            <div className="flex mt-3 w-full" style={{maxHeight: "200px"}}>
                <img className="pe-4" style={{objectFit: "cover"}} src={image}/>
            </div>
        </div>
      </div>
      <div className="footer pb-4">
        <div className="like"></div>
        <div className="comments"></div>
        {commentsActive ? (
        <div id="newCommentSection" className="newComment flex justify-between items-end bg-white rounded-xl shadow-lg">
          <textarea onInput={handleInput} ref={commentInput} className="w-11/12 bg-white overflow-hidden rounded-xl resize-none max-h-72 py-2 px-2 outline-0 focus:outline-none" rows={4} placeholder="Escribe un comentario"></textarea>
          <button className=" bg-green-200 px-2 py-2 rounded-xl mb-2 mr-2"><SendIcon fontSize="small"></SendIcon></button>
        </div>
        ) : false}
      </div>
    </div>
  );
}

function PostList() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try{
        const res = await axios.get("/api/getPosts");

        if(res.status === 200) {
          setPosts(res.data.data);
          //setIsLoading(false);
          console.log(res.data.data);
        }

      }catch(error) {
        console.log("error",error);
      }
    }

    getData();
  },[])

  return (
    <div className="w-full flex justify-center item-start flex-wrap">
      {
        isLoading === false ? (
          posts.map((element,index) => (
            <Card key={`card-post-${index}`} author={element.author} date={element.date} description={element.description} title={element.title} commentsActive={element.commentsActive} image={element.image}/>
          ))
        ) : (
          <SkeletonPost/>
        )
      }
    </div>
  );
}

export default PostList;
