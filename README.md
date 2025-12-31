# Santa's Workshop Dashboard
## 1. Project Overview
A React single-page application for managing a Christmas workshop.
The project demonstrates understanding of client-side routing, server state management, local UI state, and clean component architecture using a mock REST API.

## 2. Technologies and Tools
### 🖥️ Front-end
- React
- Vite
- React Router
- TanStack React Query
- JavaScript (ES6+)
- HTML5 & CSS3

### ⚙️ Back-end
- JSON Server (mock REST API)

## 3. Project Architecture
### Directory Structure
- /api – API request helpers
- /pages – page-level components
- /components – reusable UI components
- /hooks – custom React hooks
- /context – context providers

### Project Separation
- Client-side: React components responsible for rendering UI and handling user interactions.
- Server state: Data fetching and caching handled by React Query using a mock REST API.
- Application logic: Custom hooks and helpers used to separate logic from presentation.

## 4. Features and Pages
- Home Page - *Dashboard overview of the workshop*
- Toys - *List of available toys, Toy details view, Stock management functionality*
- Orders - *Orders list view, Order creation form, Order status management*
- Elves - *Elves list view, Individual elf profile pages, Nested tasks view for each elf*

## 5. Installation Instructions
1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Start the JSON server:
```bash
npm run server
```
4. Start the development server:
```bash
npm run dev
```
- Open in browser vite server on PORT 5173
- Open JSON server on PORT 3001

## 5. Future Improvements
- Pagination for large lists
- Skeleton loading components