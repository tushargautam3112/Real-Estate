import Filter from "../../Components/Filter";
import Card from "../../Components/card/Card";
import Map from "../../Components/map/Map";
import { listData } from "../../lib/dummydata";
import "./listPage.scss";

export default function ListPage(){

  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
         <div className="wrapper"> {/*Filter section inside this */}
            <Filter />
            {data.map(item => (
              <Card key={item.id} item={item} /> 
            ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}