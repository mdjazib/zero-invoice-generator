# Zero Invoice Generator

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-8.18.2-green?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript" alt="TypeScript Ready" />
</div>

<div align="center">
  <h3>🚀 Professional Invoice Generator • Zero Setup • Instant Results</h3>
  <p><strong>Create, share, and manage professional invoices without any account or subscription.</strong></p>
</div>

---

## ✨ Features

### 🎯 **Core Functionality**
- **📝 Dynamic Invoice Creation** - Add unlimited items with descriptions, quantities, and pricing
- **🏢 Company & Client Management** - Store and manage business and customer information
- **💱 Multi-Currency Support** - 10+ currencies including USD, EUR, GBP, PKR, AED, and more
- **🧾 Flexible GST/Tax System** - Configurable tax rates from 0% to 32%
- **🎨 Dark/Light Theme** - Toggle between professional themes with persistent preferences

### 📤 **Export & Sharing Options**
- **📄 High-Quality PNG Download** - 3x scale for crisp, professional invoices
- **🖨️ Direct Printing** - Browser-native print functionality
- **🔗 Shareable Links** - Generate unique URLs for each invoice
- **📧 Email Integration** - Send invoices directly to clients via email
- **💾 Local Storage** - Auto-save company details and preferences

### 🛠️ **Technical Excellence**
- **⚡ Next.js 15 with Turbopack** - Lightning-fast development and builds
- **🗄️ MongoDB Integration** - Persistent invoice storage and retrieval
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎭 Modern UI/UX** - Clean, intuitive interface with smooth animations
- **🔒 No Authentication Required** - Start creating invoices immediately

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB database
- Email service credentials (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dynamic-invoice-generator.git
   cd dynamic-invoice-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   MAIL_USER=your_email@domain.com
   MAIL_PASS=your_email_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
dynamic-invoice-generator/
├── app/
│   ├── [id]/                    # Dynamic invoice viewing page
│   │   └── page.jsx
│   ├── api/
│   │   └── invoice/
│   │       ├── [id]/            # Invoice retrieval API
│   │       ├── copy/            # Invoice sharing API
│   │       └── mail/            # Email sending API
│   ├── globals.sass             # Global styles
│   ├── layout.jsx               # Root layout with metadata
│   └── page.jsx                 # Main invoice generator
├── components/
│   ├── Description.jsx          # Invoice items management
│   └── Invoice.jsx              # Invoice display component
├── lib/
│   └── db.js                    # MongoDB connection
├── modal/
│   └── invoice.js               # Mongoose schema
└── package.json
```

---

## 🎯 Usage Guide

### Creating Your First Invoice

1. **Company Setup** (Step 1)
   - Enter your company name, website, and email
   - Information is automatically saved for future use

2. **Client Information** (Step 2)
   - Add customer details (name, email, contact, address)
   - Fields are optional for walk-in customers

3. **Invoice Items** (Step 3)
   - Add product/service descriptions
   - Set quantities and unit prices
   - Add/remove items as needed

4. **Customization**
   - Select currency from 10+ options
   - Choose appropriate GST/tax rate
   - Toggle between light and dark themes

5. **Export & Share**
   - **Download**: High-quality PNG image
   - **Print**: Direct browser printing
   - **Share Link**: Copy unique URL
   - **Email**: Send directly to client

---

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **SASS** - CSS preprocessing for maintainable styles
- **Lucide React** - Beautiful, customizable icons
- **Sonner** - Elegant toast notifications

### **Backend**
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB 8.18.2** - NoSQL database for invoice storage
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending functionality

### **Utilities**
- **Axios** - HTTP client for API requests
- **dom-to-image-more** - High-quality image generation
- **use-clipboard-copy** - Clipboard functionality

---

## 📊 API Endpoints

### `GET /api/invoice/[id]`
Retrieves a specific invoice by ID
```javascript
// Response
{
  "id": 1234567890,
  "companyName": "Your Company",
  "clientName": "Client Name",
  "invoice": [...],
  "currency": "USD",
  "gst": "0.10",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### `POST /api/invoice/copy`
Creates a shareable invoice link
```javascript
// Request Body (FormData)
{
  "id": "invoice_id",
  "companyName": "Company Name",
  "clientName": "Client Name",
  "invoice": "JSON_string",
  "currency": "USD",
  "gst": "0.10"
}
```

### `POST /api/invoice/mail`
Sends invoice via email
```javascript
// Request Body (FormData)
{
  "id": "invoice_id",
  "companyName": "Company Name",
  "clientEmail": "client@email.com",
  "invoice": "JSON_string",
  // ... other fields
}
```

---

## 🎨 Customization

### Theme Customization
The app supports both light and dark themes with CSS custom properties:

```css
:root {
  --base-color: lch(100 0 0);      /* Background */
  --text-color: lch(0 0 0);        /* Text */
  --accent-color: lch(36.94 59.85 9.8); /* Accent */
}
```

### Currency Support
Add new currencies by updating the `currencyObject` in `components/Invoice.jsx`:

```javascript
const currencyObject = {
  "USD": "$",
  "EUR": "€",
  "GBP": "£",
  "PKR": "Rs",
  // Add your currency here
};
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect GitHub and deploy with automatic builds
- **DigitalOcean**: Use App Platform for easy deployment

### Environment Variables
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
MAIL_USER=your-email@domain.com
MAIL_PASS=your-app-password
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and patterns
- Add comments for complex functionality
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Veb Edge** - Development and maintenance
- **Next.js Team** - Amazing React framework
- **MongoDB** - Reliable database solution
- **Open Source Community** - For the amazing tools and libraries

---

## 📞 Support

- **Documentation**: [GitHub Wiki](https://github.com/yourusername/dynamic-invoice-generator/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/dynamic-invoice-generator/issues)
- **Email**: support@vebedge.com

---

<div align="center">
  <p><strong>Made with ❤️ by Veb Edge</strong></p>
  <p>Smart tools for smart businesses</p>
</div>