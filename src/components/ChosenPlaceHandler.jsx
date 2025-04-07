import { useState, useEffect } from "react";
import RightCont from "./RightCont";

const placeData ={
  1: {
    placename: "Bangued",
    placedescription: "Bangued is a peaceful town known for its stunning rice terraces and vibrant community. It serves as the capital of Abra and offers a blend of natural beauty and cultural history. Visitors can enjoy local festivals and traditional crafts.",
    placeimage: "/kiangan.jpg",
    otherlanguage: ["tagalog", "english", "chinese"]
  },
  2: {
    placename: "Boliney",
    placedescription: "Boliney is a quiet and remote town nestled in the mountains. It’s known for its scenic beauty, agricultural landscape, and refreshing rivers. The town offers a perfect escape for those seeking peace and nature.",
    otherlanguage: ["tagalog", "english", "math"]
  },
  3: {
    placename: "Bucay",
    placedescription: "Bucay is a historic town surrounded by lush mountains and rivers. It plays a vital role in local agriculture and farming. The town also preserves its traditional heritage and warm community spirit.",
    otherlanguage: ["ilocano", "english"]
  },
  4: {
    placename: "Bucloc",
    placedescription: "Bucloc is a small town with a cool climate and scenic views. It offers a simple way of life close to nature. Locals are known for their hospitality and strong cultural identity.",
    otherlanguage: ["tagalog", "ilocano", "kankanaey", "english"]
  },
  5: {
    placename: "Daguioman",
    placedescription: "Daguioman is a serene and remote town surrounded by natural beauty. The area is rich in vegetation and is ideal for those who love hiking and exploring. Traditional customs are still widely practiced here.",
    otherlanguage: ["kankanaey", "tagalog"]
  },
  6: {
    placename: "Danglas",
    placedescription: "Danglas is a quiet town surrounded by dense forests and rolling hills. It is ideal for nature lovers and adventure seekers. The town maintains a strong connection to traditional farming and community life.",
    otherlanguage: ["ilocano", "english", "ifugao"]
  },
  7: {
    placename: "Dolores",
    placedescription: "Dolores is a historical town full of cultural richness and vibrant traditions. The community thrives on agriculture and strong family values. Local events showcase music, dance, and food that reflect their heritage.",
    otherlanguage: ["tagalog", "ilocano", "english", "pangasinense", "waray"]
  },
  8: {
    placename: "La Paz",
    placedescription: "La Paz is a peaceful town with wide rice fields and calm riverbanks. Its agricultural charm is paired with a friendly local atmosphere. The town’s tranquility makes it an ideal destination for relaxation.",
    otherlanguage: ["ilocano", "kalinga"]
  },
  9: {
    placename: "Lacub",
    placedescription: "Lacub is nestled in the mountains and surrounded by breathtaking nature. Life here is simple and deeply rooted in farming traditions. The people are known for their hospitality and cultural pride.",
    otherlanguage: ["tagalog", "ilocano", "english"]
  },
  10: {
    placename: "Lagangilang",
    placedescription: "Lagangilang is a town known for its cultural heritage and peaceful surroundings. The landscape is filled with rice fields, hills, and rivers. Its residents take pride in preserving local traditions and crafts.",
    otherlanguage: ["ilocano", "english"]
  },
  11: {
    placename: "Lagayan",
    placedescription: "Lagayan is a mountainous town known for its quiet charm and natural beauty. The community practices sustainable farming and forest preservation. It’s a hidden gem perfect for eco-tourism.",
    otherlanguage: ["tagalog", "ilocano"]
  },
  12: {
    placename: "Langiden",
    placedescription: "Langiden is a rural town steeped in history and tradition. It is known for its small yet tight-knit community. Local values and heritage are strongly preserved across generations.",
    otherlanguage: ["ilocano", "english", "tingguian"]
  },
  13: {
    placename: "Licuan-Baay (Licuan)",
    placedescription: "Licuan-Baay is a scenic and historic town that showcases vibrant customs and traditions. Surrounded by mountains, it’s rich in folklore and indigenous practices. Handicrafts and dances are part of daily life.",
    otherlanguage: ["ilocano", "tingguian", "english", "tagalog"]
  },
  14: {
    placename: "Luba",
    placedescription: "Luba offers stunning views and a calm, rural lifestyle. The town values its deep cultural heritage and quiet environment. Agriculture and nature are the core of everyday living here.",
    otherlanguage: ["ilocano", "kalinga", "tagalog"]
  },
  15: {
    placename: "Malibcong",
    placedescription: "Malibcong is a remote and culturally rich town located in the mountains. It is a haven for those who enjoy traditional rituals and natural beauty. The people proudly uphold their tribal customs and language.",
    otherlanguage: ["kankanaey", "ilocano", "tagalog", "english"]
  },
  16: {
    placename: "Manabo",
    placedescription: "Manabo is a quiet town where tradition and nature meet. Surrounded by lush terrain, the town is known for farming and crafts. Community ties are strong, and festivals are lively and colorful.",
    otherlanguage: ["tagalog", "ilocano", "ifugao"]
  },
  17: {
    placename: "Peñarrubia",
    placedescription: "Peñarrubia is a small town with a strong agricultural backbone. The town boasts lush rice fields and traditional homes. Community events and local farming practices keep the culture alive.",
    otherlanguage: ["ilocano", "tagalog"]
  },
  18: {
    placename: "Pidigan",
    placedescription: "Pidigan is known for its open fields and peaceful vibe. It is a quiet, family-oriented town with a strong sense of unity. Residents actively participate in local traditions and religious celebrations.",
    otherlanguage: ["ilocano", "english"]
  },
  19: {
    placename: "Pilar",
    placedescription: "Pilar combines rich cultural history with scenic rural beauty. The town is known for its strong heritage and community pride. Local festivals are colorful and celebrated with great enthusiasm.",
    otherlanguage: ["ilocano", "tagalog", "english"]
  },
  20: {
    placename: "Sallapadan",
    placedescription: "Sallapadan is a serene town with strong historical roots. Its peaceful environment is complemented by cultural rituals and native language. Agriculture and local stories shape the town’s identity.",
    otherlanguage: ["ilocano", "kalinga"]
  },
  21: {
    placename: "San Isidro",
    placedescription: "San Isidro is a rural town that values harmony and simplicity. The community thrives on farming and shared traditions. Scenic hills and open skies define its calm landscape.",
    otherlanguage: ["ilocano", "english", "pangasinense"]
  },
  22: {
    placename: "San Juan",
    placedescription: "San Juan is a culturally vibrant town with deep agricultural roots. Local practices and languages are proudly passed on. The town also features scenic spots ideal for picnics and hiking.",
    otherlanguage: ["ilocano", "tagalog", "english"]
  },
  23: {
    placename: "San Quintin",
    placedescription: "San Quintin is a close-knit town surrounded by mountains and greenery. Residents live a peaceful lifestyle with a strong connection to their land. The town hosts traditional events that reflect its heritage.",
    otherlanguage: ["ilocano", "english"]
  },
  24: {
    placename: "Tayum",
    placedescription: "Tayum is a historical town with beautifully preserved architecture and traditions. It’s known for its churches and crafts made by local artisans. The culture is proudly celebrated in festivals and community events.",
    otherlanguage: ["ilocano", "tagalog", "tingguian", "english"]
  },
  25: {
    placename: "Tineg",
    placedescription: "Tineg is a secluded town known for its untouched forests and clear rivers. It is a great destination for adventure and nature tourism. Traditional ways of life are well-preserved by the locals.",
    otherlanguage: ["kankanaey", "ilocano"]
  },
  26: {
    placename: "Tubo",
    placedescription: "Tubo is a mountainous town filled with scenic landscapes and cultural richness. The people are proud of their heritage and speak multiple dialects. Life here revolves around farming and ancestral practices.",
    otherlanguage: ["ilocano", "kalinga", "tagalog", "english", "tingguian"]
  },
  27: {
    placename: "Villaviciosa",
    placedescription: "Villaviciosa is a culturally rich town known for its warm and active community. Traditional music and dance are often part of daily life. The surrounding nature enhances its charm and appeal.",
    otherlanguage: ["ilocano", "tagalog", "english"]
  }
}

export default function Chosen() {
  const [clickedId, setClickedId] = useState("");

  useEffect(() => {
    const handleSvgClick = (event) => {
      setClickedId(event.detail);
    };

    window.addEventListener("svgClick", handleSvgClick);

    return () => {
      window.removeEventListener("svgClick", handleSvgClick);
    };
  }, []);

  const placeDetails =  clickedId ? placeData[clickedId]: "Choose a place";

  return (
    // <div className="absolute right-[6rem] bottom-[6rem] bg-green-200 w-[15rem] border-[1px] border-[black] rounded-[.5rem] text-[2rem] text-[black] p-[1rem] z-100"></div>
    <div>
      <RightCont placeDetails={placeDetails} />
    </div>
  );
}
