# SmartExpense - Technical Documentation

## Architecture Overview

SmartExpense follows a modular, component-based architecture using vanilla JavaScript, HTML5, and CSS3.

### Design Patterns

1. **Module Pattern**: Each JavaScript file encapsulates related functionality
2. **Observer Pattern**: Event-driven updates for real-time data changes
3. **MVC-like Structure**: Separation of data (Storage), view (HTML), and logic (JS)

## File Structure

```
SmartExpense/
├── Pages (HTML)
│   ├── login.html          # Authentication page
│   ├── dashboard.html      # Main dashboard
│   ├── transaction.html    # Transaction management
│   ├── analytics.html      # Analytics & insights
│   ├── budgets.html       # Budget tracking
│   ├── setttings.html     # User settings
│   └── 404.html           # Error page
│
├── Styles (CSS)
│   ├── main.css           # Core styles, utilities, components
│   ├── dashboard.css      # Dashboard-specific layouts
│   ├── auth.css           # Authentication page styles
│   ├── darkmode.css       # Dark theme overrides
│   └── chatbot.css        # Chatbot widget styles
│
├── Scripts (JavaScript)
│   ├── storage.js         # LocalStorage CRUD operations
│   ├── dashboard.js       # Dashboard logic & charts
│   ├── bot.js             # Chatbot functionality
│   ├── theme.js           # Theme switching logic
│   ├── alerts.js          # Notification system
│   └── meter.js           # Budget calculations
│
└── Documentation
    ├── README.md          # Project overview
    ├── CHANGELOG.md       # Version history
    ├── CONTRIBUTING.md    # Contribution guidelines
    ├── LICENSE            # MIT License
    └── TECHNICAL.md       # This file
```

## Core Components

### 1. Storage System (`storage.js`)

**Purpose**: Manage all data persistence using LocalStorage API

**Key Functions**:
```javascript
Storage.getTransactions()     // Retrieve all transactions
Storage.addTransaction(tx)    // Add new transaction
Storage.updateTransaction(id) // Update existing transaction
Storage.deleteTransaction(id) // Remove transaction
Storage.getBudgets()          // Get budget data
Storage.setBudget(category)   // Set category budget
Storage.getSettings()         // User preferences
```

**Data Schema**:
```javascript
{
  transactions: [
    {
      id: "uuid",
      title: "string",
      amount: number,
      category: "string",
      date: "YYYY-MM-DD",
      type: "income" | "expense"
    }
  ],
  budgets: {
    [category]: {
      limit: number,
      spent: number
    }
  },
  user: {
    name: "string",
    email: "string",
    theme: "light" | "dark"
  }
}
```

### 2. Dashboard (`dashboard.js`)

**Purpose**: Initialize and update dashboard visualizations

**Key Features**:
- Chart.js integration for data visualization
- Real-time balance calculation
- Budget progress tracking
- Recent transactions display

**Chart Types**:
1. **Line Chart**: Income vs Expenses trend
2. **Doughnut Chart**: Category-wise spending distribution

### 3. Theme System (`theme.js`)

**Purpose**: Handle light/dark mode switching

**Implementation**:
```javascript
// Toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', getCurrentTheme());
}

// Load saved theme
function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
  }
}
```

### 4. Chatbot (`bot.js`)

**Purpose**: AI-powered financial assistant

**Capabilities**:
- Answer expense queries
- Provide budget recommendations
- Summarize spending patterns
- Financial tips and insights

**Sample Interactions**:
```
User: "How much did I spend on food?"
Bot: "You spent Rs.12,450 on food this month."

User: "Am I over budget?"
Bot: "You're at 70% of your monthly budget. You're on track!"
```

## CSS Architecture

### Design System

**CSS Variables** (`:root`):
```css
--bg: #fafbfc;           /* Background */
--card: #fff;            /* Card background */
--text: #0f172a;         /* Text color */
--muted: #6b7280;        /* Muted text */
--accent: #ff7a59;       /* Primary accent */
--accent-2: #06b6d4;     /* Secondary accent */
--radius: 14px;          /* Border radius */
```

**Utility Classes**:
- `.animate-slide-up` - Entrance animation
- `.badge` - Status indicators
- `.stat-card` - Metric cards
- `.btn` - Button styles
- `.card` - Container cards

### Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) { }

/* Tablet */
@media (max-width: 920px) {
  .sidebar { display: none; }
  .dashboard-grid { grid-template-columns: repeat(6, 1fr); }
}

/* Mobile */
@media (max-width: 520px) {
  .stats-row { grid-template-columns: 1fr; }
}
```

## Performance Optimizations

### 1. CSS Animations
- Hardware-accelerated transforms
- `will-change` property for smooth animations
- Debounced scroll events

### 2. JavaScript
- Event delegation for dynamic elements
- LocalStorage caching
- Lazy loading for charts
- Minimal DOM manipulation

### 3. Assets
- Optimized images
- Inline critical CSS
- Deferred script loading
- CDN for Chart.js

## Browser Compatibility

### Supported Features
- CSS Grid & Flexbox
- LocalStorage API
- ES6+ JavaScript
- CSS Custom Properties
- CSS Animations

### Polyfills (if needed)
- None required for modern browsers
- Graceful degradation for older browsers

## Security Considerations

### Current Implementation
- Client-side only (no server)
- LocalStorage for data persistence
- Input sanitization
- XSS protection via textContent

### Future Enhancements
- Backend API integration
- JWT authentication
- Data encryption
- HTTPS enforcement
- CSRF protection

## Testing Strategy

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works across pages
- [ ] Forms submit properly
- [ ] Charts render correctly
- [ ] Dark mode toggles
- [ ] LocalStorage persists data
- [ ] Responsive on mobile
- [ ] Cross-browser compatibility

### Browser Testing
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Static Hosting Options
1. **GitHub Pages**: Free, easy setup
2. **Netlify**: Automatic deployments
3. **Vercel**: Fast CDN
4. **AWS S3**: Scalable storage

### Build Process
No build process required - pure HTML/CSS/JS

### Environment Setup
```bash
# Clone repository
git clone https://github.com/yourusername/smartexpense.git

# Navigate to directory
cd smartexpense

# Open in browser
open login.html

# Or use local server
python -m http.server 8000
```

## API Integration (Future)

### Planned Endpoints
```
POST   /api/auth/login
POST   /api/auth/register
GET    /api/transactions
POST   /api/transactions
PUT    /api/transactions/:id
DELETE /api/transactions/:id
GET    /api/budgets
POST   /api/budgets
GET    /api/analytics
```

## Database Schema (Future)

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  name VARCHAR(100),
  created_at TIMESTAMP
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title VARCHAR(255),
  amount DECIMAL(10,2),
  category VARCHAR(50),
  type VARCHAR(10),
  date DATE,
  created_at TIMESTAMP
);
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## License

MIT License - See [LICENSE](LICENSE) file.

## Support

- GitHub Issues: Report bugs
- Email: support@smartexpense.com
- Documentation: /docs

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintainer**: Your Name
