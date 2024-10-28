import '@/styles/home.scss'

import { Suspense } from 'react';
import Pillars from '../components/Pillars';

export default function Home() {
  return (
    <main className='home'>
      <Suspense fallback="Loading...">
        <Pillars />
      </Suspense>
    </main>
  );
}
