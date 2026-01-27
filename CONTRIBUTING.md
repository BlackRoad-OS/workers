# Contributing to BlackRoad OS Workers

🖤🛣️ Thank you for your interest in contributing to BlackRoad OS Workers! This document provides guidelines and instructions for contributing.

## 🌟 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Cloudflare account (or use the BlackRoad account: `848cf0b18d51e0170e0d1537aec3505a`)
- Git installed
- Basic knowledge of TypeScript and Cloudflare Workers

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/workers.git
   cd workers
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/BlackRoad-OS/workers.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-new-endpoint`
- `fix/cors-issue`
- `docs/update-readme`
- `refactor/simplify-routing`

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run type checking
npm run typecheck

# Run linting
npm run lint

# Run tests
npm test

# Test locally
npm run dev
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new ecosystem endpoint"
git commit -m "fix: resolve CORS configuration issue"
git commit -m "docs: update API documentation"
git commit -m "refactor: simplify request handler"
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with:
   - Clear description of changes
   - Related issue numbers (if any)
   - Testing performed
   - Screenshots (if applicable)

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types/interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

```typescript
// Good
interface EcosystemData {
  organizations: number;
  repositories: string;
  workers: number;
}

function getEcosystemStats(): EcosystemData {
  return {
    organizations: 15,
    repositories: '315+',
    workers: 82,
  };
}

// Bad
function getData(): any {
  return { orgs: 15, repos: '315+' };
}
```

### Code Formatting

We use Prettier for code formatting:

```bash
npm run format
```

### Linting

We use ESLint for code quality:

```bash
npm run lint
```

## 🧪 Testing

### Writing Tests

- Write tests for new features
- Update tests when modifying existing code
- Aim for good test coverage
- Test edge cases

```typescript
// Example test structure
import { describe, it, expect } from 'vitest';

describe('Health Check Endpoint', () => {
  it('should return healthy status', async () => {
    const response = await fetch('http://localhost:8787/health');
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.status).toBe('healthy');
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 📚 Documentation

### Code Comments

- Add JSDoc comments for functions and classes
- Explain complex logic
- Document API endpoints

```typescript
/**
 * Fetches ecosystem statistics from the BlackRoad index
 * 
 * @param includePrivate - Whether to include private repos in count
 * @returns EcosystemData object with org and repo counts
 */
async function fetchEcosystemStats(includePrivate = false): Promise<EcosystemData> {
  // Implementation
}
```

### README Updates

- Update README.md when adding new features
- Keep examples current
- Update configuration instructions

## 🔗 Integration with BlackRoad Ecosystem

When integrating with other BlackRoad repositories:

1. **Check the Index**: Review [BlackRoad-OS/index](https://github.com/BlackRoad-OS/index) for available services
2. **Use Standard Patterns**: Follow patterns used in other BlackRoad repos
3. **Update Documentation**: Document integrations in README.md
4. **Test Integration**: Ensure your changes work with related services

### Key Integration Points

- **API Gateway**: `blackroad-api`
- **Continuity**: `blackroad-continuity-api`
- **Auth**: `blackroad-auth`
- **Lucidia**: `lucidia-core`

## 🐛 Bug Reports

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps to reproduce the bug
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**: OS, Node version, browser (if applicable)
6. **Screenshots**: If applicable

## 💡 Feature Requests

When requesting features:

1. **Use Case**: Describe the problem you're trying to solve
2. **Proposed Solution**: Your idea for how to solve it
3. **Alternatives**: Other solutions you've considered
4. **Additional Context**: Any other relevant information

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows the style guidelines
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] Commit messages follow Conventional Commits
- [ ] No console.log() statements left in code
- [ ] Environment variables documented in .env.example
- [ ] PR description is clear and complete

## 🔍 Code Review Process

1. **Automated Checks**: CI/CD runs tests and linting
2. **Manual Review**: Maintainers review code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, maintainers will merge
5. **Deployment**: Changes are deployed automatically

## 🎯 Priorities

Current focus areas:

- ✅ Core infrastructure setup
- 🚧 API endpoints for ecosystem integration
- 🚧 Authentication and authorization
- 📋 Testing infrastructure
- 📋 Monitoring and logging
- 📋 Performance optimization

## 💬 Communication

- **Issues**: Use GitHub Issues for bugs and features
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our [Discord server](https://discord.gg/blackroad) (if available)

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Your contributions help make BlackRoad OS better for everyone. Thank you for being part of the journey toward digital sovereignty! 🖤🛣️

---

<p align="center">
  <strong>Questions?</strong> Open an issue or reach out to the maintainers.
</p>
