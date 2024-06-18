

interface Posts {
  id: string,
  caption: string,
  numLikes: number,
  img: string,
  createdAt: string,
  updatedAt: string,
}

const Post = ({ id, caption, numLikes, img, createdAt, updatedAt }: Posts) => {
  return (
    <div className=" w-[400px]">

    </div>
  )
}

export default Post