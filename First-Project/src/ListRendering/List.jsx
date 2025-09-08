function List({array = [], type})
{
    const List = array.map(item => <li key={item}>{item}</li>);
    if (type == 'ol')
    {
        return(
            <ol>
                {List}
            </ol>
        )
    }
    else
    {
        return(
            <ul>
                {List}
            </ul>
        )
    }
        
}
export default List