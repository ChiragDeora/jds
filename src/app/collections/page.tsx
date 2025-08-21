'use client';

import { useMemo, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  tag?: string;
}

const DUMMY_PRODUCTS: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `p-${i + 1}`,
  name: [
    'Aviator Classic',
    'Wayfarer Edge',
    'Hexa Frame',
    'Optical Nova',
    'Cat-Eye Muse',
    'Round Retro',
    'Clubmaster Pro',
    'Pilot Shadow',
    'Square Bold',
    'Rimless Air',
    'Sport Glide',
    'Urban Lite',
  ][i],
  price: 2499 + (i % 6) * 300,
  tag: i % 4 === 0 ? 'Bestseller' : i % 5 === 0 ? 'Limited' : undefined,
}));

export default function Collections() {
  const [sort, setSort] = useState<'new'|'low'|'high'>('new');
  const products = useMemo(() => {
    const arr = [...DUMMY_PRODUCTS];
    if (sort === 'low') arr.sort((a,b)=>a.price-b.price);
    if (sort === 'high') arr.sort((a,b)=>b.price-a.price);
    return arr;
  }, [sort]);

  return (
    <section style={{ background: '#ffffff' }}>
      {/* HERO BANNER */}
      <div
        style={{
          position: 'relative',
          height: 240,
          overflow: 'hidden',
          background: '#ffffff',
          display: 'grid',
          placeItems: 'center',
          borderBottom: '1px solid #eee',
          marginTop: '80px'
        }}
      >
        <div style={{ textAlign: 'center', padding: '0 1rem' }}>
          <h1 style={{
            margin: 0,
            color: '#111',
            fontSize: 'clamp(1.8rem,4.2vw,2.6rem)',
            fontWeight: 900,
            letterSpacing: '-0.01em'
          }}>
            Finest Collections
          </h1>
          <div style={{ height: 3, width: 220, margin: '0.6rem auto 0.75rem', background: '#26A9E0' }} />
          <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>
            Premier • Signature • Elite • Top‑tier eyewear
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1200, margin:'0 auto', padding:'2rem 1.25rem 4rem' }}>
        {/* headline + sort */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 0 2rem', paddingBottom:'1rem', borderBottom:'1px solid #eee' }}>
          <div style={{ fontWeight:700, fontSize:'1.1rem', color:'#111' }}>248 Products</div>
          <label style={{ display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ fontSize:14, color:'#666', fontWeight:500 }}>Sort</span>
            <select
              value={sort}
              onChange={e=>setSort(e.target.value as any)}
              style={{ padding:'0.6rem 1rem', borderRadius:8, border:'1px solid #ddd', background:'#fff', fontSize:14, fontWeight:500 }}
            >
              <option value="new">Date, new to old</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
            </select>
          </label>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'300px 1fr', gap:'2rem' }}>
          {/* FILTER SIDEBAR (static for now) */}
          <aside>
            <FilterGroup title="Product Type" options={['Aviators', 'Wayfarers', 'Hexagonal', 'Optical', 'Cat‑Eye']} />
            <FilterGroup title="Price" options={['Under ₹2,000', '₹2,000–₹3,000', '₹3,000+']} />
            <FilterGroup title="Frame Color" options={['Black', 'Silver', 'Gold', 'Gunmetal', 'Tortoise']} />
            <FilterGroup title="Lens Color" options={['Grey', 'Green', 'Brown', 'Blue', 'Mirror']} />
          </aside>

          {/* PRODUCTS GRID */}
          <div
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
              gap:'1.5rem'
            }}
          >
            {products.map((p)=> (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*='grid-template-columns:300px 1fr'] { grid-template-columns: 1fr; }
          div[style*='repeat(auto-fill, minmax(280px, 1fr))'] { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        @media (max-width: 768px) {
          div[style*='repeat(3'] { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (max-width: 520px) {
          div[style*='repeat(2'] { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ background:'#fff', borderRadius:16, overflow:'hidden', border:'1px solid #f0f0f0', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', transition:'transform 0.2s ease, box-shadow 0.2s ease' }}>
      {/* Image placeholder */}
      <div style={{ position:'relative', aspectRatio:'1/1', background:'linear-gradient(180deg,#f8f9fa,#f1f3f4)' }}>
        {product.tag && (
          <span style={{ position:'absolute', left:12, top:12, background:'#26A9E0', color:'#fff', fontSize:11, fontWeight:700, padding:'6px 10px', borderRadius:6, letterSpacing:'0.05em' }}>
            {product.tag}
          </span>
        )}
        <div style={{ position:'absolute', inset:0, display:'grid', placeItems:'center', color:'#999', fontSize:13, fontWeight:500 }}>Image</div>
      </div>
      {/* Meta */}
      <div style={{ padding:'1rem 1.25rem 1.25rem' }}>
        <div style={{ fontWeight:700, marginBottom:8, fontSize:'1rem', color:'#111' }}>{product.name}</div>
        <div style={{ fontSize:15, color:'#666', fontWeight:600, marginBottom:16 }}>₹{product.price.toLocaleString('en-IN')}</div>
        <div style={{ display:'flex', gap:10 }}>
          <a href="#" style={{ flex:1, textAlign:'center', padding:'0.75rem 1rem', borderRadius:8, background:'#111', color:'#fff', textDecoration:'none', fontWeight:600, fontSize:14, transition:'background 0.2s ease' }}>Add to Bag</a>
          <a href="#" style={{ padding:'0.75rem 1.25rem', borderRadius:8, border:'1px solid #ddd', textDecoration:'none', color:'#111', fontWeight:500, fontSize:14, transition:'border-color 0.2s ease' }}>View</a>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <details open style={{ marginBottom:12, background:'#fff', border:'1px solid #eee', borderRadius:8, overflow:'hidden' }}>
      <summary
        style={{
          listStyle:'none',
          cursor:'pointer',
          background:'#e8e8e8',
          color:'#111',
          padding:'0.9rem 1rem',
          fontWeight:800,
          textTransform:'uppercase',
          letterSpacing:'0.06em'
        }}
      >
        {title}
      </summary>
      <div style={{ padding:'0.9rem 1rem' }}>
        {options.map((option, idx) => (
          <label key={idx} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8, fontSize:14, color:'#111', cursor:'pointer' }}>
            <input type="checkbox" style={{ width:16, height:16, accentColor:'#26A9E0' }} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </details>
  );
}
