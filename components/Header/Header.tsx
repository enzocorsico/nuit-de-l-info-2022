import Link from "next/link";
import Image from "next/image";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className='w-11/12 mx-auto p-2 border-b-2 border-solid border-neutral-800 flex justify-between items-center'>
        <div>
          <Link href={""}>
            <Image src="/logo.png" alt="Logo" width="100" height="100"/>
          </Link>
        </div>
        <nav className="Header_nav">
          <Link href={""} className="mr-5">
            ACCUEIL
          </Link>
          <Link href={"/aventure"} className="mr-5">
            AVENTURE
          </Link>
          <Link href={"/story"} className="mr-5">
            HISTOIRES
          </Link>
          <Link href={"/faq"} className="mr-5">
            FAQ
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;