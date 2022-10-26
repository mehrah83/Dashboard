import React from 'react';
import { PieChart,Pie,Tooltip,BarChart,CartesianGrid,XAxis,YAxis,Legend,Bar} from 'recharts';


const data = [
    {name:"Facebook",value:20000000},
    {name:"Whatsapp",value:15000000},
    {name:"Instagram",value:18000000},
    {name:"Hike",value:30000000},
    {name:"Youtube",value:40000000},
    ]

const MainComponent = () => {
  return (
    <>
    <div className="flex">
     <PieChart width={400} height={400}>
      <Pie
      datakey="value"
      isAnimationActive={false}
      data={data}
      cx={200}
      cy={200}
      outerRadius={80}
      fill="#8884d8"
      label
      />
      <Tooltip/>
      </PieChart>
       <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 60,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" stackId="a" fill="#8884d8" />
          <Bar dataKey="value" stackId="a" fill="#82ca9d" />
        </BarChart>
        </div>
    </>
  )
}

export default MainComponent;




