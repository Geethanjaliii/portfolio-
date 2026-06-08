const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function run() {
  const resumePath = path.join(process.cwd(), 'public', 'resume', 'Geethanjali_Resume.pdf');
  if (!fs.existsSync(resumePath)) {
    console.error('Resume PDF not found at', resumePath);
    process.exit(2);
  }

  const dataBuffer = fs.readFileSync(resumePath);
  try {
    const parser = (typeof pdf === 'function') ? pdf : (pdf && (pdf.default || pdf.pdf)) || pdf;
    const data = await parser(dataBuffer);
    const text = data.text.replace(/\r/g, '\n');
    const outDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
    fs.writeFileSync(path.join(outDir, 'resume.txt'), text, 'utf8');
    console.log('Extracted text written to tmp/resume.txt');

    const projects = ['Research Paper Agent', 'DocuMind AI', 'Project Kisan', 'MockMate', 'FitFlow', 'URL Shortener', 'Student Portal', 'SmartBizAI'];
    const lower = text.toLowerCase();
    for (const p of projects) {
      const idx = lower.indexOf(p.toLowerCase());
      if (idx !== -1) {
        const start = Math.max(0, idx - 300);
        const end = Math.min(text.length, idx + 800);
        console.log('\n----- Found project:', p, '-----\n');
        console.log(text.slice(start, end).trim());
      } else {
        console.log('\n----- Project not found in text:', p, '-----');
      }
    }
  } catch (err) {
    console.error('Error parsing PDF:', err);
    process.exit(1);
  }
}

run();
