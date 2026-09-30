// Customer Dashboard
import React from 'react';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Welcome back, Cat Parent!</h1>
      <section className='purr-points'>
        <h2>Your Purr Points</h2>
        {/* TODO: fetch from loyalty API */}
      </section>
      <section className='recent-orders'>
        <h2>Recent Orders</h2>
        {/* TODO: fetch from order API */}
      </section>
      <section className='cat-profiles'>
        <h2>Your Cats</h2>
        {/* TODO: fetch from cat profile API */}
      </section>
    </div>
  );
}
