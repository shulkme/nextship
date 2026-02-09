# Contributing to NextShip

Thank you for your interest in contributing to NextShip! We welcome contributions from everyone.

## 🎯 Ways to Contribute

- 🐛 Report bugs
- ✨ Suggest new features
- 📝 Improve documentation
- 🔧 Submit bug fixes
- 💡 Add new features
- 🌍 Add translations

## 📋 Before You Start

1. **Check existing issues**: Search [existing issues](https://github.com/shulkme/nextship/issues) to avoid duplicates
2. **Read the docs**: Familiarize yourself with the project structure and conventions
3. **Discuss major changes**: For significant changes, open an issue first to discuss your approach

## 🚀 Development Setup

### Prerequisites

- Node.js 18+ or 20+
- pnpm 8+ (required)
- Git

### Getting Started

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/nextship.git
cd nextship

# Add upstream remote
git remote add upstream https://github.com/shulkme/nextship.git

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

## 📝 Development Workflow

### 1. Create a Branch

```bash
# Update your fork
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or updates
- `chore/` - Maintenance tasks

### 2. Make Changes

Follow our coding standards:

#### Code Style

We use ESLint and Prettier for code formatting. Before committing:

```bash
# Check and fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Run type checking
pnpm type-check
```

#### TypeScript Guidelines

- **Use type imports**: `import type { User } from '@/types'`
- **No `any` types**: Use `unknown` or proper types
- **No non-null assertions**: Use proper checks or optional chaining
- **Prefer interfaces**: Use `interface` over `type` for object shapes

#### React Component Guidelines

```typescript
'use client'; // Only if client component needed

import type { FC, ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children?: ReactNode;
  onAction?: () => void;
}

/**
 * Component description
 * @param props - Component props
 */
const MyComponent: FC<MyComponentProps> = ({ title, children, onAction }) => {
  // Implementation
};

export default MyComponent;
```

#### File Organization

- Place components in appropriate directories
- Keep related files together
- Export from index files for clean imports
- Add README.md for new directories

### 3. Test Your Changes

```bash
# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Build the project
pnpm build

# Test in development
pnpm dev
```

**Manual Testing Checklist**:
- [ ] Test in both light and dark themes
- [ ] Test in both languages (English and Chinese)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check browser console for errors
- [ ] Verify SSR compatibility (check server logs)

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Good commit messages
git commit -m "feat: add user profile page"
git commit -m "fix: resolve theme toggle issue in Safari"
git commit -m "docs: update API documentation"
git commit -m "refactor: simplify token management"
git commit -m "chore: update dependencies"

# Bad commit messages
git commit -m "update stuff"
git commit -m "fix bug"
git commit -m "WIP"
```

Commit message format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### 5. Push and Create Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name

# Create pull request on GitHub
```

## 📤 Pull Request Guidelines

### PR Title

Use the same format as commit messages:
```
feat: add user authentication
fix: resolve mobile menu overflow
docs: update installation guide
```

### PR Description

Include:
1. **What**: Brief description of changes
2. **Why**: Motivation and context
3. **How**: Implementation approach (if complex)
4. **Testing**: How you tested the changes
5. **Screenshots**: For UI changes
6. **Breaking Changes**: If any

Template:
```markdown
## Description
Brief description of what this PR does.

## Motivation
Why is this change needed?

## Changes
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in dark mode
- [ ] Tested with both languages
- [ ] Mobile responsive
- [ ] Type checking passes
- [ ] Build succeeds

## Screenshots (if applicable)
[Add screenshots here]

## Breaking Changes
None / [Describe breaking changes]

## Related Issues
Closes #123
```

### PR Checklist

Before submitting, ensure:
- [ ] Code follows project conventions
- [ ] `pnpm lint:fix` passes
- [ ] `pnpm type-check` passes
- [ ] `pnpm format` applied
- [ ] `pnpm build` succeeds
- [ ] Documentation updated (if needed)
- [ ] Translations added (if user-facing)
- [ ] Tested in multiple browsers
- [ ] Tested in both themes
- [ ] Tested in both languages
- [ ] No console errors or warnings

## 🐛 Reporting Bugs

### Before Reporting

1. Update to the latest version
2. Search existing issues
3. Check if it's actually a bug (not a feature)

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome 120, Safari 17]
- Node version: [e.g. 20.10.0]
- pnpm version: [e.g. 8.15.0]

**Additional context**
Any other context about the problem.
```

## ✨ Requesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context, screenshots, or examples.

**Would you like to implement this feature?**
Yes/No - If yes, we'll guide you!
```

## 📚 Documentation

Documentation improvements are always welcome!

### What to Document

- New features or components
- Setup and installation steps
- Common use cases and examples
- Configuration options
- Troubleshooting guides

### Documentation Style

- Use clear, simple language
- Include code examples
- Add screenshots for UI features
- Keep it up-to-date
- Test all examples

## 🌍 Translations

To add a new language:

1. Add language config in `i18n/config.ts`:
```typescript
export const languages = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh' },
  { label: 'Español', value: 'es' }, // New language
];
```

2. Create translation file `locales/es.json`:
```json
{
  "global": {},
  "app": {},
  "web": {}
}
```

3. Copy structure from `locales/en.json` and translate

4. Test with the new language

## 🔍 Code Review Process

### What We Look For

- **Functionality**: Does it work as intended?
- **Code Quality**: Is it maintainable and readable?
- **Performance**: Any performance concerns?
- **Security**: Any security vulnerabilities?
- **Tests**: Are changes adequately tested?
- **Documentation**: Is it well documented?

### Review Timeline

- Small PRs: Usually within 1-2 days
- Medium PRs: Within 3-5 days
- Large PRs: May take up to a week

### Responding to Feedback

- Be patient and respectful
- Address all review comments
- Ask for clarification if needed
- Mark conversations as resolved after addressing
- Re-request review after updates

## 🎨 Design Guidelines

### UI/UX Principles

- **Consistency**: Follow existing design patterns
- **Accessibility**: Ensure keyboard navigation and screen readers work
- **Responsive**: Mobile-first approach
- **Performance**: Optimize images and assets
- **Internationalization**: Consider text expansion for translations

### Color Scheme

- Use Ant Design theme tokens
- Maintain contrast ratios for accessibility
- Support both light and dark modes

## 🔒 Security

### Reporting Security Issues

**DO NOT** open a public issue for security vulnerabilities.

Instead, email security concerns to: [Add your email]

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## 💬 Communication

- **GitHub Issues**: Bug reports and feature requests
- **Pull Requests**: Code contributions
- **Discussions**: General questions and ideas

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions

## 📜 License

By contributing to NextShip, you agree that your contributions will be licensed under the MIT License.

## ❓ Questions?

- Check [CLAUDE.md](./CLAUDE.md) for project structure and conventions
- Read [Quick Start Guide](./docs/QUICK_START.md) for usage examples
- Open a [GitHub Discussion](https://github.com/shulkme/nextship/discussions) for questions
- Check existing [Issues](https://github.com/shulkme/nextship/issues) for similar questions

## 🙏 Thank You!

Your contributions make NextShip better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🎉**
