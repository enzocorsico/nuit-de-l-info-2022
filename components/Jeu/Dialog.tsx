import { useState } from "react";

interface Props{
    dialogues: {nom: string, text: string}[];
}

const Dialog = (props: Props) => {
    const [indexDialogue, setIndexDialogue] = useState(0);

    return (
        <div className="flex flex-col w-1/3 mx-10 h-fit bg-white min-h-30 whitespace-normal rounded-md">
            <h3 className="text-2xl text-center font-bold underline">Dialogues</h3>
            { props.dialogues[indexDialogue]?.nom && <p className="text-lg font-semibold mt-4 ml-2">{props.dialogues[indexDialogue]?.nom} :</p> }
            { props.dialogues[indexDialogue]?.text && <p className="text-md ml-2 mt-2">{props.dialogues[indexDialogue]?.text}</p> }
            { props.dialogues.length > 1 && indexDialogue < props.dialogues.length &&  (
                <div className="flex mt-auto ml-auto p-3">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={e => setIndexDialogue(indexDialogue + 1)}>Suivant</button> 
                </div>
            )}
        </div>
    )   
}

export default Dialog;