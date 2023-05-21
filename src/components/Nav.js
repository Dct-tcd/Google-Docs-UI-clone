import React from "react";
// import comment from "./comment.png";
function Nav() {
  return (
    <div className="flex justify-between">
      <div className=" flex mt-4  ml-4">
        <img
          src={
            "https://th.bing.com/th/id/OIP.XKmvV_oz2Rb8uSEh42f5xAHaHa?pid=ImgDet&rs=1"
          }
          className="h-12 w-12 mr-2"
        />
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="">Untitled document &nbsp;&nbsp;&nbsp; ☆</h1>
          </div>
         
          <div className="flex  ">
            <div className=" mr-1 ">File</div>
            <div className="ml-1 mr-1 ">Edit</div>
            <div className="ml-1 mr-1 ">View</div>
            <div className="ml-1 mr-1 ">Insert</div>
            <div className="ml-1 mr-1 ">Format</div>
            <div className="ml-1 mr-1 ">Tools</div>
            <div className="ml-1 mr-1 ">Extensions</div>
            <div className="ml-1 mr-1 ">Help</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row mt-3 mr-6 self-center">
        
        <div className="mr-4">
          <span class="material-symbols-outlined">comment</span>
        </div>
        <div className="mr-3">
          <span class="material-symbols-outlined">videocam</span>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
        <div className="flex flex-row p-2 rounded-3xl self-center  bg-blue-200 ">
           
        <span class="material-symbols-outlined">lock</span>
        <span className="ml-1 align-baseline " >Share</span>
            
        </div>
        <div>

        <img src={"https://th.bing.com/th/id/R.0e71f53cd29519ce0f2680a4cefa11ce?rik=9u%2b2M5VIoJTMFg&riu=http%3a%2f%2fcwexplorationphotography.com%2fwp-content%2fuploads%2f2013%2f11%2f10896225_528254790650735_6470305242078852429_o.jpg&ehk=1KoOAV82ZKkqlZEdix6PAvkQ1bLG6ZP1CAWZhYN%2fURY%3d&risl=&pid=ImgRaw&r=0"}
            className="w-7 h-7 rounded-2xl ml-5"
            />
            
            </div>

      </div>
    </div>
  );
}

export default Nav;
