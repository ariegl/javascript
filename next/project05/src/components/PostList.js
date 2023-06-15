import React, {useRef} from "react";
import { Avatar } from "@fluentui/react-components";

function Card() {
    const commentInput = useRef(null);
    const handleInput = (e) => {
        if (commentInput.current) {
            commentInput.current.style.height = `${e.target.scrollHeight}px`;
        }
      };

  return (
    <div className="border bg-slate-200 border-gray-300 w-full my-4 px-10">
      <div className="header py-4 flex justify-between items-center">
        <div className="flex justify-start items-center">
          <Avatar
            initials={"user"}
            color="royal-blue"
            name="pumpkin avatar"
            size={64}
          ></Avatar>
          <div className="flex justify-start items-center flex-wrap ps-4">
            <span className="w-full text-lg">
              <strong>Ariel</strong>
            </span>
            <span className="w-full font-light">hace 2 minutos</span>
          </div>
        </div>
        <div id="titlePost">
            <p className="w-full font-bold text-xl">TITLE</p>
            <p className="w-full font-bold text-yellow-700 text-lg">date</p>
        </div>
      </div>
      <div className="body py-4 flex">
        <div className="">
            <div style={{width: "390px",float:"left",}}>
                <img className="pe-4" style={{objectFit: "cover"}} src="https://humanidades.com/wp-content/uploads/2016/07/periodico-1-e1560064213147.jpg"/>
            </div>
            <span className="tracking-wide text-justify">
            Dolor fugiat aliqua voluptate non officia in esse velit enim. Do non
            veniam anim deserunt aliqua amet tempor non velit. Dolor in veniam
            incididunt incididunt tempor mollit non dolor id veniam occaecat.
            Irure esse magna minim consectetur ipsum officia anim. Sint aute magna
            ullamco laboris consectetur ex officia nostrud eiusmod consectetur
            Lorem. In veniam eiusmod tempor nisi fugiat eiusmod voluptate. Est do
            quis anim do magna commodo anim sunt non minim exercitation sint
            dolore. Occaecat sit ea incididunt velit sint minim exercitation et
            irure. Laborum labore Lorem est eiusmod quis laboris magna occaecat
            irure deserunt. Ullamco magna sunt adipisicing aliquip eiusmod laboris
            magna exercitation dolore Lorem. Tempor dolor elit est laboris dolor.
            Irure enim eiusmod laborum non. Incididunt exercitation enim nulla
            aliquip veniam mollit. Laboris duis velit aliquip reprehenderit
            excepteur duis labore. Incididunt esse labore eiusmod Lorem duis
            laboris labore amet consectetur nulla.

            Ullamco magna sunt adipisicing aliquip eiusmod laboris
            magna exercitation dolore Lorem. Tempor dolor elit est laboris dolor.
            Irure enim eiusmod laborum non. Incididunt exercitation enim nulla
            aliquip veniam mollit. Laboris duis velit aliquip reprehenderit
            excepteur duis labore. Incididunt esse labore eiusmod Lorem duis
            laboris labore amet consectetur nulla.
            </span>
        </div>
      </div>
      <div className="footer pb-4">
        <div className="like"></div>
        <div className="comments"></div>
        <div className="newComment flex justify-between items-start">
            <textarea onInput={handleInput} ref={commentInput} className="w-10/12 resize-none max-h-96 py-2 px-2" rows={2} placeholder="Escribe un comentario"></textarea>
            <button className="W-3/12 bg-slate-400 px-10 py-3">SEND</button>
        </div>
      </div>
    </div>
  );
}

function PostList() {
  return (
    <div className="w-full flex justify-center item-start flex-wrap">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default PostList;
