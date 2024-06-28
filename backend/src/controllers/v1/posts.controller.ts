import { Request, Response } from "express";
import RESPONSES from "../../utils/response";
import logger from "../../helpers/winston/dev_logger";
import AddPost from "../../helpers/posts/addPost";
import GetSinglePost from "../../helpers/posts/getSinglePost";
import GetAllPosts from "../../helpers/posts/getAllPosts";
import DBClient from "../../prisma";

const addPost = async (req: Request, res: Response) => {
  try {
    if (!req.file) return RESPONSES.badRequestResponse(res, "File not found");

    logger.info("File uploaded "+ req.file.filename);

    const caption = req.body.caption;

    const [newPost, newPostErr] = await DBClient.PostsSchemaClient.createPost({image: req.file.filename, caption: caption})
    if (newPostErr) {
      logger.error("Error saving post: "+ newPostErr.message, newPostErr);
    }
    return RESPONSES.successResponse(res,newPost,"post successfully uploaded")
  } catch (error: any) {
    logger.error(`Error while adding post : ${error.message} `, error);
    return RESPONSES.internalServerError(res, error.message, error)
  }
}

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    if (postId.length!=24) return RESPONSES.badRequestResponse(res,"invalid post id")
    const [post, postErr] = await DBClient.PostsSchemaClient.getPost({id:postId})
    if (postErr) {
      return RESPONSES.internalServerError(res, postErr.message, postErr)
    }

    return RESPONSES.successResponse(res, post, "post fetched successfully")
  } catch (error: any) {
    logger.error(`Error while adding post : ${error.message} `, error);
    return RESPONSES.internalServerError(res, error.message, error)
  }
}

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const [posts, postsErr] = await DBClient.PostsSchemaClient.getPosts();
    if (postsErr) {
      return RESPONSES.internalServerError(res, postsErr.message, postsErr)
    }

    logger.info("all posts fetched successfully")
    return RESPONSES.successResponse(res, posts, "posts fetched successfully")
  } catch (error: any) {
    logger.error(`Error while fetching all posts: ${error.message}`, error)
    return RESPONSES.internalServerError(res, error.message, error)
  }
}

const posts_controller = {
  addPost: addPost,
  getSinglePost: getSinglePost,
  getAllPosts: getAllPosts,
}

export default posts_controller