import { useState } from "react";


const Fblog = ({fblog, index}) => {
    console.log(fblog)
   
    return (
        <div  className="max-w-5xl mx-auto px-2">
        <table  data-aos="fade-up"
        data-aos-duration="2000" className="p-4 flex border justify-between items-center">
        <th>
            <h1>{index}</h1>
        </th>
        <tr className="flex gap-3">
            <td><h1 className="text-[13px] lg:text-xl font-semibold text-gray-700"> <span className="text-xl font-bold text-orange-800"></span>{fblog.title}</h1></td>
          
         

        </tr>
        <tr>
            <td className="flex items-center gap-5">
            <td><h1 className="text-[12px] lg:text-xl font-semibold text-gray-600"> <span className="text-xl font-bold text-orange-800"></span>{fblog.username}</h1></td>
            <img className="w-[60px] h-[60px] rounded-[50%]" src={fblog.profile} alt="" />
            </td>
        </tr>
   </table>
        </div>
    );
};

export default Fblog;