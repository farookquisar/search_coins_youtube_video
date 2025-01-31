import { NextResponse } from "next/server";

async function fetchCoins()
{
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': 'd60309a2dbmsh632044c5269d41cp115ad2jsn95dbc3ebd84c',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
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

    const filteredCoins = coins.data.coins.filter((coin) =>
    {
        return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filteredCoins);
}