import fiveStars from "../assets/images/illustration-five-stars.webp";
import platforms from "../assets/images/illustration-multiple-platforms.webp";
import calendar from "../assets/images/illustration-consistent-schedule.webp";
import schedule from "../assets/images/illustration-schedule-posts.webp";
import growth from "../assets/images/illustration-grow-followers.webp";
import audience from "../assets/images/illustration-audience-growth.webp";
import createPost from "../assets/images/illustration-create-post.webp";
import aiContent from "../assets/images/illustration-ai-content.webp";
function App() {
  return (
    <div className="bg-slate-50">
<div className="font-DM-Sans grid grid-cols-1 grid-rows-16 md:grid-cols-4 md:grid-rows-6 gap-3 max-h-screen p-6 w-9/12 mx-auto">

      <div className=" rounded-xl bg-Purple-500 md:col-start-2 md:col-span-2 md:row-span-2 row-start-1 text-center text-white font-medium row-span-2">
        <p className="text-4xl py-4">
        Social Media <span className="text-Yellow-500">10x</span> <br />
        <span className="italic">Faster</span> with AI
        </p>
        <img src={fiveStars} alt="five stars" className="w-2/5 mx-auto" />
        <p className="font-light">Over 4,000 5-star reviews</p>
      </div>

      <div className=" rounded-xl bg-white md:col-start-2 md:row-start-3 md:row-span-2 row-start-3 text-xl font-bold row-span-2 md:text-left text-center" >
        <div>
          <img src={platforms} alt="" className="w-full" />
        </div>
        <div className="p-3">
        Manage multiple accounts and platforms.
        </div>
        
      </div>

      <div className=" rounded-xl bg-Yellow-500 md:col-start-3 md:row-start-3 md:row-span-2 row-start-5 text-xl font-bold overflow-hidden p-2 row-span-2  md:text-left text-center">
        Maintain a consistent posting schedule.
        <div>
          <img src={calendar} alt="" className="w-3/4 mx-auto mt-3" />
        </div>
      </div>

      <div className=" rounded-xl bg-Purple-100 md:row-start-1 md:row-span-4 md:col-start-4 row-start-7 row-span-2 overflow-hidden text-center">
        <p className="text-2xl font-bold px-8 py-2">Schedule to social media.</p>
        <div>
          <img src={schedule} alt="calendar" className="w-full h-42 md:ml-8 p-4" />
        </div>
        <p className="px-9 py-3 text-sm tracking-tight font-medium">
        Optimize post timings to publish content at the perfect time for your
        audience.
        </p>
        
      </div>

      <div className=" rounded-xl bg-Purple-500 md:col-start-3 md:col-span-2 md:row-start-5 md:row-span-2 row-start-9 row-span-2 text-white ">
        <div className="flex h-full items-center flex-col md:flex-row">
        <div className=" w-2/5">
        <img src={growth} alt="" className="p-3"/>
        </div>
        <div className=" text-3xl w-3/5 p-3 mx-auto md:text-left text-center">
        Grow followers with non-stop content.
        </div>
        </div>
       
       
      </div>

      <div className=" rounded-xl bg-white md:col-start-2 md:row-start-5 md:row-span-2 row-start-11 row-span-2 p-4 md:text-left text-center">
        <p className="font-medium mb-4">
          <span className="text-5xl font-semibold py-2">{">"}56% </span><br />
        faster audience growth
          </p>
        <img src={audience} alt="" className="w-4/5 mx-auto"/>
      </div>

      <div className=" rounded-xl bg-Yellow-100 md:col-start-1 md:row-start-1 md:row-span-3 row-start-13 flex justify-center items-center flex-col p-6 text-3xl row-span-2 font-semibold ">
        <div>
        Create and schedule content <span className="text-Purple-500 italic">quicker</span>.
        </div>
        
        <img src={createPost} alt="" className="w-4/5 mt-5" />
      </div>

      <div className=" rounded-xl bg-Yellow-500 md:col-start-1 md:row-start-4 md:row-span-3 row-span-15 row-span-2 p-4  md:text-left text-center">
        <p className="text-3xl font-semibold tracking-tighter">Write your content using AI.</p>
       
        <img src={aiContent} alt="" className="mx-auto w-9/12 mt-2" />
      </div>
    </div>
    </div>
    
  );
}

export default App;
