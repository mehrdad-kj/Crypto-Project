'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import CoinSearch from '@/components/CoinSearch';
import Trending from '@/components/Trending';

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

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, []);

  return (
    <section>
      <CoinSearch coins={coins} />
      <Trending />
    </section>
  );
}
