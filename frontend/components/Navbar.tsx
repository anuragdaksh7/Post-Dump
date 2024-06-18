import Link from "next/link"

const Navbar = () => {
  return (
    <div className=" bg-[rgba(17,24,39,0.79)] px-[200px] text-4xl text-white text-bold py-6 font-mono flex backdrop-blur-5 backdrop-filter backdrop-blur-sm justify-between fixed w-full z-20">
      <Link href={"/"}>PostIt</Link>
    </div>
  )
}

export default Navbar