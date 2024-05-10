

const Comment = ({com}) => {
    const {photoURL, displayName, comment}= com;
    return (
        <div className="flex items-center my-8 gap-1">
        <img className="w-[60px] h-[60px] rounded-[50%]" src={photoURL} alt="" />
           
            <div className="bg-gray-400 w-full  rounded-xl p-4">
            
            <h1 className="text-[13px] font-bold ">{displayName}</h1>
            <h1>{comment}</h1>
            </div>
        </div>
    );
};

export default Comment;