'use client';

import Link from 'next/link';

export default function PetAppPage() {
  const customCSS = `
    .petapp-page {
      font-family: 'Poppins', sans-serif;
      background-color: #f8f9fa;
      color: #333333;
      --primary-color: #FF6B35;
    }
    .petapp-nav { padding: 20px; position: absolute; top: 0; left: 0; width: 100%; z-index: 1000; display: flex; justify-content: space-between; align-items: center; }
    .petapp-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .petapp-logo { font-weight: bold; font-size: 1.2rem; color: #333; text-decoration: none; }
    .petapp-back-btn { text-decoration: none; color: #333; font-weight: 500; background: rgba(255,255,255,0.8); padding: 8px 15px; border-radius: 20px; backdrop-filter: blur(5px); }
    .petapp-hero { text-align: center; padding: 120px 20px 60px; background: linear-gradient(to bottom, #fff, #f8f9fa); }
    .petapp-hero h1 { font-size: 3rem; margin-bottom: 15px; font-weight: 700; line-height: 1.2; }
    .petapp-hero h1 span { color: #FF6B35; }
    .petapp-hero p.subtitle { font-size: 1.25rem; color: #666; max-width: 700px; margin: 0 auto 30px; }
    .petapp-hero-buttons { display: flex; justify-content: center; align-items: center; gap: 15px; flex-wrap: wrap; }
    .petapp-hero-btn { display: inline-block; background-color: #FF6B35; color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4); transition: transform 0.3s ease; }
    .petapp-hero-btn:hover { transform: translateY(-3px); }
    .petapp-btn-watch { background: white; border: 2px solid #eee; padding: 14px 30px; border-radius: 50px; color: #333; font-size: 16px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease; }
    .petapp-btn-watch:hover { border-color: #FF6B35; color: #FF6B35; transform: translateY(-3px); }
    .petapp-btn-watch i { font-size: 20px; color: #FF6B35; }
    .petapp-importance-note { text-align: center; padding: 40px 20px; background-color: #fff0e6; border-radius: 20px; margin: 40px auto; max-width: 800px; border-left: 5px solid #FF6B35; }
    .petapp-importance-note h3 { margin-top: 0; color: #FF6B35; }
    .petapp-app-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 40px; padding: 60px 0; }
    .petapp-feature-card { background: #ffffff; border-radius: 30px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); display: flex; align-items: center; gap: 30px; transition: transform 0.3s ease; border: 1px solid #eee; }
    .petapp-feature-card:hover { transform: translateY(-10px); border-color: #FF6B35; }
    .petapp-phone-mockup { flex: 0 0 200px; height: auto; border-radius: 25px; border: 8px solid #eee; overflow: hidden; background: white; }
    .petapp-phone-mockup img { width: 100%; height: auto; display: block; }
    .petapp-card-content { flex: 1; }
    .petapp-card-content h2 { font-size: 1.5rem; margin-bottom: 15px; color: #333; }
    .petapp-card-content p { color: #666; font-size: 1rem; margin-bottom: 20px; }
  `;

  return (
    <div className="petapp-page">
      <style>{customCSS}</style>
      <nav className="petapp-nav petapp-container">
        <Link href="/" className="petapp-logo">ShafaDart<span style={{ color: '#FF6B35' }}>.</span></Link>
        <Link href="/" className="petapp-back-btn">← Back to Portfolio</Link>
      </nav>

      <header className="petapp-hero">
        <div className="petapp-container">
          <h1>Adopt a Pet BD App 🐾<br />Your Ultimate Companion for Finding <span>Love.</span></h1>
          <p className="subtitle">More than just an app—it's a bridge between lonely hearts and forever homes. Discover, rescue, and connect with your new best friend today.</p>

          <div className="petapp-hero-buttons">
            <a href="/assets/Adopt_a_Pet_BD.apk" download className="petapp-hero-btn">Download App Now</a>
            <button className="petapp-btn-watch" onClick={() => window.open('https://www.youtube.com/watch?v=tDjz_XJZfSE', '_blank')}>
              <i className="fa-solid fa-circle-play"></i> Watch Story
            </button>
          </div>
        </div>
      </header>

      <div className="petapp-container">
        <div className="petapp-importance-note">
          <h3>❤️ Why This Matters for Pet Lovers</h3>
          <p>For cat and dog lovers, finding the right match or helping a stray can be challenging. This app simplifies the entire process, connecting a passionate community of rescuers and adopters to ensure every pet gets the loving home they deserve.</p>
        </div>
      </div>

      <section className="petapp-container">
        <div className="petapp-app-grid">
          <div className="petapp-feature-card">
            <div className="petapp-phone-mockup"><img src="/assets/pet_app_homepage.jpeg" alt="Home Feed" /></div>
            <div className="petapp-card-content">
              <h2>Personalized Home Feed</h2>
              <p>Browse an endless stream of adorable pets waiting for a home. Our smart algorithm shows you recommendations based on your preferences.</p>
            </div>
          </div>
          
          <div className="petapp-feature-card">
            <div className="petapp-phone-mockup"><img src="/assets/petdetailed.jpeg" alt="Details" /></div>
            <div className="petapp-card-content">
              <h2>Detailed Pet Profiles</h2>
              <p>Get to know them before you meet. View comprehensive details about their personality, health status, and story to find your perfect match.</p>
            </div>
          </div>

          <div className="petapp-feature-card">
            <div className="petapp-phone-mockup"><img src="/assets/petappprofile.jpeg" alt="Profile" /></div>
            <div className="petapp-card-content">
              <h2>Your Adoption Hub</h2>
              <p>Manage your favorite pets, track adoption applications, and update your preferences all from your dedicated profile page.</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', color: '#666', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Adopt a Pet BD. Developed by ShafaDart.❤️</p>
      </footer>
    </div>
  );
}
