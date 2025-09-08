import List from "./List"

function ListRendering()
{
    const names = ["Shipon", "Nusrat", "meraj", "rahman", "zaman"];
    const fruitsArray = ["Apple", "Orrange", "Banana", "Mango", "Litchi", "Pineaple"];

    const fruitsobject = [{id: 1, name: "Apple", calories: 95}, 
                            {id: 2, name: "Orrange", calories: 45},
                            {id: 3, name: "Banana", calories: 105},
                            {id: 4, name: "Mango", calories: 140},
                            {id: 5, name: "Litchi", calories: 45},
                            {id: 6, name: "Coconut", calories: 159},
                            {id: 7, name: "Pineaple", calories: 37}];

        //Sorting
    fruitsobject.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical

    const fruitObjectList = fruitsobject.map(
        fruit => <li key={fruit.id}>{fruit.name} --{fruit.calories} Cal</li>);

    fruitsobject.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    const fruitObjectListReverse = fruitsobject.map(
        fruit => <li key={fruit.id}>{fruit.name} --{fruit.calories} Cal</li>);



    fruitsobject.sort((a,b) => a.calories-b.calories); //Numerical
    const fruitObjectListnumeric= fruitsobject.map(
        fruit => <li key={fruit.id}>{fruit.name} --{fruit.calories} Cal</li>);

    fruitsobject.sort((a,b) => b.calories-a.calories); //Numerical
    const fruitObjectListnumericreverse= fruitsobject.map(
        fruit => <li key={fruit.id}>{fruit.name} --{fruit.calories} Cal</li>);

    
    //Filtering
    const filterdarray = fruitsobject.filter(x => x.calories>100) //calories greather than 100

    const filterdList = filterdarray.map( fruit => 
        <li key={fruit.id}>{fruit.name} --{fruit.calories} Cal</li>
    )




        
     return(
        <div style={{border:"1px solid black", margin:"0px", padding:"0px"}}>
            <h1 style={{ textAlign: "center"}}>List Rendering</h1>
            <div style={{display:"flex"}}>
                <List array = {fruitsArray}  type = 'ul'/> 
                <List array = {names} type = 'ol' /> 
                <ol>
                    {fruitObjectList}
                </ol>
                <ol>
                    {fruitObjectListReverse}
                </ol>
                <ol>
                    {fruitObjectListnumeric}
                </ol>
                <ol>
                    {fruitObjectListnumericreverse}
                </ol>

                <ol>
                    {filterdList}
                </ol>
            </div>
            
        </div>
     )
}
export default ListRendering