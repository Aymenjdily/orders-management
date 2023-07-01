import Image from "next/image"

const Cards = (
    {
        data
    }
) => {
  return (
    <div className="flex cursor-pointer bg-black flex-row justify-between items-center gap-5 p-8 shadow-lg rounded-lg">
        <div>
            <h1 className="text-md font-bold text-gray-400 capitalize">
                {data.title}
            </h1>
            <p className="text-3xl text-white font-bold">
                {data.number}
            </p>
        </div>
        <div className="">
            <Image 
                src={data.image}
                alt={data.id}
                width={50}
                height={50}
            />
        </div>
    </div>
  )
}

export default Cards