# 💰 SmartExpense - Personal Finance Management System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A modern, feature-rich personal finance management web application built with vanilla JavaScript, HTML5, and CSS3. Track expenses, manage budgets, analyze spending patterns, and get AI-powered financial insights.

## 🌟 Features

### Core Functionality
- **📊 Dashboard**: Real-time overview of financial health with interactive charts
- **💳 Transaction Management**: Add, view, filter, and categorize transactions
- **📈 Analytics**: Deep insights with multiple chart types and spending patterns
- **💰 Budget Tracking**: Set category-wise budgets with visual progress indicators
- **🤖 AI Chatbot**: Get instant answers about your expenses and financial advice
- **🌓 Dark Mode**: Eye-friendly dark theme with smooth transitions
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Technical Highlights
- **Pure Vanilla JavaScript**: No framework dependencies, lightweight and fast
- **Local Storage**: Client-side data persistence
- **Chart.js Integration**: Beautiful, interactive data visualizations
- **CSS Animations**: Smooth transitions and micro-interactions
- **Modular Architecture**: Clean, maintainable code structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Live Demo

[View Live Demo](#) | [Watch Video Demo](#)

## 📸 Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Analytics
![Analytics](screenshots/analytics.png)

### Budget Management
![Budgets](screenshots/budgets.png)

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup and structure |
| CSS3 | Styling, animations, and responsive design |
| JavaScript (ES6+) | Application logic and interactivity |
| Chart.js | Data visualization and charts |
| LocalStorage API | Client-side data persistence |

## 📁 Project Structure

```
SmartExpense/
├── index.html              # Landing/Login page
├── dashboard.html          # Main dashboard
├── transaction.html        # Transaction management
├── analytics.html          # Analytics and insights
├── budgets.html           # Budget tracking
├── setttings.html         # User settings
├── 404.html               # Error page
├── css/
│   ├── main.css           # Core styles and utilities
│   ├── dashboard.css      # Dashboard-specific styles
│   ├── auth.css           # Authentication page styles
│   ├── darkmode.css       # Dark theme styles
│   └── chatbot.css        # Chatbot widget styles
├── js/
│   ├── storage.js         # LocalStorage management
│   ├── dashboard.js       # Dashboard logic
│   ├── bot.js             # Chatbot functionality
│   ├── theme.js           # Theme switching
│   ├── alerts.js          # Alert system
│   └── meter.js           # Budget meter calculations
└── assets/
    └── avatar.png         # User avatar placeholder
```

## 🎯 Key Features Breakdown

### 1. Dashboard
- Real-time balance display with trend indicators
- Monthly budget progress tracking
- Smart alerts and notifications
- Income vs Expenses chart (Line)
- Spending distribution chart (Doughnut)
- Recent transactions table

### 2. Transaction Management
- Add/Edit/Delete transactions
- Category-based filtering
- Search functionality
- Color-coded amounts (income/expense)
- Transaction statistics cards
- Animated table rows

### 3. Analytics
- Spending trend analysis
- Category breakdown visualization
- Day-of-week spending patterns
- Top spending categories
- Smart insights and recommendations
- Period selection (week/month/year)

### 4. Budget Management
- Category-wise budget allocation
- Visual progress bars with color coding
- Budget vs Actual comparison
- Historical budget tracking
- Over-budget alerts
- Monthly budget summary

### 5. AI Chatbot
- Natural language processing
- Expense queries
- Financial advice
- Budget recommendations
- Transaction summaries

## 💻 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smartexpense.git
   cd smartexpense
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file access
   open login.html
   
   # Option 2: Using Python server
   python -m http.server 8000
   # Visit http://localhost:8000
   
   # Option 3: Using Node.js
   npx serve
   ```

3. **Start using**
   - Login with any credentials (demo mode)
   - Explore the dashboard
   - Add transactions
   - Set budgets
   - View analytics

## 🎨 Design System

### Color Palette
```css
Primary:   #ff7a59 (Coral)
Secondary: #06b6d4 (Cyan)
Success:   #10b981 (Green)
Warning:   #f59e0b (Amber)
Error:     #ef4444 (Red)
Info:      #3b82f6 (Blue)
```

### Typography
- Font Family: Inter, System UI
- Headings: 600-700 weight
- Body: 400-500 weight
- Small text: 13-14px

### Components
- Cards with subtle shadows
- Gradient backgrounds
- Smooth animations (0.2-0.3s)
- Rounded corners (10-14px)
- Hover effects on interactive elements

## 📊 Data Management

### LocalStorage Schema
```javascript
{
  user: {
    name: string,
    email: string,
    avatar: string
  },
  transactions: [
    {
      id: string,
      title: string,
      amount: number,
      category: string,
      date: string,
      type: 'income' | 'expense'
    }
  ],
  budgets: {
    [category]: {
      limit: number,
      spent: number
    }
  },
  settings: {
    theme: 'light' | 'dark',
    currency: string,
    notifications: boolean
  }
}
```

## 🔒 Security Features

- Client-side data encryption (planned)
- No sensitive data transmission
- Local-only storage
- XSS protection
- Input sanitization

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari  | 14+ ✅ |
| Edge    | 90+ ✅ |

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚧 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] User authentication (JWT)
- [ ] Export data (CSV/PDF)
- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Bank account integration
- [ ] Receipt scanning (OCR)
- [ ] Investment tracking
- [ ] Bill reminders
- [ ] Expense sharing
- [ ] Mobile app (React Native)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- Portfolio: [yourportfolio.com](#)
- LinkedIn: [linkedin.com/in/yourprofile](#)
- GitHub: [@yourusername](#)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) - Beautiful charts
- [Inter Font](https://rsms.me/inter/) - Typography
- Icons: Emoji (Unicode)
- Inspiration: Modern fintech applications

## 📈 Project Stats

- **Lines of Code**: ~3,500+
- **Files**: 15+
- **Components**: 25+
- **Development Time**: 2 weeks
- **Last Updated**: December 2024

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- ✅ Vanilla JavaScript (ES6+)
- ✅ DOM Manipulation
- ✅ LocalStorage API
- ✅ Responsive Web Design
- ✅ CSS Animations
- ✅ Chart.js Integration
- ✅ UI/UX Design
- ✅ Code Organization
- ✅ Git Version Control

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ by [Your Name]
