
const Map = (props) => {
  return (
    <div>
  {
    props.list.map((stu)=>
    (<li key={stu.id}>{stu.name}.{stu.dept}</li>))
  }
    </div>
  )
}

export default Map