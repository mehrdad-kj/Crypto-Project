'use client';

import { useState } from 'react';
import CoinItem from './CoinItem';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d: {
    price: number[];
  };
}

interface CoinSearchProps {
  coins: Coin[];
}

export default function CoinSearch({ coins }: CoinSearchProps) {
  const [searchText, setSearchText] = useState('');

  return (
    <section className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="font-bold text-2xl my-2">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="search a coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
              return false;
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </section>
  );
}
