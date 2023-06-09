import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecie } from "../api/FetchSpecies";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

function PersonCard({
  name,
  dob,
  gender,
  height,
  mass,
  hair_color,
  eye_color,
  skin_color,
  species,
  noOfStarship,
  noOfVehicles,
}) {
  let specieName = null;
  if (species.length != 0) {
    const result = useQuery(["specie", species[0]], fetchSpecie);
    specieName = result?.data?.name;
  }

  return (
    <div className="flex h-[400px] w-[300px] flex-col items-start justify-start gap-2 rounded p-4 shadow-lg shadow-slate-800">
      <div className="flex items-center gap-4 self-stretch">
        {(() => {
          switch (specieName) {
            case "Droid":
              return (
                <FontAwesomeIcon
                  className="h-10 w-10"
                  icon={faAndroid}
                  bounce
                  style={{ color: "#9bd7e4" }}
                />
              );
            case "Human":
              return (
                <FontAwesomeIcon
                  className="h-10 w-10"
                  icon={faCircleUser}
                  beat
                  style={{ color: "#5bb39d" }}
                />
              );
            default:
              return (
                <FontAwesomeIcon
                  className="h-10 w-10"
                  icon={faQuestion}
                  beatFade
                  style={{ color: "#b95941" }}
                />
              );
          }
        })()}
        <div className="flex flex-grow flex-col justify-start">
          <div className="text-lg	font-medium	tracking-wide text-green-500">
            {name}
          </div>
          <div className="flex w-full justify-between">
            <div className="text-xs	font-light capitalize text-white">{`DOB: ${dob}`}</div>
            <div className="text-sm	font-medium capitalize text-gray-300">
              {gender}
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full self-stretch bg-green-400 opacity-25"></div>

      <div className="w-full border-b border-l border-green-900 p-2 text-xs font-light text-gray-400">
        Body Type
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full text-xs font-light text-gray-400">
          <span className="basis-1/2 text-right">Height:</span> <span className="ms-2 text-white">{height}</span>
        </div>
        <div className="flex w-full text-xs font-light text-gray-400">
          <span className="basis-1/2 text-right">Mass:</span> <span className="ms-2 text-white">{mass}</span>
        </div>
        <div className="flex w-full text-xs font-light text-gray-400">
          <span className="basis-1/2 text-right">Hair color:</span>{" "}
          <span className="ms-2 capitalize text-white">{hair_color}</span>
        </div>

        <div className="flex w-full text-xs font-light text-gray-400">
          <span className="basis-1/2 text-right">Eye color:</span>{" "}
          <span className="ms-2 capitalize text-white">{eye_color}</span>
        </div>
        <div className="flex w-full text-xs font-light text-gray-400">
          <span className="basis-1/2 text-right">Skin color:</span>{" "}
          <span className="ms-2 capitalize text-white">{skin_color}</span>
        </div>
      </div>
      <div className="flex w-full justify-between border-b border-l border-green-900 p-2 text-xs font-light text-gray-400">
        <div className="text-xs font-light text-gray-400">Specie</div>
        <div className="text-sm font-normal text-green-500">
          {specieName ? specieName : "Unknown"}
        </div>
      </div>
      <div className="flex w-full justify-between border-b border-l border-green-900 p-2 text-xs font-light text-gray-400">
        <div className="text-xs font-light text-gray-400">Starship</div>
        <div className="text-sm font-normal text-green-500">{noOfStarship}</div>
      </div>
      <div className="flex w-full justify-between border-b border-l border-green-900 p-2 text-xs font-light text-gray-400">
        <div className="text-xs font-light text-gray-400">Vehicles</div>
        <div className="text-sm font-normal text-green-500">{noOfVehicles}</div>
      </div>
    </div>
  );
}

export default PersonCard;
