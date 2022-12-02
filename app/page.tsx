import Chambre from "../components/Scene/Chambre"
import Rue from "../components/Scene/Rue";
import Image from "next/image";
const Home = () => {
  return (
    <main>
      <section className="container-game">
        <div className="w-full text-center mt-5 object-center">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mt-2">Vous pouvez imprimer l'affiche de Drôle de Cap'  !</h1>
          <p>Deux versions disponibles, une version pour imprimeur et une pour imprimer soi-même</p>
          
        </div>
      </section>
      <div className="flex justify-center center pt-6">
          <Image src="/affiche_drole_de_cap.png" className="" width="270" height="100" alt="Affiche drole de cap"/>
          </div>
          <div className="flex justify-center pt-6 space-x-2">
          <a href="/affiche_drole_de_cap_equipe_jesapelroot.pdf" download="affiche_drole_de_cap.pdf" className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded-full">Télécharger la version imprimeur</a><a href="affiche_drole_de_cap_equipe_jesapelroot_noreperes.pdf" download="affiche_drole_de_cap.pdf" className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded-full">Télécharger la version pour soi-même</a>
          </div>
    </main>
  )
}

export default Home;