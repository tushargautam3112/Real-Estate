import Filter from "../../components/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import "./listPage.scss"
import { useLoaderData } from "react-router-dom";

export default function ListPage(){
   // 3 45 50 
  
  const posts = useLoaderData()
  return (
    <div className="listPage">
      <div className="listContainer">
         <div className="wrapper"> {/*Filter section inside this */}
            < Filter/>
            {posts.map(item => (
              <Card key={item.id} item={item} /> 
            ))}
        </div>
      <div className="mapContainer">
        <Map items={posts} />
      </div>
      </div>
    </div>
  );
}