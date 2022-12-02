import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto p-2 border-t-2 border-solid border-slate-200 bg-white md:px-6 md:py-4 ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <img src="/logo final.png" className="mr-3 h-12" alt="LeLogoSiIlExiste" />
                    <img src="/droledecap.png" className="mr-3 h-12" alt="LeLogoSiIlExiste" />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://www.sida-info-service.org" className="mr-4 hover:underline md:mr-6 ">Sida Info</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sida_info_service" className="mr-4 hover:underline md:mr-6">Insta Sexualites</a>
                    </li>
                    <li>
                        <a href="https://www.sexualites-info-sante.fr" className="mr-4 hover:underline md:mr-6 ">Sexualites info sante</a>
                    </li>
                    <li>
                        <a href="https://www.vih-info-soignants.fr" className="hover:underline">Vih info soignants</a>
                    </li>
                </ul>
            </div>
            <hr className="my-2 border-slate-400 sm:mx-auto w-1/12" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">JeSapelRoot™</a>. Tous droits réservés.
            </span>
        </footer>
    );
    
};

export default Footer;