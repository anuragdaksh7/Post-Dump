import connectDB from "../../db/connect";
import postModel from "../../db/schema/post.model";
import logger from "../winston/dev_logger";


export default async function GetSinglePost({ id }: {id:string}) {
  try {
    connectDB();
    const post = await postModel.findOne({_id:id});

    logger.info(`Found post ${post} with id ${id}`);
    return [post, null]
  } catch (error : any) {
    logger.error(`Failed to get post with id ${id} ${error.message}`, error);
    return [null, error]
  }
}