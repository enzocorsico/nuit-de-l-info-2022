import Link from "next/link";
import Image from "next/image";

const aventure = () => {
    return (
      <section className="container-adventure w-full flex flex-col items-center">
        <div className="h-2/5 flex flex-col justify-around">
          <h1 className="text-2xl font-bold text-gray-900 text-center">Voici votre première aventure !</h1>
          <p className="text-xl font-bold text-gray-900 text-center">Nous vous proposons une petite aventure interactive afin de vous sensibiliser à faire les bons choix.</p>
          <p className="text-gray-900 text-center">Vous vous réveillez en vous demandant quel jour nous sommes, suite à cela vous vous rappelez que vous devez
            rejoindre votre copine/copain chez elle/lui ce soir, et qu'elle/il est seul(e) !</p>
        </div>
        <div className="container-mc-button h-3/5 flex justify-center items-center relative">
          <Image src="/logo2.png" className="logo-mc-button absolute z-10 left-0" alt="Logo 2" width="50" height="50"/>
          <Link href={"/jeu"}>
          <div className="mc-button mc-full">
            <div className="mc-title text-xl tracking-wider font-bold text-gray-900">JOUER !</div>
          </div>
          </Link>
        </div>
      </section>
    );
  }
  
  export default aventure
  