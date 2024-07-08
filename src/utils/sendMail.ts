const nodemailer = require('nodemailer');
 
export async function sendResetEmail(email) {
  const transporter = nodemailer.createTransport({
    // host: 'zimbra.vdp.it',
    // port: 25,
    // secure: false
    service: 'gmail',
    auth: {
      user: 'vdp.fonderia.schio@gmail.com',
      pass: 'c j g i s h a r b e q d s t j b',
    },
  });

  const mailOptions = {
    from: 'zimbra.vdp.it',
    to: email,
    subject: 'Appointment',
    html: `
    
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reminder: Appointment</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }

      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    
      h2 {
        color: #333;
      }
    
      p {
        color: #666;
      }
    
      .button {
        display: inline-block;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
      }
    </style>
    </head>
    <body>
      <div class="container">
        <h2>Reminder: Appointment</h2>
        <p>Hello Dear,</p>
        <p>This is a reminder that you have an appointment scheduled now. </p>
      </div>
    </body>
    </html>
    `,
  };
  

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}