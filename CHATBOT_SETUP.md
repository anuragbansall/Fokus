# AI Chatbot Setup Guide

## Overview

The Fokus website now includes an AI-powered customer assistant chatbot that uses Google's Gemini API to answer customer questions about products, ingredients, ordering, and company information.

## Features

- 🤖 AI-powered responses using Gemini API
- 💬 Real-time chat interface
- 🎯 Company-specific knowledge base
- 📱 Responsive design
- 🎨 Fokus brand colors and styling
- 🚀 Smooth animations with Framer Motion

## Setup Instructions

### 1. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables

1. Open the `.env` file in the project root
2. Replace `your_gemini_api_key_here` with your actual API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

### 3. Start the Development Server

```bash
npm run dev
```

## How It Works

### Knowledge Base

The chatbot has been programmed with comprehensive information about:

- **Company Information**: Founders, mission, brand story
- **Products**: All 3 flavors with detailed descriptions
- **Ingredients**: Complete list with benefits
- **Pricing & Shipping**: Current offers and delivery information
- **Celebrity Endorsements**: Reviews from influencers

### Smart Filtering

The AI is programmed to:

- Only answer Fokus-related questions
- Redirect off-topic conversations back to Fokus
- Maintain a friendly, energetic brand voice
- Use casual language that matches the brand's vibe

### UI/UX Features

- **Floating Chat Button**: Positioned in bottom-right corner
- **Attention Indicator**: Red notification badge with pulse animation
- **Gradient Styling**: Uses brand colors (red, green, yellow)
- **Smooth Animations**: Framer Motion for enter/exit transitions
- **Responsive Design**: Works on all device sizes
- **Loading States**: Animated dots while AI processes responses

## Chatbot Capabilities

### Can Answer Questions About:

✅ Product flavors and ingredients  
✅ Pricing and shipping information  
✅ Company background and founders  
✅ Health benefits and nutritional info  
✅ Ordering process and policies  
✅ Brand story and mission

### Will Redirect If Asked About:

❌ Unrelated products or companies  
❌ General health advice  
❌ Non-Fokus topics  
❌ Technical support unrelated to Fokus

## Customization

### Updating Company Information

Edit the `COMPANY_CONTEXT` constant in `src/components/Chatbot.jsx` to update the AI's knowledge base.

### Styling Changes

The chatbot uses Tailwind CSS classes and can be customized by modifying:

- Color gradients
- Animation timings
- Chat bubble styles
- Button appearances

### Adding New Features

The component is built with React hooks and can be extended with:

- Message persistence
- User authentication
- File upload capabilities
- Voice messaging

## Security Notes

- Keep your API key private
- Never commit the `.env` file to version control
- Consider implementing rate limiting for production use
- Monitor API usage to avoid unexpected costs

## Troubleshooting

### Common Issues:

1. **Chatbot not responding**: Check if API key is correctly set in `.env`
2. **API errors**: Verify your Gemini API key is valid and has proper permissions
3. **Styling issues**: Ensure Tailwind CSS is properly configured
4. **Animation problems**: Check that Framer Motion is installed

### Debug Mode:

Check the browser console for error messages if the chatbot isn't working properly.

## Production Deployment

Before deploying to production:

1. Set the `VITE_GEMINI_API_KEY` environment variable on your hosting platform
2. Test the chatbot thoroughly
3. Consider implementing usage limits
4. Monitor API costs and usage

The chatbot is now ready to help your customers with their Fokus-related questions! 🚀
