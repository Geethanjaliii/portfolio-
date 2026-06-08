import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), 'public', 'resume', 'Geethanjali_Resume.pdf');

    if (fs.existsSync(resumePath)) {
      const stats = fs.statSync(resumePath);
      const sizeInBytes = stats.size;
      const sizeInKB = Math.round(sizeInBytes / 1024);

      // Format date as "Month Year" (e.g., "June 2026")
      const lastModified = stats.mtime;
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      const formattedDate = lastModified.toLocaleDateString('en-US', options);

      return NextResponse.json({
        success: true,
        sizeKB: sizeInKB,
        lastUpdated: formattedDate,
        fileName: path.basename(resumePath),
        fileType: 'PDF Document',
      });
    } else {
      // Return a clear failure response without hardcoded metadata values
      return NextResponse.json({
        success: false,
        sizeKB: null,
        lastUpdated: null,
        fileName: null,
        fileType: null,
      });
    }
  } catch (error) {
    console.error('Error reading resume metadata:', error);
    return NextResponse.json({
      success: false,
      sizeKB: null,
      lastUpdated: null,
      fileName: null,
      fileType: null,
    });
  }
}
