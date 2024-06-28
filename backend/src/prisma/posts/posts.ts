import { PrismaClient } from "@prisma/client"
import logger from "../../helpers/winston/dev_logger"

const getPosts = async () => {
  const prisma = new PrismaClient()
  try {
    const posts = await prisma.posts.findMany()
    await prisma.$disconnect()
    return [posts, null]
  } catch (error: any) {
    logger.error(`Error occured while getting posts: ${error.message}`, error)
    await prisma.$disconnect()
    return [null, error]
  }
}

const getPost = async ({ id }:{id: any}) => {
  const prisma = new PrismaClient()
  try {
    const post = await prisma.posts.findUnique({
      where: {
        id: id
      }
    })
    await prisma.$disconnect()
    logger.info(`Post ${post?.id} found`)
    return [post, null]
  } catch (error: any) {
    logger.error(`Error occured while getting post: ${error.message}`, error)
    await prisma.$disconnect()
    return [null, error]
  }
}

const createPost = async ({ image, caption }:{ image: string, caption: string}) => {
  const prisma = new PrismaClient()
  try {
    const post = await prisma.posts.create({
      data: {
        img: image,
        caption: caption,
        v: 0,
        createdAt: new Date(),
        numLikes: 0,
        updatedAt: new Date(),
      }
    })
    await prisma.$disconnect()
    logger.info(`post created! ${post}`)
    return [post, null]
  } catch (error: any) {
    await prisma.$disconnect()
    logger.error(`Error while creating post ${error.message}`, error)
    return [null, error]
  }
}

const PostsSchemaClient = {
  getPosts: getPosts,
  getPost: getPost,
  createPost: createPost,
}

export default PostsSchemaClient;