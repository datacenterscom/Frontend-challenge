# Frontend-challenge

# Rick & Morty - Code Challenge

## Overview

## 🎯 Challenge Requirements

### Part 1: Design & Component Breakdown

**Deliverable:** Excalidraw file showing UI decomposition

- Break down the provided mockup using **Atomic Design principles**
- Identify atoms, molecules, organisms, and templates
- Plan component reusability and composition
- Document component hierarchy and data flow

### Part 2: Project Setup & Structure

**Required Project Structure:**
src/
├── components/
│ ├── atoms/ # Basic UI elements 
│ ├── molecules/ # Component combinations 
│ ├── organisms/ # Complex components 
│ └── templates/ # Page layouts
├── app/ # Next.js App Router pages
├── hooks/ # Custom React hooks
├── services/ # API/GraphQL services
├── types/ # TypeScript definitions
├── utils/ # Utility functions
└── tests/ # Test files

 ### Part 3: Core Features Implementation

#### 3.1 Client Management
- **List View** (SSR - Server-Side Rendered)
  - Display characters with basic info 
  - Show loading and error states

#### 3.2 GraphQL Integration

**Simple GraphQL Queries (No Fragments Required):**

```graphql
# Get all characters
query {
  characters   {
    results {
      id
      name
      status
      species
      type
      gender
    }
  }
}


```

**Service Layer Example:**
```typescript
// services/charactersService.ts
export class CharacterService {
  /**
   * Fetch all characters from the Rick & Morty API
   * @returns Promise with characters data
   */
  static async getCharacters(){
  }
}
```

### Part 4: Technical Requirements

#### 4.1 Framework & Tools
- **Next.js 14+** with App Router
- **TypeScript** (strict mode enabled)
- **TailwindCSS** for styling
- **GraphQL** with Apollo Client or similar
- **ESLint + Prettier** for code quality

#### 4.2 Performance Optimizations (Choose at least 2)

- Image optimization with Next.js `Image` component
- Proper loading states and skeleton screens

#### 4.3 State Management
- Use React hooks (`useState`, `useEffect`, custom hooks)
- Implement proper loading/error states
- Handle optimistic updates for better UX

### Part 5: Quality & Testing

#### 5.1 TypeScript
- No `any` types allowed
- Proper interface definitions for all data structures
- Type-safe GraphQL queries and responses

#### 5.2 Testing (bonus)
- Unit tests for utility functions
- Component tests with React Testing Library
- Integration tests for API calls
- E2E tests for critical user flows

#### 5.3 Accessibility
- Semantic HTML elements
- Proper ARIA labels
- Color contrast compliance

## 📋 Deliverables

1. **Excalidraw File**: UI component breakdown
2. **Next.js Project** with:
   - Complete source code following the specified structure
   - README with setup and run instructions
   - Environment configuration example
3. **Demo**

## 💡 Tips for Success

- **Start Simple**: Get the basic functionality working first, then add optimizations
- **Think Reusability**: Design components that can be easily extended or reused
- **Performance Matters**: Consider loading states, error handling, and user feedback
- **Document Decisions**: Explain your architectural choices and trade-offs

## 🚀 Getting Started

1. Set up Next.js project with TypeScript
2. Create basic component structure
3. Implement GraphQL client setup
4. Build core features incrementally
5. Add performance optimizations
6. Write tests and documentation

---
