# Elite Web Solutions - Professional Web Development Website

## Overview

This is a professional B2B web development services website built as a single-page application. The application showcases web development services, features a contact form for lead generation, and follows Apple's Human Interface Guidelines for a premium, minimalist aesthetic. The site is designed to convey expertise and trust through generous white space, refined typography, and clean layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Implemented using Wouter, a lightweight client-side router. The application currently has two routes:
- `/` - Home page with service information and contact form
- `*` - 404 Not Found page

**State Management**: 
- React Query (@tanstack/react-query) for server state management and API data fetching
- React Hook Form for form state management with Zod schema validation
- Local component state using React hooks

**UI Framework**: 
- Shadcn/ui component library (customized variant using "new-york" style)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with custom theme configuration
- Custom design system based on Apple HIG principles

**Design Philosophy**:
- Content-first approach with strategic visual hierarchy
- Premium feel through Inter font family and refined typography
- Generous spacing using Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24)
- Responsive design with mobile-first breakpoints
- Subtle depth through soft shadows and layering

### Backend Architecture

**Framework**: Express.js running on Node.js with TypeScript support via TSX.

**Development Setup**: 
- Vite middleware integration in development mode for HMR (Hot Module Replacement)
- Static file serving in production from compiled dist directory
- Custom request logging middleware for API endpoints

**API Structure**:
- RESTful API endpoints under `/api` prefix
- Single endpoint currently: `POST /api/contact` for contact form submissions
- Request validation using Zod schemas shared between client and server
- JSON request/response format

**Error Handling**: 
- Centralized error handling with appropriate HTTP status codes
- Zod validation errors return 400 with error details
- Generic 500 errors for unexpected failures

### Data Storage

**Database**: Configured for PostgreSQL via Drizzle ORM with Neon serverless driver.

**ORM**: Drizzle ORM for type-safe database operations with schema-first approach.

**Schema Design**:
- `users` table: id (UUID primary key), username (unique), password
- `contact_inquiries` table: id (UUID primary key), name, email, company (optional), message, createdAt timestamp

**Validation**: Drizzle-Zod integration for automatic schema validation from database schema definitions.

**Current Implementation**: In-memory storage (MemStorage class) for development/demo purposes. The interface-based design (IStorage) allows easy swapping to database-backed storage without changing application code.

**Migration Management**: Drizzle Kit configured for schema migrations with output to `./migrations` directory.

### Authentication and Authorization

**Current State**: Basic user schema exists but authentication is not currently implemented. The contact form is publicly accessible without authentication requirements.

**Prepared Infrastructure**: User table with username/password fields ready for future authentication implementation.

### Build and Deployment

**Build Process**:
- Client: Vite builds React application to `dist/public`
- Server: ESBuild bundles Express server to `dist/index.js` as ESM module
- TypeScript compilation checking via `tsc`

**Scripts**:
- `dev`: Development server with TSX for TypeScript execution
- `build`: Production build of both client and server
- `start`: Production server execution
- `db:push`: Push database schema changes via Drizzle Kit

**Environment Variables**: 
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)
- `NODE_ENV`: Development/production environment flag

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (@radix-ui/react-*)
- **Shadcn/ui**: Pre-built component library built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component
- **Embla Carousel**: Carousel/slider component
- **Vaul**: Drawer component library

### Form Management
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Integration with validation libraries
- **Zod**: TypeScript-first schema validation

### Data Fetching and State
- **TanStack Query** (React Query): Server state management, caching, and data synchronization

### Database and ORM
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle Kit**: Database migration toolkit
- **Drizzle-Zod**: Integration for Zod schema generation from Drizzle schemas

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants
- **clsx**: Utility for conditional class names
- **tailwind-merge**: Merge Tailwind classes without conflicts
- **PostCSS**: CSS processing with Autoprefixer

### Development Tools
- **Vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **@replit/vite-plugin-***: Replit-specific development plugins (runtime error modal, cartographer, dev banner)
- **TypeScript**: Type safety and developer experience
- **TSX**: TypeScript execution for Node.js

### Routing
- **Wouter**: Lightweight client-side router (< 2KB)

### Utilities
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Unique ID generator

### Google Fonts
- **Inter**: Primary font for UI and body text
- **SF Pro Display**: Accent font for headlines (with Inter fallback)
- Additional fonts loaded: Architects Daughter, DM Sans, Fira Code, Geist Mono

### Asset Management
- Hero image stored in `attached_assets/generated_images/` directory
- Favicon served from public directory