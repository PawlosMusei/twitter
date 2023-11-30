import Tweet from "./Tweet";
const Tweetlist = ({name, message}) => {

  return (
   <section>

    {
      message.map((m) =>(
        <Tweet name={name} message={m}/>
      )) 
    }
     
   
     </section>
  );
};

export default Tweetlist;
