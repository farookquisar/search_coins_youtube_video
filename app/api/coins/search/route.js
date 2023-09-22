import { NextResponse } from "next/server";

async function fetchCoins()
{
    const response = await fetch('https://quapexweb.qu.edu.qa/ords/qucust/qu-google-acct-segment/get-employee-name', {
        "method": "GET",
        "headers": {
            'input': '15568',
            'apiKey': process.env.NEXT_PUBLIC_ORCL_CLIENT_ID,
            'host': 'quapexweb.qu.edu.qa'
        }

    })

    const coins = await response.json();
    return coins;

}

export async function GET(request)
{
    const coins = await fetchCoins();
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get('query'))
    const query = searchParams.get('query');
    console.log(query);

    // console.log(coins.firstName.toLowerCase().includes(query.toLowerCase()) || coins.firstName.toLowerCase().includes(query.toLowerCase()));
    const filteredCoins = coins?.firstName.toLowerCase().includes(query.toLowerCase()) ? coins : '';

    // const filteredCoins = coins.firstName.filter((coin) => {
    //     return coin.firstName.toLowerCase().includes(query.toLowerCase()) || coin.firstName.toLowerCase().includes(query.toLowerCase())
    // })
    console.log(filteredCoins);
    return NextResponse.json(filteredCoins);
    // return <></>
}