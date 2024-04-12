import React from 'react'
import Card from '../card/Card'
import {listData} from '../../lib/dummydata'
import "./List.scss"

function Listt() {
  return (
    <div className='list'>
      <div className='listContainer'>
        <div className="wrapper">
          {listData.map(item=>(
              <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listt
