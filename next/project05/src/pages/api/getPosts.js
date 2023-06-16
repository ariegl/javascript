import connect from "../../../lib/mongodb";
import Post from "../../../models/post";

connect();

export default async function getPostHandler(req,res) {
    const post = await Post.find({}).lean();

    return res.status(200).json({message: "Lista de post", data: post});
}