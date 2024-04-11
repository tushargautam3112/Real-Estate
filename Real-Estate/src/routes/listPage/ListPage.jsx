import Filter from "../../components/Filter";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummydata";
import Map from "../../components/map/Map";
import "./listPage.scss"

export default function ListPage(){
   // 3 45 50 
  
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
         <div className="wrapper"> {/*Filter section inside this */}
            < Filter/>
            {data.map(item => (
              <Card key={item.id} item={item} /> 
            ))}
        </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
      </div>
    </div>
  );
}