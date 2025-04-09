import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "./ui/card";
import { useMunicipalityStore } from '../store/municipality-store'
import { Badge } from '../components/ui/badge'
import { Table, TableRow, TableCell } from "../components/ui/table";

const placeData = {
  1: {
    placename: "Bangued",
    placedescription: "Bangued is a peaceful town known for its stunning rice terraces and vibrant community. It serves as the capital of Abra and offers a blend of natural beauty and cultural history. Visitors can enjoy local festivals and traditional crafts.",
    placeimage: "/kiangan.jpg",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "math", percent: 69, color: "#fde047"},
      { language: "science", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ilocano", percent: 69, color: "#f87171" },
    ],
    otherlanguage: ["tagalog", "english", "chinese"]
  },
  2: {
    placename: "Boliney",
    placedescription: "Boliney is a quiet and remote town nestled in the mountains. It’s known for its scenic beauty, agricultural landscape, and refreshing rivers. The town offers a perfect escape for those seeking peace and nature.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["tagalog", "english", "math"]
  },
  3: {
    placename: "Bucay",
    placedescription: "Bucay is a historic town surrounded by lush mountains and rivers. It plays a vital role in local agriculture and farming. The town also preserves its traditional heritage and warm community spirit.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english"]
  },
  4: {
    placename: "Bucloc",
    placedescription: "Bucloc is a small town with a cool climate and scenic views. It offers a simple way of life close to nature. Locals are known for their hospitality and strong cultural identity.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["tagalog", "ilocano", "kankanaey", "english"]
  },
  5: {
    placename: "Daguioman",
    placedescription: "Daguioman is a serene and remote town surrounded by natural beauty. The area is rich in vegetation and is ideal for those who love hiking and exploring. Traditional customs are still widely practiced here.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["kankanaey", "tagalog"]
  },
  6: {
    placename: "Danglas",
    placedescription: "Danglas is a quiet town surrounded by dense forests and rolling hills. It is ideal for nature lovers and adventure seekers. The town maintains a strong connection to traditional farming and community life.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english", "ifugao"]
  },
  7: {
    placename: "Dolores",
    placedescription: "Dolores is a historical town full of cultural richness and vibrant traditions. The community thrives on agriculture and strong family values. Local events showcase music, dance, and food that reflect their heritage.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["tagalog", "ilocano", "english", "pangasinense", "waray"]
  },
  8: {
    placename: "La Paz",
    placedescription: "La Paz is a peaceful town with wide rice fields and calm riverbanks. Its agricultural charm is paired with a friendly local atmosphere. The town’s tranquility makes it an ideal destination for relaxation.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "kalinga"]
  },
  9: {
    placename: "Lacub",
    placedescription: "Lacub is nestled in the mountains and surrounded by breathtaking nature. Life here is simple and deeply rooted in farming traditions. The people are known for their hospitality and cultural pride.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["tagalog", "ilocano", "english"]
  },
  10: {
    placename: "Lagangilang",
    placedescription: "Lagangilang is a town known for its cultural heritage and peaceful surroundings. The landscape is filled with rice fields, hills, and rivers. Its residents take pride in preserving local traditions and crafts.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english"]
  },
  11: {
    placename: "Lagayan",
    placedescription: "Lagayan is a mountainous town known for its quiet charm and natural beauty. The community practices sustainable farming and forest preservation. It’s a hidden gem perfect for eco-tourism.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["tagalog", "ilocano"]
  },
  12: {
    placename: "Langiden",
    placedescription: "Langiden is a rural town steeped in history and tradition. It is known for its small yet tight-knit community. Local values and heritage are strongly preserved across generations.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english", "tingguian"]
  },
  13: {
    placename: "Licuan-Baay (Licuan)",
    placedescription: "Licuan-Baay is a scenic and historic town that showcases vibrant customs and traditions. Surrounded by mountains, it’s rich in folklore and indigenous practices. Handicrafts and dances are part of daily life.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "tingguian", "english", "tagalog"]
  },
  14: {
    placename: "Luba",
    placedescription: "Luba offers stunning views and a calm, rural lifestyle. The town values its deep cultural heritage and quiet environment. Agriculture and nature are the core of everyday living here.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "kalinga", "tagalog"]
  },
  15: {
    placename: "Malibcong",
    placedescription: "Malibcong is a remote and culturally rich town located in the mountains. It is a haven for those who enjoy traditional rituals and natural beauty. The people proudly uphold their tribal customs and language.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["kankanaey", "ilocano", "tagalog", "english"]
  },
  16: {
    placename: "Manabo",
    placedescription: "Manabo is a quiet town where tradition and nature meet. Surrounded by lush terrain, the town is known for farming and crafts. Community ties are strong, and festivals are lively and colorful.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["tagalog", "ilocano", "ifugao"]
  },
  17: {
    placename: "Peñarrubia",
    placedescription: "Peñarrubia is a small town with a strong agricultural backbone. The town boasts lush rice fields and traditional homes. Community events and local farming practices keep the culture alive.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "tagalog"]
  },
  18: {
    placename: "Pidigan",
    placedescription: "Pidigan is known for its open fields and peaceful vibe. It is a quiet, family-oriented town with a strong sense of unity. Residents actively participate in local traditions and religious celebrations.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english"]
  },
  19: {
    placename: "Pilar",
    placedescription: "Pilar combines rich cultural history with scenic rural beauty. The town is known for its strong heritage and community pride. Local festivals are colorful and celebrated with great enthusiasm.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "tagalog", "english"]
  },
  20: {
    placename: "Sallapadan",
    placedescription: "Sallapadan is a serene town with strong historical roots. Its peaceful environment is complemented by cultural rituals and native language. Agriculture and local stories shape the town’s identity.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "kalinga"]
  },
  21: {
    placename: "San Isidro",
    placedescription: "San Isidro is a rural town that values harmony and simplicity. The community thrives on farming and shared traditions. Scenic hills and open skies define its calm landscape.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english", "pangasinense"]
  },
  22: {
    placename: "San Juan",
    placedescription: "San Juan is a culturally vibrant town with deep agricultural roots. Local practices and languages are proudly passed on. The town also features scenic spots ideal for picnics and hiking.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "tagalog", "english"]
  },
  23: {
    placename: "San Quintin",
    placedescription: "San Quintin is a close-knit town surrounded by mountains and greenery. Residents live a peaceful lifestyle with a strong connection to their land. The town hosts traditional events that reflect its heritage.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "english"]
  },
  24: {
    placename: "Tayum",
    placedescription: "Tayum is a historical town with beautifully preserved architecture and traditions. It’s known for its churches and crafts made by local artisans. The culture is proudly celebrated in festivals and community events.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "tagalog", "tingguian", "english"]
  },
  25: {
    placename: "Tineg",
    placedescription: "Tineg is a secluded town known for its untouched forests and clear rivers. It is a great destination for adventure and nature tourism. Traditional ways of life are well-preserved by the locals.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["kankanaey", "ilocano"]
  },
  26: {
    placename: "Tubo",
    placedescription: "Tubo is a mountainous town filled with scenic landscapes and cultural richness. The people are proud of their heritage and speak multiple dialects. Life here revolves around farming and ancestral practices.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3, color: "#60a5fa" },
      { language: "Ifugao", percent: 2, color: "#c084fc" }
    ],
    otherlanguage: ["ilocano", "kalinga", "tagalog", "english", "tingguian"]
  },
  27: {
    placename: "Villaviciosa",
    placedescription: "Villaviciosa is a culturally rich town known for its warm and active community. Traditional music and dance are often part of daily life. The surrounding nature enhances its charm and appeal.",
    colors: ["#f87171", "#fde047", "#4ade80","#60a5fa","#c084fc"],
    languages: [
      { language: "Ilocano", percent: 69, color: "#f87171" },
      { language: "Tagalog", percent: 10, color: "#fde047" },
      { language: "Kankanaey", percent: 5, color: "#4ade80" },
      { language: "English", percent: 3,},
      { language: "Ifugao", percent: 2, }
    ],
    otherlanguage: ["ilocano", "tagalog", "english"]
  }
}

export default function MunicipalityCard({className}) {
  const municipalityData = useMunicipalityStore((state) => state.municipalityData);
  const placeDetails = placeData[municipalityData]

  if (!placeDetails) {
    return (
      <Card className={`${className} relative pt-0 flex items-center justify-center h-[30vh]`}>
        <p className="text-gray-500 italic">Please select a municipality</p>
      </Card>
    );
  }

  return (
    <Card className={`${className} relative pt-0`}>
      <div className="w-full overflow-hidden shadow-lg rounded-t-md">
        <img
          src={placeDetails.placeimage}
          alt=""
          className="w-full h-[30vh] object-cover object-center"
        />
      </div>
      <CardHeader className="text-justify min-w-[4rem]">
        <CardDescription className="text-[1rem]">{placeDetails.placedescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[0.9rem]">
          <p className=" h-12"> Five Leading Languages/Dialects Generally Spoken at Home in "{placeDetails.placename}"</p>
          <Table>
            <tbody>
                {placeDetails.languages.map((placeData, index) => (
                  <TableRow  key={index}>
                    <TableCell>
                      <div className="w-[1rem] aspect-square" style={{background: placeDetails.colors[index]}}> </div>
                    </TableCell>
                    <TableCell>
                      {placeData.language} 
                    </TableCell>
                    <TableCell>
                      {placeData.percent}%
                    </TableCell>
                  </TableRow>                  
                ))}
            </tbody>
          </Table>
        </CardDescription>
        <CardDescription className="mt-[2rem] text-[0.9rem] h-auto scroll overflow-hidden">
          <p>Other Languages/Dialects Spoken</p>
          
          {placeDetails.otherlanguage && (
            <div className="grid grid-cols-4 flex px-4">
              {placeDetails.otherlanguage.map((otherlanguage,index) => (
                <Badge key={index} className="mt-[1rem]" style={{background: placeDetails.colors[index]}}>
                  <div className=" w-[6rem] h-[2rem] text-[1rem] justify-center items-center flex">{otherlanguage}</div>
                </Badge>
              ))}
            </div>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}