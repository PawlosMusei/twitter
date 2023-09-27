
const Tweet = () => {
    return ( 
        <div>
            {
                <form action="">
                    <h2>Title bericht</h2>
                    <p>bericht jezelf</p>
                    <button onClick={updateHandler}>Update</button>
                    <button onClick={deleteHandler}>delete</button>
                </form>
                
            }
        </div>
     );
}
 
export default Tweet;