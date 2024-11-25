import Map from "../components/map";
import "../index.css";
import "../output.css";

export const MapPage = () => {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bottom-22">
        <Map />
      </div>
    </div>
  );
};
