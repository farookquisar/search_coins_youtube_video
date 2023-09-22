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
    return NextResponse.json(coins);
}