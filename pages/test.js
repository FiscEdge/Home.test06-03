import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="test-container" style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <Head>
        <title>FiscEdge Test Page</title>
        <meta name="description" content="Test page for deployment verification" />
      </Head>

      <main style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#003366', marginBottom: '20px' }}>
          FiscEdge Deployment Test
        </h1>
        
        <div style={{ 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#004080' }}>Deploy Successful!</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            This page confirms that your Next.js application has successfully been deployed to Vercel.
          </p>
          <p style={{ color: 'green', fontWeight: 'bold' }}>
            React version: {React.version}
          </p>
        </div>
        
        <Link href="/" style={{ 
          display: 'inline-block',
          background: '#003366',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Return to Home Page
        </Link>
      </main>
    </div>
  );
}
