function downloadPDF() {
  const pdfPath = 'C:\Users\shree\Desktop\pftmgm\resume.pdf';

  const anchor = document.createElement('a');

  anchor.href = pdfPath;


  anchor.download = 'resume.pdf';


  anchor.click();
}