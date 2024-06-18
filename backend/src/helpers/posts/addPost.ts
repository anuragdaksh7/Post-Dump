import connectDB from "../../db/connect";
import postModel from "../../db/schema/post.model";
import logger from "../winston/dev_logger";

export default async function AddPost({ image, caption }: { image: string, caption: string }) {
  try {
    connectDB()
    const newPost = new postModel({
      caption: caption,
      img: image,
      numLikes: 0,
    })
    await newPost.save();
    logger.info("Post saved successfully")
    return [newPost, null];
  } catch (error: any) {
    logger.error(`Error saving post: ${error.message}`, error);
    return [null, error];
  }
}