import axios from 'axios';

interface EmailData {
  to: string;
  from:string,
  subject: string;
  body: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.body,
      },
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_APP_RESEND_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};