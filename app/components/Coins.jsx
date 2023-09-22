import Image from "next/image";


export default function Coins({ coins })
{

  return (
    <>
      <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">

        <li className="flex flex-col">
          {/* <Image
            src={coins.iconUrl}
            alt={coin.name}
            width={70}
            height={70}
            priority
          /> */}
          <h3>{coins.firstName}</h3>
          <h3>{coins.middleName}</h3>
          <h3>{coins.lastName}</h3>
          {/* <p>{coin.symbol}</p>
                    <p>{coin.price}</p> */}
        </li>

      </ul>
    </>
  )
}
