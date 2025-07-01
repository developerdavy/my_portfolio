# David Kamau Portfolio - System Architecture

## Overview

This is a modern, full-stack portfolio application built for David Kamau, a software developer specializing in web development and AI agent development. The application features a React-based frontend with a Node.js/Express backend, database integration capabilities via Drizzle ORM, and multi-language support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens and dark theme support
- **State Management**: TanStack Query for server state management
- **Internationalization**: Custom context-based language switching system supporting 6 languages (English, Spanish, French, German, Japanese, Chinese)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot module replacement via Vite integration

### UI Component System
- **Base**: Radix UI primitives for accessibility and behavior
- **Styling**: Tailwind CSS with CSS variables for theming
- **Design System**: shadcn/ui component library with "new-york" style variant
- **Theme**: Dark theme with custom blue/navy color palette
- **Typography**: Inter font family with JetBrains Mono for code

## Key Components

### Frontend Components
1. **Portfolio Container**: Main application wrapper with query client and providers
2. **Navigation**: Fixed header with smooth scrolling and language switcher
3. **Hero Section**: Animated typewriter effect showcasing roles and skills
4. **About Section**: Professional journey and expertise showcase
5. **Skills Section**: Interactive display of programming languages and frameworks
6. **Contact Section**: Multi-channel contact information with styled cards
7. **Language System**: Context-based internationalization with 6 language support

### Backend Infrastructure
1. **Express Server**: Main application server with middleware setup
2. **Route Handler**: Centralized API route registration system
3. **Storage Interface**: Abstracted storage layer with in-memory implementation
4. **Database Schema**: User management schema with Drizzle ORM
5. **Vite Integration**: Development server with HMR support

### Database Schema
```typescript
users: {
  id: serial (primary key)
  username: text (unique, not null)
  password: text (not null)
}
```

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: Query client manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle Kit handles schema migrations

### Platform Configuration
- **Railway**: Configured for deployment with Nixpacks builder
- **Environment**: NODE_ENV-based configuration switching
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Restart Policy**: Automatic restart on failure with max 10 retries

### Development Workflow
- **Local Development**: `npm run dev` starts both Vite dev server and Express backend
- **Database Management**: `npm run db:push` applies schema changes
- **Type Checking**: `npm run check` validates TypeScript compilation

## Changelog

```
Changelog:
- July 01, 2025. Migration completed with comprehensive enhancements
  * Added testimonials section with client feedback
  * Created pricing packages (KES 15k, 30k, 60k)
  * Added case study showcasing e-commerce project results
  * Included newsletter signup with web development tips
  * Enhanced skills section with AI tools (ChatGPT, Bolt, Figma)
  * Integrated social media links (WhatsApp, LinkedIn, Instagram)
  * Updated contact section with authentic profile links
  * Maintained responsive design and accessibility
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```