// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  question: string,
  answer: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
      {
        question: "C’est quoi un rapport sexuel ?",
        answer:
          "Un rapport sexuel est une relation humaine de nature sexuelle entre deux personnes ou plus. Il inclut l'appareil génital féminin et/ou l'appareil génital masculin, et peut être pratiqué entre personnes de sexe différents ou du même sexe.",
      },
      {
        question: "C’est quoi un rapport hétérosexuel ?",
        answer:
          "Lors d'un rapport hétérosexuel, l'homme insère son pénis en érection dans le vagin de la femme jusqu'à l'éjaculation de l'homme qui libère les spermatozoïdes (ou avant si le rapport n'a pas pour but de faire un enfant). Un rapport sexuel entre un homme et une femme peut se passer de plusieurs façons, il n'y a pas d'obligation de pénétration (pénis dans vagin). Lorsque l'on souhaite avoir des rapports sexuels sans avoir d'enfant, il est important d'employer un moyen de contraception pour éviter la fécondation.",
      },
      {
        question: "C’est quoi un rapport homosexuel chez les hommes ?",
        answer:
          "Lors d'un rapport homosexuel chez les hommes, un des hommes effectue un mouvement de va-et-vient avec son pénis dans l'anus ou la bouche de son partenaire.",
      },
      {
        question: "C’est quoi un rapport homosexuel chez les femmes ?",
        answer:
          "Lors d'un rapport homosexuel chez les femmes, une des femmes caresse avec les mains ou la bouche les organes sexuels et zones du corps érogènes (endroits du corps responsables du plaisir sexuel) de sa partenaire.",
      },
      {
        question: "Qu'est-ce qu'une relation sexuelle non protégée ?",
        answer:
          "Lorsqu’ils sont correctement utilisés, les préservatifs contribuent à vous protéger contre une éventuelle grossesse et les IST. Les relations sexuelles non protégées désignent habituellement des relations sexuelles sans mode de contraception ni préservatif. Cependant, pendant des relations sexuelles, il arrive que le préservatif craque, qu’il ne soit pas utilisé correctement ou encore oublié.",
      },
      {
        question: "Quels sont les risques d'une relation sexuelle non protégée ?",
        answer:
          "Les risques sont les infections sexuellement transmissibles et une grossesse non désirée.",
      },
      {
        question: "Que faire juste après un rapport non protégé ?",
        answer:
          "Même si cela ne protège pas contre les IST, uriner après des relations sexuelles peut vous aider à réduire le risque de contracter une infection urinaire. Les IU affectent tout le monde, mais les femmes sont 30 fois plus enclines à en contracter que les hommes. Uriner permet d’éliminer les germes qui ont pénétré dans l’urètre et d’autres zones du système urinaire : ceci est particulièrement important chez les femmes, plus sujettes aux IU après des relations sexuelles.",
      },
      {
        question: "Que faire le lendemain d’un rapport non protégé ?",
        answer:
          "Il faut envisager une contraception d’urgence, parler de l’exposition au VIH avec votre médecin et prendre le temps de savoir comment vous vous sentez.",
      },
      {
        question: "Que faire 2 semaines à 1 mois après un rapport non protégé ?",
        answer:
          "Il faut faire un test de grossesse et faire un dépistage d’IST.",
      },
      {
        question: "Comment puis-je me protéger la prochaine fois ?",
        answer:
          "Veillez à toujours avoir des préservatifs ou des méthodes barrières à disposition, vérifiez la date de péremption sur la boîte ou l’emballage des préservatifs, prenez soin de vos préservatifs : rangez-les à l’abri de la chaleur et de la lumière, et ne les ouvrez pas avec un objet tranchant comme des ciseaux ou les dents, choisissez des lubrifiants compatibles avec les préservatifs, choisissez bien la taille du préservatif pour éviter qu’il glisse ou se déchire. Si vous ne savez pas quelle taille vous convient, optez pour un pack multi-tailles.",
      },
      {
        question: "Vous vous inquiétez pour votre santé sexuelle ?",
        answer:
          "Vous avez des inquiétudes suite à des relations sexuelles non protégées ou concernant votre santé sexuelle en général ? Prenez rendez-vous avec un médecin pour obtenir des conseils, de l’aide ou une ordonnance en ligne pour un dépistage d'IST. Consultez un médecin",
      }
    ]
 )
}
