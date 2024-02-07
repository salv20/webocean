
const Nav = () => {
  return (

<nav className=" fixed left-0 md:hidden bg-white w-full h-full">
<div className="container mx-auto pt-8">
<ul className="capitalize font-bold text-primary flex flex-col gap-y-8">
    <a href="#">home</a>
    <a href="#">about</a>
    <a href="#">features</a>
    <a href="#">pricing</a>
    <a href="#">blogs</a>
</ul>

<button className="btnSmall absolute bottom-28 py-4 font-bold">Get a demo</button>
</div>
</nav>
  )
}

export default Nav
