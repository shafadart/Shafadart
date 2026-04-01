'use client';

import Link from 'next/link';

export default function BioLeafPage() {
  const customCSS = `
    .bioleaf-page {
      font-family: 'Poppins', sans-serif;
      background-color: #ffffff;
      color: #1b1b1b;
      --primary-green: #2E7D32;
      --light-green: #E8F5E9;
    }
    .bioleaf-navbar { padding: 20px 5%; display: flex; justify-content: space-between; align-items: center; position: absolute; width: 100%; z-index: 10; }
    .bioleaf-nav-logo { font-size: 1.5rem; font-weight: 700; color: #1b1b1b; text-decoration: none; }
    .bioleaf-back-btn { background: rgba(255, 255, 255, 0.8); padding: 8px 20px; border-radius: 30px; color: #1b1b1b; font-weight: 600; text-decoration: none; border: 1px solid #ddd; transition: 0.3s; }
    .bioleaf-back-btn:hover { background: #2E7D32; color: white; border-color: #2E7D32; }
    .bioleaf-hero { padding: 120px 5% 50px; text-align: center; background: linear-gradient(180deg, #f1f8e9 0%, #ffffff 100%); }
    .bioleaf-hero-title { font-size: 3.5rem; margin-bottom: 20px; font-weight: 700; color: #1b1b1b; }
    .bioleaf-hero-title span { color: #2E7D32; }
    .bioleaf-hero-desc { font-size: 1.2rem; color: #555; max-width: 600px; margin: 0 auto 30px; }
    .bioleaf-btn-group { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
    .bioleaf-btn { padding: 15px 35px; border-radius: 50px; font-weight: 600; font-size: 1rem; transition: 0.3s; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; }
    .bioleaf-btn-primary { background-color: #2E7D32; color: white; }
    .bioleaf-btn-primary:hover { box-shadow: 0 15px 30px rgba(46, 125, 50, 0.4); transform: translateY(-5px); }
    .bioleaf-btn-outline { border: 2px solid #1b1b1b; color: #1b1b1b; background: transparent; }
    .bioleaf-btn-outline:hover { background: #1b1b1b; color: white; }
    .bioleaf-features { padding: 80px 5%; max-width: 1200px; margin: auto; }
    .bioleaf-feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 50px; }
    .bioleaf-feature-card { background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); text-align: center; transition: 0.3s; border: 1px solid #f0f0f0; }
    .bioleaf-feature-card:hover { transform: translateY(-10px); border-color: #2E7D32; }
    .bioleaf-icon-box { width: 70px; height: 70px; background: #E8F5E9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 30px; color: #2E7D32; }
    .bioleaf-showcase { background: #111; color: white; padding: 80px 5%; text-align: center; border-radius: 30px 30px 0 0; }
    .bioleaf-showcase-title { font-size: 2.5rem; margin-bottom: 50px; color: #fff; }
    .bioleaf-screenshot-grid { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
    .bioleaf-phone-frame { width: 260px; border-radius: 20px; overflow: hidden; border: 5px solid #333; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
    .bioleaf-phone-frame img { width: 100%; display: block; }
    .bioleaf-tech { text-align: center; padding: 60px 20px; }
    .bioleaf-tech-icons { display: flex; justify-content: center; gap: 30px; font-size: 40px; color: #ddd; margin-top: 20px; }
    .bioleaf-tech-icons i:hover { color: #2E7D32; transform: scale(1.1); transition: 0.3s; }
  `;

  return (
    <div className="bioleaf-page">
      <style>{customCSS}</style>
      <nav className="bioleaf-navbar">
        <Link href="/" className="bioleaf-nav-logo">Shafa<span style={{ color: '#2E7D32' }}>.Dart</span></Link>
        <Link href="/" className="bioleaf-back-btn">← Back to Portfolio</Link>
      </nav>

      <section className="bioleaf-hero">
        <h1 className="bioleaf-hero-title">BioLeaf 🌿<br /> Your Pocket <span>Botanist</span></h1>
        <p className="bioleaf-hero-desc">Identify plants instantly, get care tips, and explore Vastu benefits with the power of Google Gemini AI.</p>
        
        <div className="bioleaf-btn-group">
          <a href="/assets/BioLeaf.apk" download className="bioleaf-btn bioleaf-btn-primary">
            <i className="fa-brands fa-android"></i> Download APK
          </a>
          <button className="bioleaf-btn bioleaf-btn-outline" onClick={() => alert("Demo video coming soon!")}>
            <i className="fa-solid fa-play"></i> Watch Demo
          </button>
        </div>
      </section>

      <section className="bioleaf-features">
        <div className="bioleaf-feature-grid">
          <div className="bioleaf-feature-card">
            <div className="bioleaf-icon-box"><i className="fa-solid fa-camera"></i></div>
            <h3>AI Identification</h3>
            <p>Snap a picture and let Gemini AI identify the plant instantly with 99% accuracy.</p>
          </div>
          <div className="bioleaf-feature-card">
            <div className="bioleaf-icon-box"><i className="fa-solid fa-user-doctor"></i></div>
            <h3>Plant Doctor</h3>
            <p>Get diagnosis for plant diseases and receive instant medicinal remedies (Ayurveda).</p>
          </div>
          <div className="bioleaf-feature-card">
            <div className="bioleaf-icon-box"><i className="fa-solid fa-compass"></i></div>
            <h3>Vastu Guide</h3>
            <p>Know the perfect spot for your plant to bring positive energy into your home.</p>
          </div>
        </div>
      </section>

      <section className="bioleaf-showcase">
        <h2 className="bioleaf-showcase-title">Beautiful & Clean Interface</h2>
        <div className="bioleaf-screenshot-grid">
          <div className="bioleaf-phone-frame"><img src="/assets/bio1.png" alt="Home Screen" /></div>
          <div className="bioleaf-phone-frame"><img src="/assets/bio2.png" alt="Scan Screen" /></div>
          <div className="bioleaf-phone-frame"><img src="/assets/bio3.png" alt="Result Screen" /></div>
        </div>
        
        <div className="bioleaf-tech">
          <p>Powered By</p>
          <div className="bioleaf-tech-icons">
            <i className="fa-brands fa-flutter" title="Flutter"></i>
            <i className="fa-solid fa-brain" title="Gemini AI"></i>
            <i className="fa-brands fa-google" title="Google Cloud"></i>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '14px', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} BioLeaf Project by Shafaur Rahman.</p>
      </footer>
    </div>
  );
}
