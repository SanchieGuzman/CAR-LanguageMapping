import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "./ui/card";
import { useMunicipalityStore } from '../store/municipality-store'
import { Badge } from '../components/ui/badge'
import { Table, TableRow, TableCell } from "../components/ui/table";

const placeData = {
    "1": {
      "municipality_name": "Bangued",
      "municipality_image": {},
      "municipality_description": "Bangued is a peaceful town known for its stunning rice terraces and vibrant community. It serves as the capital of Abra and offers a blend of natural beauty and cultural history. Visitors can enjoy local festivals and traditional crafts.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "english", "spanish"]
    },
    "2": {
      "municipality_name": "Boliney",
      "municipality_image": {},
      "municipality_description": "Boliney is a quiet and remote town nestled in the mountains. It's known for its scenic beauty, agricultural landscape, and refreshing rivers. The town offers a perfect escape for those seeking peace and nature.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "english", "math"]
    },
    "3": {
      "municipality_name": "Bucay",
      "municipality_image": {},
      "municipality_description": "Bucay is a historic town surrounded by lush mountains and rivers. It plays a vital role in local agriculture and farming. The town also preserves its traditional heritage and warm community spirit.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english"]
    },
    "4": {
      "municipality_name": "Bucloc",
      "municipality_image": {},
      "municipality_description": "Bucloc is a small town with a cool climate and scenic views. It offers a simple way of life close to nature. Locals are known for their hospitality and strong cultural identity.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "ilocano", "kankanaey", "english"]
    },
    "5": {
      "municipality_name": "Daguioman",
      "municipality_image": {},
      "municipality_description": "Daguioman is a serene and remote town surrounded by natural beauty. The area is rich in vegetation and is ideal for those who love hiking and exploring. Traditional customs are still widely practiced here.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["kankanaey", "tagalog"]
    },
    "6": {
      "municipality_name": "Danglas",
      "municipality_image": {},
      "municipality_description": "Danglas is a quiet town surrounded by dense forests and rolling hills. It is ideal for nature lovers and adventure seekers. The town maintains a strong connection to traditional farming and community life.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english", "ifugao"]
    },
    "7": {
      "municipality_name": "Dolores",
      "municipality_image": {},
      "municipality_description": "Dolores is a historical town full of cultural richness and vibrant traditions. The community thrives on agriculture and strong family values. Local events showcase music, dance, and food that reflect their heritage.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "ilocano", "english", "pangasinense", "waray"]
    },
    "8": {
      "municipality_name": "La Paz",
      "municipality_image": {},
      "municipality_description": "La Paz is a peaceful town with wide rice fields and calm riverbanks. Its agricultural charm is paired with a friendly local atmosphere. The town's tranquility makes it an ideal destination for relaxation.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "kalinga"]
    },
    "9": {
      "municipality_name": "Lacub",
      "municipality_image": {},
      "municipality_description": "Lacub is nestled in the mountains and surrounded by breathtaking nature. Life here is simple and deeply rooted in farming traditions. The people are known for their hospitality and cultural pride.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "ilocano", "english"]
    },
    "10": {
      "municipality_name": "Lagangilang",
      "municipality_image": {},
      "municipality_description": "Lagangilang is a town known for its cultural heritage and peaceful surroundings. The landscape is filled with rice fields, hills, and rivers. Its residents take pride in preserving local traditions and crafts.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english"]
    },
    "11": {
      "municipality_name": "Lagayan",
      "municipality_image": {},
      "municipality_description": "Lagayan is a mountainous town known for its quiet charm and natural beauty. The community practices sustainable farming and forest preservation. It's a hidden gem perfect for eco-tourism.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "ilocano"]
    },
    "12": {
      "municipality_name": "Langiden",
      "municipality_image": {},
      "municipality_description": "Langiden is a rural town steeped in history and tradition. It is known for its small yet tight-knit community. Local values and heritage are strongly preserved across generations.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english", "tingguian"]
    },
    "13": {
      "municipality_name": "Licuan-Baay (Licuan)",
      "municipality_image": {},
      "municipality_description": "Licuan-Baay is a scenic and historic town that showcases vibrant customs and traditions. Surrounded by mountains, it's rich in folklore and indigenous practices. Handicrafts and dances are part of daily life.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "tingguian", "english", "tagalog"]
    },
    "14": {
      "municipality_name": "Luba",
      "municipality_image": {},
      "municipality_description": "Luba offers stunning views and a calm, rural lifestyle. The town values its deep cultural heritage and quiet environment. Agriculture and nature are the core of everyday living here.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "kalinga", "tagalog"]
    },
    "15": {
      "municipality_name": "Malibcong",
      "municipality_image": {},
      "municipality_description": "Malibcong is a remote and culturally rich town located in the mountains. It is a haven for those who enjoy traditional rituals and natural beauty. The people proudly uphold their tribal customs and language.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["kankanaey", "ilocano", "tagalog", "english"]
    },
    "16": {
      "municipality_name": "Manabo",
      "municipality_image": {},
      "municipality_description": "Manabo is a quiet town where tradition and nature meet. Surrounded by lush terrain, the town is known for farming and crafts. Community ties are strong, and festivals are lively and colorful.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["tagalog", "ilocano", "ifugao"]
    },
    "17": {
      "municipality_name": "Peñarrubia",
      "municipality_image": {},
      "municipality_description": "Peñarrubia is a small town with a strong agricultural backbone. The town boasts lush rice fields and traditional homes. Community events and local farming practices keep the culture alive.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "tagalog"]
    },
    "18": {
      "municipality_name": "Pidigan",
      "municipality_image": {},
      "municipality_description": "Pidigan is known for its open fields and peaceful vibe. It is a quiet, family-oriented town with a strong sense of unity. Residents actively participate in local traditions and religious celebrations.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english"]
    },
    "19": {
      "municipality_name": "Pilar",
      "municipality_image": {},
      "municipality_description": "Pilar combines rich cultural history with scenic rural beauty. The town is known for its strong heritage and community pride. Local festivals are colorful and celebrated with great enthusiasm.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "tagalog", "english"]
    },
    "20": {
      "municipality_name": "Sallapadan",
      "municipality_image": {},
      "municipality_description": "Sallapadan is a serene town with strong historical roots. Its peaceful environment is complemented by cultural rituals and native language. Agriculture and local stories shape the town's identity.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "kalinga"]
    },
    "21": {
      "municipality_name": "San Isidro",
      "municipality_image": {},
      "municipality_description": "San Isidro is a rural town that values harmony and simplicity. The community thrives on farming and shared traditions. Scenic hills and open skies define its calm landscape.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english", "pangasinense"]
    },
    "22": {
      "municipality_name": "San Juan",
      "municipality_image": {},
      "municipality_description": "San Juan is a culturally vibrant town with deep agricultural roots. Local practices and languages are proudly passed on. The town also features scenic spots ideal for picnics and hiking.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "tagalog", "english"]
    },
    "23": {
      "municipality_name": "San Quintin",
      "municipality_image": {},
      "municipality_description": "San Quintin is a close-knit town surrounded by mountains and greenery. Residents live a peaceful lifestyle with a strong connection to their land. The town hosts traditional events that reflect its heritage.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "english"]
    },
    "24": {
      "municipality_name": "Tayum",
      "municipality_image": {},
      "municipality_description": "Tayum is a historical town with beautifully preserved architecture and traditions. It's known for its churches and crafts made by local artisans. The culture is proudly celebrated in festivals and community events.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "tagalog", "tingguian", "english"]
    },
    "25": {
      "municipality_name": "Tineg",
      "municipality_image": {},
      "municipality_description": "Tineg is a secluded town known for its untouched forests and clear rivers. It is a great destination for adventure and nature tourism. Traditional ways of life are well-preserved by the locals.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["kankanaey", "ilocano"]
    },
    "26": {
      "municipality_name": "Tubo",
      "municipality_image": {},
      "municipality_description": "Tubo is a mountainous town filled with scenic landscapes and cultural richness. The people are proud of their heritage and speak multiple dialects. Life here revolves around farming and ancestral practices.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "kalinga", "tagalog", "english", "tingguian"]
    },
    "27": {
      "municipality_name": "Villaviciosa",
      "municipality_image": {},
      "municipality_description": "Villaviciosa is a culturally rich town known for its warm and active community. Traditional music and dance are often part of daily life. The surrounding nature enhances its charm and appeal.",
      "information_source": "https://example.com",
      "languages": [
        {"language_name": "Ilocano", "percent": "69"},
        {"language_name": "Tagalog", "percent": "10"},
        {"language_name": "Kankanaey", "percent": "5"},
        {"language_name": "English", "percent": "3"},
        {"language_name": "Ifugao", "percent": "2"}
      ],
      "other_languages": ["ilocano", "tagalog", "english"]
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
          src={placeDetails.municipality_image}
          alt=""
          className="w-full h-[30vh] object-cover object-center"
        />
      </div>
      <CardHeader className="text-justify min-w-[4rem]">
        <CardDescription className="text-[1rem]">{placeDetails.municipality_description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[0.9rem]">
          <p className=" h-12"> Five Leading Languages/Dialects Generally Spoken at Home in "{placeDetails.municipality_name}"</p>
          <Table>
            <tbody>  
                {placeDetails.languages.map((placeData, index) => (
                  <TableRow  key={index}>
                    <TableCell>
                      {/* <div className="w-[1rem] aspect-square" style={{background: placeDetails.colors[index]}}> </div> */}
                    </TableCell>
                    <TableCell>
                      {placeData.language_name} 
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
          
          {placeDetails.other_languages && (
            <div className="grid grid-cols-4 flex">
              {placeDetails.other_languages.map((otherlanguage,index) => (
                <Badge key={index} className="mt-[1rem]">
                  <div className="w-[5rem] h-[2rem] text-[1rem] justify-center items-center flex">{otherlanguage}</div>
                </Badge>
              ))}
            </div>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}