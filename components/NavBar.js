import Link from 'next/link';

const Navbar=()=> {
      return (
            <nav className="bg-blue-800 p-4">
                  <div className="container mx-auto flex justify-between items-center">
                        <div className="text-white text-lg font-bold">
                              MyWebsite
                        </div>
                        <div className="space-x-4 text-white ">
                              <Link href="/">
                                    Home
                              </Link>
                              <Link href="/about">
                                    About
                              </Link>
                        </div>
                  </div>
            </nav>
      );
}
export default Navbar;