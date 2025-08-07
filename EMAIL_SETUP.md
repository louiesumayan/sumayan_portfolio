# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send emails to `louiepable23@gmail.com` using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (`louiepable23@gmail.com`)
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{user_name}}

**Email Content:**
```
Name: {{user_name}}
Email: {{user_email}}
Message: {{message}}

This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key** (it starts with something like `user_xxxxxxxxxxxxx`)

## Step 5: Update Your Code

Replace the placeholder values in `assets/script/main.js`:

1. Find this line: `emailjs.init('YOUR_PUBLIC_KEY');`
   - Replace `'YOUR_PUBLIC_KEY'` with your actual Public Key from Step 4

2. Find this line: `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)`
   - Replace `'YOUR_SERVICE_ID'` with your Service ID from Step 2
   - Replace `'YOUR_TEMPLATE_ID'` with your Template ID from Step 3

## Step 6: Test Your Form

1. Open your website
2. Go to the Contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the test message

## Features Included

✅ **Form Validation**: All fields are required
✅ **Loading State**: Button shows "Sending..." while processing
✅ **Success/Error Notifications**: Visual feedback for users
✅ **Form Reset**: Form clears after successful submission
✅ **Responsive Design**: Works on all devices

## Troubleshooting

- **"Public Key is invalid"**: Make sure you're using your Public Key (not Service ID) in the `emailjs.init()` function
- **"Service ID not found"**: Double-check your Service ID in the EmailJS dashboard
- **"Template ID not found"**: Verify your Template ID is correct
- **Emails not received**: Check your Gmail spam folder
- **Form not submitting**: Open browser console (F12) to check for JavaScript errors

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- Basic email templates
- Gmail integration

For more emails or advanced features, consider upgrading to a paid plan.

## Security Note

The EmailJS service handles email sending securely. Your Gmail credentials are stored securely on EmailJS servers and are not exposed in your website code.

---

Your contact form is now ready to receive messages from visitors and send them directly to your Gmail inbox!
