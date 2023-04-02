

const Button = ({pageIncrement}) =>{
    console.log(pageIncrement)
return(
    <>
        <button onClick={()=>pageIncrement()}>Load more</button>
    </>
)
}

export default Button;