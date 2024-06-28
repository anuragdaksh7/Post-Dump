import connectDB from "../../db/connect";
import postModel from "../../db/schema/post.model";
import logger from "../winston/dev_logger";


export default async function GetAllPosts() {
  try {
    connectDB();
    const posts = await postModel.find();
    
    logger.info("Fount " + posts.length + " posts")
    return [posts, null]
  } catch (error: any) {
    logger.error(`Error while fetching posts from db: ${error.message}`, error)
    return [null, error]
  }
}