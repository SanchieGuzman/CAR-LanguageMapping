import React, { useState, useEffect } from "react";
import { Card, CardDescription, CardHeader, CardContent } from "./ui/card";
import { useDataStore } from "../store/data-store";
import { Badge } from "./ui/badge";
import { Table, TableRow, TableCell } from "./ui/table";

export default function DetailsCard({ className }) {
  const placeData = useDataStore((state) => state.data);
  const selectedLevel = useDataStore(
    (state) => state.selectedLevel
  );

  const colors = [
    "#FF5050",
    "#88ff79",
    "#FFC923",
    "#80C6FF",
    "#CEB4FB",
    "#FBB4EC",
  ];

  const placeDetails = placeData;

  const [imageUrl, setImageUrl] = useState(null);

  const imageKey =
    selectedLevel === "Municipality Level"
      ? "municipality_image"
      : "province_image";

  useEffect(() => {
    if (placeData?.[imageKey]?.data) {
      const byteArray = new Uint8Array(placeData.municipality_image.data);
      console.log(
        "Image byte length:",
        placeData?.municipality_image?.data?.length
      );
      const blob = new Blob([byteArray], { type: "image/*" });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [placeData]);

  if (!placeData) {
    return (
      <Card
        className={`${className} relative pt-0 flex items-center justify-center h-[30vh]`}
      >
        <p className="text-gray-500 italic">Please select a municipality</p>
      </Card>
    );
  }

  const nameKey =
    selectedLevel === "Municipality Level"
      ? "municipality_name"
      : "province_name";
  const descriptionKey =
    selectedLevel === "Municipality Level"
      ? "municipality_description"
      : "province_description";

  return (
    <Card className={`${className}  pt-0 h-full overflow-y-scroll gap-[.5rem]`}>
      <div className="w-full min-h-[30vh] max-h-[30vh] shadow-lg rounded-t-md">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <CardHeader className="text-justify min-w-[4rem]">
        <CardDescription className="h-auto text-[.9rem]">
          {placeDetails[descriptionKey]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[0.9rem]">
          <p className=" h-12">
            {" "}
            Five Leading Languages/Dialects Generally Spoken at Home in "
            {placeDetails[nameKey]}"
          </p>
          <Table>
            <tbody>
              {placeDetails.languages.map((placeData, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div
                      className="w-[1rem] aspect-square"
                      style={{ background: colors[index] }}
                    >
                      {" "}
                    </div>
                  </TableCell>
                  <TableCell>{placeData.language_name}</TableCell>
                  <TableCell>{placeData.percent}%</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </CardDescription>
        <CardDescription className="mt-[2rem] text-[0.9rem] h-auto scroll overflow-hidden">
          <p>Other Languages/Dialects Spoken</p>

          {placeDetails.other_langauges && (
            <div className="flex flex-wrap gap-x-[.5rem] gap-y-0 h-auto">
              {placeDetails.other_langauges.map((otherlanguage, index) => (
                <Badge
                  key={index}
                  className="mt-[1rem]"
                  style={{ background: colors[index % colors.length] }}
                >
                  <div className="w-auto h-[2rem] text-[1rem] justify-center items-center flex">
                    {otherlanguage}
                  </div>
                </Badge>
              ))}
            </div>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
