const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function run() {
  const resumePath = path.join(process.cwd(), 'public', 'resume', 'Geethanjali_Resume.pdf');
  if (!fs.existsSync(resumePath)) {
    console.error('Resume PDF not found at', resumePath);
    process.exit(2);
  }

  const bytes = fs.readFileSync(resumePath);
  const pdfDoc = await PDFDocument.load(bytes);
  const pages = pdfDoc.getPages();
  if (!pages.length) {
    console.error('Resume PDF has no pages');
    process.exit(3);
  }

  const firstPage = pages[0];
  const { width } = firstPage.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const url = 'Portfolio: https://geethanjali-vn.vercel.app';

  firstPage.drawRectangle({
    x: 34,
    y: 28,
    width: width - 68,
    height: 26,
    color: rgb(0.05, 0.08, 0.14),
    borderColor: rgb(0.2, 0.55, 1),
    borderWidth: 1,
    opacity: 0.96,
  });

  firstPage.drawText(url, {
    x: 46,
    y: 36,
    size: 11,
    font,
    color: rgb(0.7, 0.88, 1),
  });

  const out = await pdfDoc.save();
  fs.writeFileSync(resumePath, out);
  console.log('Stamped portfolio link into', resumePath);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});