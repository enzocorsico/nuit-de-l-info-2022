"use client"

import { useState } from "react";
import Dialog from "../../components/Jeu/Dialog";
import SceneNav from "../../components/Jeu/SceneNav";
import Chambre from "../../components/Scene/Chambre";
import Pharmacie from "../../components/Scene/Pharmacie";
import Rue from "../../components/Scene/Rue";

const Jeu = () => {
    const [indexScene, setIndexScene] = useState(0);
    const [dialogChambre, setDialogChambre] = useState<{nom: string, text: string}[]>([]);

    const [dialogRue, setDialogRue] = useState<{nom: string, text: string}[]>([]);

    const [dialogPharmacie, setDialogPharmacie] = useState<{nom: string, text: string}[]>([]);

    const handleChangeScene = (scene: number) => {
        setIndexScene(scene);
    }
    
    const handleOpenDialogChambre = (object: {nom: string, text: string}[]) => {
        setDialogChambre(object);
    }

    const handleOpenDialogRue = (object: {nom: string, text: string}[]) => {
        setDialogRue(object);
    }
    const handleOpenDialogPharmacie = (object: {nom: string, text: string}[]) => {
        setDialogPharmacie(object);
    }

    return (
        <div className="flex flex-col relative h-150 w-100 min-w-50 mx-auto my-8 border-2 border-black rounded-md overflow-hidden">
            <div className="h-full w-full whitespace-nowrap transition duration-500" style={{ transform: `translateY(-${ indexScene * 100}%)` }}>
                <div className="flex items-center h-full w-full bg-gray-800">
                    <Dialog dialogues={dialogChambre}/>
                    <Chambre handleSendDialog={handleOpenDialogChambre}/>
                </div>
                <div className="flex items-center h-full w-full bg-green-500">
                    <Dialog dialogues={dialogRue}/>
                    <Rue handleSendDialog={handleOpenDialogRue}/>
                </div>  
                <div className="flex items-center h-full w-full bg-gray-800">
                    <Dialog dialogues={dialogPharmacie} />
                    <Pharmacie handleSendDialog={handleOpenDialogPharmacie}/>
                </div>
            </div>
            <SceneNav currentIndexScene={indexScene} onChangeScene={handleChangeScene}/>
        </div>
    );
}

export default Jeu;