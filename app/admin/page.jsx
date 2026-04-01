'use client';

import { useState, useEffect, useRef } from 'react';
import { getProjects, saveProjects, defaultProjects } from '@/lib/projectsData';
import { getGallery, saveGallery, defaultGallery } from '@/lib/galleryData';
import Link from 'next/link';

// =================== LOGIN SCREEN ===================
function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem('admin_token', data.token);
        onLogin();
      } else {
        setError('❌ Wrong password. Try again.');
        setPassword('');
      }
    } catch (err) {
      setError('❌ Connection error.');
    }
    setLoading(false);
  };

  const loginCSS = `
    .login-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0a0a0f; font-family: 'Poppins', sans-serif; padding: 20px; }
    .login-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 50px 40px; width: 100%; max-width: 420px; text-align: center; backdrop-filter: blur(10px); }
    .login-icon { font-size: 48px; margin-bottom: 20px; display: block; }
    .login-card h1 { font-size: 1.5rem; color: #f0f0f5; margin-bottom: 8px; }
    .login-card p { color: #9a9ab0; font-size: 14px; margin-bottom: 30px; }
    .login-input-wrap { position: relative; margin-bottom: 16px; }
    .login-input { width: 100%; padding: 14px 18px 14px 44px; background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1); border-radius: 14px; color: #f0f0f5; font-size: 15px; font-family: inherit; outline: none; transition: all 0.3s; }
    .login-input:focus { border-color: #00e68a; box-shadow: 0 0 20px rgba(0,230,138,0.15); }
    .login-input::placeholder { color: #6b6b80; }
    .login-input-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #6b6b80; font-size: 16px; }
    .login-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #00e68a, #00cc7a); color: #0a0a0f; border: none; border-radius: 14px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s; font-family: inherit; }
    .login-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,230,138,0.3); }
    .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .login-error { color: #ff4444; font-size: 13px; margin-top: 12px; }
    .login-back { display: block; margin-top: 20px; color: #6b6b80; text-decoration: none; font-size: 13px; transition: color 0.3s; }
    .login-back:hover { color: #00e68a; }
    .login-spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(10,10,15,0.3); border-top-color: #0a0a0f; border-radius: 50%; animation: spin 0.5s linear infinite; margin-right: 8px; vertical-align: middle; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;

  return (
    <div className="login-page">
      <style>{loginCSS}</style>
      <div className="login-card">
        <span className="login-icon">🔐</span>
        <h1>Admin Access</h1>
        <p>Enter password to manage your portfolio</p>

        <form onSubmit={handleSubmit}>
          <div className="login-input-wrap">
            <i className="fa-solid fa-lock login-input-icon"></i>
            <input
              ref={inputRef}
              type="password"
              className="login-input"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <><span className="login-spinner"></span>Verifying...</> : 'Unlock Admin Panel'}
          </button>
        </form>

        {error && <p className="login-error">{error}</p>}
        <Link href="/" className="login-back">← Back to Portfolio</Link>
      </div>
    </div>
  );
}

// =================== MAIN ADMIN PAGE ===================
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [tab, setTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  useEffect(() => {
    // Check if already logged in this session
    const token = sessionStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setProjects(getProjects());
      setGallery(getGallery());
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  // Show loading while checking auth
  if (checkingAuth) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9a9ab0' }}>
        Loading...
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  // =============== ADMIN PANEL LOGIC (same as before) ===============
  const showMsg = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3500);
  };

  const uploadToImgBB = async (file) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      setUploading(false);
      if (data.success) return data.url;
      showMsg('❌ Upload failed: ' + (data.error || 'Unknown'));
      return null;
    } catch (err) {
      showMsg('❌ Upload error: ' + err.message);
      setUploading(false);
      return null;
    }
  };

  // Projects CRUD
  const handleDelete = (id) => {
    if (confirm('Delete this project?')) {
      const updated = projects.filter((p) => p.id !== id);
      setProjects(updated);
      saveProjects(updated);
      showMsg('🗑️ Project deleted.');
    }
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setForm({ ...project, techString: project.tech.map((t) => `${t.icon}|${t.name}`).join(', ') });
  };

  const handleFormChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    showMsg('📤 Uploading...');
    const url = await uploadToImgBB(file);
    if (url) { handleFormChange('image', url); showMsg('✅ Image uploaded!'); }
  };

  const handleFormSave = () => {
    const techArray = form.techString
      ? form.techString.split(',').map((t) => {
          const parts = t.trim().split('|');
          return { icon: parts[0]?.trim() || 'fa-solid fa-code', name: parts[1]?.trim() || 'Tech' };
        })
      : [];
    const updated = projects.map((p) => (p.id === editingId ? { ...form, tech: techArray, id: editingId } : p));
    setProjects(updated);
    saveProjects(updated);
    setEditingId(null);
    showMsg('✅ Project updated!');
  };

  const handleAddNew = () => {
    const np = {
      id: Date.now(), title: 'New Project ✨', description: 'Describe your project...',
      tag: 'New', tagColor: '#00e68a', image: '/assets/logo.jpeg',
      tech: [{ icon: 'fa-solid fa-code', name: 'Tech' }],
      liveUrl: '', codeUrl: '', apkUrl: '', caseStudyUrl: '',
      isSpecialGradient: false, visualBg: 'rgba(0, 230, 138, 0.06)',
    };
    const updated = [...projects, np];
    setProjects(updated);
    saveProjects(updated);
    showMsg('➕ New project added! Click Edit to customize.');
  };

  const handleResetProjects = () => {
    if (confirm('Reset all projects to default?')) {
      localStorage.removeItem('portfolio_projects');
      setProjects(defaultProjects);
      showMsg('🔄 Projects reset.');
    }
  };

  const moveProject = (index, dir) => {
    const ni = index + dir;
    if (ni < 0 || ni >= projects.length) return;
    const updated = [...projects];
    [updated[index], updated[ni]] = [updated[ni], updated[index]];
    setProjects(updated);
    saveProjects(updated);
  };

  // Gallery
  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || e);
    if (!files.length) return;
    showMsg(`📤 Uploading ${files.length} image(s)...`);
    const newUrls = [];
    for (const file of files) { const url = await uploadToImgBB(file); if (url) newUrls.push(url); }
    if (newUrls.length) {
      const updated = [...gallery, ...newUrls];
      setGallery(updated);
      saveGallery(updated);
      showMsg(`✅ ${newUrls.length} image(s) added!`);
    }
  };

  const handleGalleryDelete = (index) => {
    const updated = gallery.filter((_, i) => i !== index);
    setGallery(updated);
    saveGallery(updated);
    showMsg('🗑️ Image removed.');
  };

  const handleResetGallery = () => {
    if (confirm('Reset gallery to default?')) {
      localStorage.removeItem('portfolio_gallery');
      setGallery(defaultGallery);
      showMsg('🔄 Gallery reset.');
    }
  };

  const css = `
    .admin-page { min-height: 100vh; background: #0a0a0f; color: #f0f0f5; padding: 30px 5%; font-family: 'Poppins', sans-serif; }
    .admin-header { margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; }
    .admin-header h1 { font-size: 1.8rem; background: linear-gradient(135deg, #00e68a, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: 8px; }
    .admin-btn { padding: 10px 24px; border: none; border-radius: 50px; font-weight: 600; cursor: pointer; font-size: 14px; transition: all 0.3s; display: inline-flex; align-items: center; gap: 6px; }
    .btn-green { background: linear-gradient(135deg, #00e68a, #00cc7a); color: #0a0a0f; }
    .btn-green:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,230,138,0.3); }
    .btn-red { background: rgba(255,68,68,0.15); color: #ff4444; border: 1px solid rgba(255,68,68,0.3); }
    .btn-red:hover { background: #ff4444; color: white; }
    .btn-blue { background: rgba(0,212,255,0.1); color: #00d4ff; border: 1px solid rgba(0,212,255,0.3); }
    .btn-blue:hover { background: #00d4ff; color: #0a0a0f; }
    .btn-outline { background: transparent; color: #9a9ab0; border: 1px solid rgba(255,255,255,0.1); }
    .btn-outline:hover { border-color: #00e68a; color: #00e68a; }
    .btn-logout { background: rgba(255,255,255,0.05); color: #9a9ab0; border: 1px solid rgba(255,255,255,0.08); }
    .btn-logout:hover { border-color: #ff4444; color: #ff4444; }
    .admin-msg { position: fixed; top: 20px; right: 20px; background: rgba(0,230,138,0.15); border: 1px solid rgba(0,230,138,0.3); color: #00e68a; padding: 14px 24px; border-radius: 12px; z-index: 9999; font-weight: 600; backdrop-filter: blur(10px); animation: slideIn 0.3s ease; }
    @keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
    .admin-tabs { display: flex; gap: 4px; margin-bottom: 30px; background: rgba(255,255,255,0.03); border-radius: 14px; padding: 4px; border: 1px solid rgba(255,255,255,0.06); width: fit-content; }
    .admin-tab { padding: 10px 28px; border-radius: 11px; border: none; background: transparent; color: #9a9ab0; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.3s; }
    .admin-tab.active { background: linear-gradient(135deg, #00e68a, #00cc7a); color: #0a0a0f; }
    .admin-tab:hover:not(.active) { color: #00e68a; }
    .admin-topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
    .admin-topbar-btns { display: flex; gap: 10px; flex-wrap: wrap; }
    .project-card-admin { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; margin-bottom: 12px; display: flex; gap: 16px; align-items: center; transition: all 0.3s; }
    .project-card-admin:hover { border-color: rgba(0,230,138,0.2); }
    .project-card-admin img { width: 72px; height: 72px; object-fit: cover; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
    .project-info { flex: 1; min-width: 0; }
    .project-info h3 { font-size: 1rem; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .project-info p { color: #9a9ab0; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .project-actions { display: flex; gap: 8px; flex-shrink: 0; }
    .project-actions button { padding: 8px 16px; font-size: 12px; }
    .order-btns { display: flex; flex-direction: column; gap: 4px; }
    .order-btns button { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; padding: 0; }
    .edit-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 2000; display: flex; justify-content: center; align-items: flex-start; padding: 40px 20px; overflow-y: auto; }
    .edit-form { background: #13131f; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 30px; width: 100%; max-width: 600px; }
    .edit-form h2 { margin-bottom: 20px; font-size: 1.3rem; }
    .form-group { margin-bottom: 14px; }
    .form-group label { display: block; margin-bottom: 5px; color: #9a9ab0; font-size: 13px; font-weight: 600; }
    .form-group input, .form-group textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #f0f0f5; font-size: 14px; font-family: inherit; outline: none; transition: border 0.3s; }
    .form-group input:focus, .form-group textarea:focus { border-color: #00e68a; }
    .form-group textarea { min-height: 70px; resize: vertical; }
    .form-group small { display: block; margin-top: 3px; color: #6b6b80; font-size: 11px; }
    .form-actions { display: flex; gap: 12px; margin-top: 20px; }
    .back-link { color: #9a9ab0; text-decoration: none; font-size: 14px; transition: color 0.3s; }
    .back-link:hover { color: #00e68a; }
    .upload-area { border: 2px dashed rgba(0,230,138,0.3); border-radius: 12px; padding: 12px; text-align: center; cursor: pointer; transition: all 0.3s; margin-top: 6px; }
    .upload-area:hover { border-color: #00e68a; background: rgba(0,230,138,0.03); }
    .upload-area.dragging { border-color: #00e68a; background: rgba(0,230,138,0.08); }
    .upload-area p { color: #9a9ab0; font-size: 13px; }
    .upload-area i { font-size: 24px; color: #00e68a; display: block; margin-bottom: 6px; }
    .upload-spinner { display: inline-block; width: 18px; height: 18px; border: 2px solid rgba(0,230,138,0.3); border-top-color: #00e68a; border-radius: 50%; animation: spin 0.6s linear infinite; margin-right: 8px; vertical-align: middle; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .preview-thumb { width: 100%; max-height: 150px; object-fit: contain; border-radius: 10px; margin-top: 8px; border: 1px solid rgba(255,255,255,0.1); }
    .gallery-admin-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
    .gallery-admin-item { position: relative; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); aspect-ratio: 1; }
    .gallery-admin-item img { width: 100%; height: 100%; object-fit: cover; }
    .gallery-admin-item .delete-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
    .gallery-admin-item:hover .delete-overlay { opacity: 1; }
    .gallery-admin-item .delete-overlay button { background: #ff4444; border: none; color: white; width: 36px; height: 36px; border-radius: 50%; font-size: 16px; cursor: pointer; }
    .empty-state { text-align: center; padding: 60px; color: #6b6b80; }
    .empty-state i { font-size: 40px; margin-bottom: 15px; display: block; }
  `;

  return (
    <div className="admin-page">
      <style>{css}</style>
      {message && <div className="admin-msg">{message}</div>}

      <div className="admin-header">
        <div>
          <Link href="/" className="back-link">← Back to Portfolio</Link>
          <h1>🛠️ Admin Panel</h1>
          <p style={{ color: '#9a9ab0', fontSize: '14px' }}>Manage your portfolio without touching code.</p>
        </div>
        <button className="admin-btn btn-logout" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </div>

      <div className="admin-tabs">
        <button className={`admin-tab ${tab === 'projects' ? 'active' : ''}`} onClick={() => setTab('projects')}>
          <i className="fa-solid fa-layer-group" style={{ marginRight: '6px' }}></i> Projects
        </button>
        <button className={`admin-tab ${tab === 'gallery' ? 'active' : ''}`} onClick={() => setTab('gallery')}>
          <i className="fa-solid fa-images" style={{ marginRight: '6px' }}></i> Gallery
        </button>
      </div>

      {/* PROJECTS TAB */}
      {tab === 'projects' && (
        <>
          <div className="admin-topbar">
            <p style={{ color: '#9a9ab0', fontSize: '13px' }}>{projects.length} project(s)</p>
            <div className="admin-topbar-btns">
              <button className="admin-btn btn-green" onClick={handleAddNew}><i className="fa-solid fa-plus"></i> Add Project</button>
              <button className="admin-btn btn-red" onClick={handleResetProjects}><i className="fa-solid fa-rotate-left"></i> Reset</button>
            </div>
          </div>
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-admin">
              <div className="order-btns">
                <button className="admin-btn btn-outline" onClick={() => moveProject(index, -1)}>↑</button>
                <button className="admin-btn btn-outline" onClick={() => moveProject(index, 1)}>↓</button>
              </div>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description?.substring(0, 70)}...</p>
                <p style={{ color: project.tagColor, fontSize: '11px', fontWeight: 600 }}>{project.tag}</p>
              </div>
              <div className="project-actions">
                <button className="admin-btn btn-blue" onClick={() => handleEdit(project)}><i className="fa-solid fa-pen"></i> Edit</button>
                <button className="admin-btn btn-red" onClick={() => handleDelete(project.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            </div>
          ))}
          {!projects.length && <div className="empty-state"><i className="fa-solid fa-folder-open"></i><p>No projects yet.</p></div>}
        </>
      )}

      {/* GALLERY TAB */}
      {tab === 'gallery' && (
        <>
          <div className="admin-topbar">
            <p style={{ color: '#9a9ab0', fontSize: '13px' }}>{gallery.length} photo(s)</p>
            <div className="admin-topbar-btns">
              <button className="admin-btn btn-green" onClick={() => galleryInputRef.current?.click()} disabled={uploading}>
                {uploading ? <><span className="upload-spinner"></span>Uploading...</> : <><i className="fa-solid fa-cloud-arrow-up"></i> Upload Photos</>}
              </button>
              <button className="admin-btn btn-red" onClick={handleResetGallery}><i className="fa-solid fa-rotate-left"></i> Reset</button>
            </div>
          </div>
          <input ref={galleryInputRef} type="file" accept="image/*" multiple onChange={handleGalleryUpload} style={{ display: 'none' }} />
          <div className="upload-area" onClick={() => galleryInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('dragging'); }}
            onDragLeave={(e) => e.currentTarget.classList.remove('dragging')}
            onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove('dragging'); handleGalleryUpload({ target: { files: e.dataTransfer.files } }); }}
            style={{ marginBottom: '20px' }}
          >
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <p>Click or drag & drop photos here</p>
            <small style={{ color: '#6b6b80' }}>Uploaded to ImgBB CDN • Fast loading</small>
          </div>
          <div className="gallery-admin-grid">
            {gallery.map((img, i) => (
              <div key={i} className="gallery-admin-item">
                <img src={img} alt={`Photo ${i + 1}`} />
                <div className="delete-overlay">
                  <button onClick={() => handleGalleryDelete(i)}><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            ))}
          </div>
          {!gallery.length && <div className="empty-state"><i className="fa-solid fa-images"></i><p>No photos. Upload some!</p></div>}
        </>
      )}

      {/* EDIT MODAL */}
      {editingId && (
        <div className="edit-modal" onClick={() => setEditingId(null)}>
          <div className="edit-form" onClick={(e) => e.stopPropagation()}>
            <h2>✏️ Edit Project</h2>
            <div className="form-group"><label>Title</label><input value={form.title || ''} onChange={(e) => handleFormChange('title', e.target.value)} /></div>
            <div className="form-group"><label>Description</label><textarea value={form.description || ''} onChange={(e) => handleFormChange('description', e.target.value)} /></div>
            <div className="form-group"><label>Tag</label><input value={form.tag || ''} onChange={(e) => handleFormChange('tag', e.target.value)} /></div>
            <div className="form-group"><label>Tag Color</label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input value={form.tagColor || ''} onChange={(e) => handleFormChange('tagColor', e.target.value)} style={{ flex: 1 }} />
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: form.tagColor || '#00e68a', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}></div>
              </div>
            </div>
            <div className="form-group"><label>Demo Image</label>
              <input value={form.image || ''} onChange={(e) => handleFormChange('image', e.target.value)} />
              <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
                {uploading ? <p><span className="upload-spinner"></span>Uploading...</p> : <><i className="fa-solid fa-cloud-arrow-up"></i><p>Upload image</p></>}
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              {form.image && <img src={form.image} alt="Preview" className="preview-thumb" />}
            </div>
            <div className="form-group"><label>Tech Stack</label><input value={form.techString || ''} onChange={(e) => handleFormChange('techString', e.target.value)} /><small>Format: icon|Name, comma separated</small></div>
            <div className="form-group"><label>Live Demo URL</label><input value={form.liveUrl || ''} onChange={(e) => handleFormChange('liveUrl', e.target.value)} /></div>
            <div className="form-group"><label>GitHub URL</label><input value={form.codeUrl || ''} onChange={(e) => handleFormChange('codeUrl', e.target.value)} /></div>
            <div className="form-group"><label>APK Path</label><input value={form.apkUrl || ''} onChange={(e) => handleFormChange('apkUrl', e.target.value)} /></div>
            <div className="form-group"><label>Case Study</label><input value={form.caseStudyUrl || ''} onChange={(e) => handleFormChange('caseStudyUrl', e.target.value)} /></div>
            <div className="form-group"><label>Card Background</label><input value={form.visualBg || ''} onChange={(e) => handleFormChange('visualBg', e.target.value)} /></div>
            <div className="form-actions">
              <button className="admin-btn btn-green" onClick={handleFormSave}><i className="fa-solid fa-check"></i> Save</button>
              <button className="admin-btn btn-outline" onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
