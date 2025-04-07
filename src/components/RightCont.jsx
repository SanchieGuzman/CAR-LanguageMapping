export default function RightCont({placeDetails}) {
  return (
    <div className="w-[30%] h-[calc(100vh-6rem)] border-black border absolute top-[5.2rem] right-4 flex justify-center ">

      {placeDetails ? (
        <div>
           <img
             src={placeDetails.placeimage}
             alt=""
             className="w-full h-[30vh] object-cover object-center"
          />
          <p className="px-4 pt-4 text-justify">
            {placeDetails.placedescription}
          </p>
          <p className="px-4 pt-6 text-left">
            Five Leading Languages/Dialects Generally Spoken at Home in "{placeDetails.placename}"
          </p>
          <div className="grid grid-cols-2 pt-4">
            <div>
              <div><p>ilocano</p></div>
              <div><p>ilocano</p></div>
              <div><p>ilocano</p></div>
            </div>
            <div>
              <div><p>30%</p></div>
              <div><p>30%</p></div>
              <div><p>30%</p></div>
            </div>
          </div>
          <p className="text-left px-4 pt-6">
            Other Languages/Dialects Spoken 
          </p>

          {placeDetails.otherlanguage && (
            <div className="grid grid-cols-4 flex px-4">
              {placeDetails.otherlanguage.map((otherlanguage,index) => (
                <div key={index} className="mt-4 border-1 w-[6rem] h-[2rem] text-[1rem] justify-center flex">{otherlanguage}</div>
              ))}
            </div>
          )}

        </div>
      ) : (
        null
      )}
    </div>
  );
}
