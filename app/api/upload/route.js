import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Convert file to base64
    const bytes = await image.arrayBuffer();
    const base64 = Buffer.from(bytes).toString('base64');

    // Upload to ImgBB
    const imgbbForm = new FormData();
    imgbbForm.append('key', process.env.IMGBB_API_KEY);
    imgbbForm.append('image', base64);
    imgbbForm.append('name', image.name || `upload_${Date.now()}`);

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: imgbbForm,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        url: data.data.display_url,
        thumb: data.data.thumb?.url,
        delete_url: data.data.delete_url,
      });
    } else {
      return NextResponse.json({ error: 'Upload failed', details: data }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
