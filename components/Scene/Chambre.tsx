"use client"

import Image from "next/image";
import { useState } from "react";

interface Props {
    handleSendDialog: (object: {nom: string, text: string}[]) => any;
}

const Chambre = (props: Props) => {
    const handleClick = () => {
        props.handleSendDialog([
            {
                nom: "Narrateur",
                text: "Le héro se réveille" 
            },
            {
                nom: "Héro",
                text: "Hummm déjà l'heure de se lever"
            },
            { 
                nom: "Héro",
                text: "On est quel jour déjà ?" 
            },            
            {
                nom: "Héro",
                text: "Oh ! mais c'est ce soir que je vais dormir chez mon/ma copain/copine"
            },
            {
                nom: "Héro",
                text: "Je vais peut être aller chercher des protections, on sait jamais, ça pourra servir !"
            },
            {
                nom: "Héro",
                text: "Mais où est ce que je peux trouver ça ? Demandons à mes parents"
            },
            {
                nom: "Héro",
                text: "Mais où est ce que je peux trouver ça ? Demandons à mes parents" 
            },
            {
                nom: "Héro",
                text: "Salut papa/maman dit moi je vois mon copain/ma copine ce soir. Cela fait plus de 1 semaine que j'ai parler avec mon/ma copain/copine sur le fait de vouloir notre première fois. Tu ne saurais pas où je peux trouver des protections ?"
            },
            {
                nom: "Héro",
                text: "Salut papa/maman dit moi je vois mon copain/ma copine ce soir. Cela fait plus de 1 semaine que j'ai parler avec mon/ma copain/copine sur le fait de vouloir notre première fois. Tu ne saurais pas où je peux trouver des protections ?"
            },
            {
                nom: "Parents",
                text: "Pas d'inquiétude mon/ma fils/fille, c'est très bien de vouloir se protéger, de nombreuses maladies sexuellement existent comme le sida, VIH et bien d'autres... ! Tu peux allez au supermarché de la ville ou bien à la pharmacie afin de trouver des protections adéquates."
            },
            {
                nom: "Héro",
                text: "Super merci ! bonne idée ! Je m'y rend de ce pas !"
            },
        ]);
    }

    return (
        <div className="flex flex-col relative w-2/3 mx-auto">
            <Image src="/interieurlvl2.png" className="absolute" alt="img" width="600" height="600"/>
            <div className="flex z-10">
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div><div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100" onClick={e => handleClick()}><Image src="/perso2.png" className="absolute" alt="img" width="24" height="24"/></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
            <div className="flex z-10">                
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
                <div className="w-6 h-6  border-black-100"></div>
            </div>
        </div>
    );
};

export default Chambre;