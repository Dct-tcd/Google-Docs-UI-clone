import React from "react";

function Toolbar() {
  return (
    <div className=" bg-blue-50 w-11/12 p-1  
    ml-6  mt-5 rounded-2xl flex flex-row
    justify-between  self-center  ">
        <div className="flex ">

      {/* &nbsp;&nbsp;&nbsp; */}
      <div className=" ml-2 mr-2">
        <span class="material-symbols-outlined">undo</span>
        {/* &nbsp; &nbsp; */}
      </div>
      <div className="ml-2 mr-2">
        <span class="material-symbols-outlined">redo</span>
        {/* &nbsp; &nbsp; */}
      </div>
      <div className="ml-2 mr-2">
        <span class="material-symbols-outlined">print</span>
      </div>
      {/* &nbsp; &nbsp; */}
      <div className="ml-2 mr-2">
        <span class="material-symbols-outlined">imagesearch_roller</span>
        {/* &nbsp; &nbsp; */}
      </div>

      <span className="ml-1 mr-1">100%</span>
      {/* &nbsp; */}
      <div className=" mr-1">
        <span class="material-symbols-outlined">arrow_drop_down</span>
      </div>

      {/* &nbsp; &nbsp; */}

      <span className=" opacity-20 mr-2"> | </span>
      {/* &nbsp; &nbsp; */}
      <span>Normal Text </span>
      {/* &nbsp; &nbsp; */}
      <span class="material-symbols-outlined">arrow_drop_down</span>
      {/* &nbsp; &nbsp; */}
      <span className=" opacity-20 mr-1 "> | </span>
      <span className="ml-1">Open ...</span>
      {/* &nbsp; */}
      <span class="material-symbols-outlined">arrow_drop_down</span>
      {/* &nbsp; */}
      <span className=" opacity-20 mr-2 "> | </span>
      {/* &nbsp;&nbsp; */}
      <div className="ml-1 mr-2">
      <span class="material-symbols-outlined">
horizontal_rule
</span>
      </div>
     
      <span
        className="ml-1 mr-2 
        border-groove
        border-2 pl-1 pr-1
        border-slate-400"
        >
        11
      </span>

      {/* &nbsp;&nbsp; */}
      <span className="font-semibold ml-1 mr-2 "> B </span>
      {/* &nbsp;&nbsp; */}
      <span className="italic ml-1 mr-2 "> I </span>
      {/* &nbsp;&nbsp; */}
      <span className="underline-offset-8 ml-1 mr-2">U</span>
      {/* &nbsp;&nbsp; */}
      <span className="ml-1 mr-2"> A </span>
      {/* &nbsp;&nbsp; */}
      <div className="ml-1 mr-2">
        <span class="material-symbols-outlined">format_ink_highlighter</span>
      </div>
      {/* &nbsp;&nbsp; */}

      <span class="material-symbols-outlined">more_vert</span>
      {/* &nbsp;&nbsp;
&nbsp;&nbsp; */}
</div>
<div className="flex flex-row self-center ">
      <span class="material-symbols-outlined">edit</span>
      <span class="material-symbols-outlined">arrow_drop_down</span>
      <span className=" opacity-20 ml-2 mr-3"> | </span>
      <span class="material-symbols-outlined">expand_less</span>
</div>
    </div>
  );
}

export default Toolbar;
