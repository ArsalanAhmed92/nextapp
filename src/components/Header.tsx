 import link from "next/link";
 
 
 const Navbar = () =>{
    return(
        <div className=" bg-white text-cyan-800"  >
             <li>Arsalan Ahmed</li>
            <ul className="flex gap-11 justify-center">
            <li> <link href="/">Home</link></li>
            <li> <link href="/about">About Us</link></li>   
            <li> <link href="/contact">Services</link></li>
            </ul>
        </div>
    )
}

export default Navbar