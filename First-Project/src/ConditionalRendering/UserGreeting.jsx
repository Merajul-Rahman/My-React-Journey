function UserGreeting({username="Guest", isLoggedIn=false})
{
   /*  if(isLoggedIn)
    {
        return(<h1>Hello Mr./Mrs. {username}</h1>)
    }
    else
    {
        return(
            <h1>
                Please Log in First!
            </h1>
        )
    } */
    return isLoggedIn ? 
    ( <h1>Hello Mr./Mrs. {username}</h1>)
    : 
    (<h1>Please Log in First!</h1>);

}
export default UserGreeting