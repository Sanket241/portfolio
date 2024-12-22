# Sanket Sharma's Portfolio

A modern, dynamic portfolio website showcasing Sanket's work, skills, and achievements with a clean, minimalist design.

## Features

- Dynamic background that adapts based on time of day
- Smooth scrolling animations using AOS (Animate On Scroll)
- Interactive project gallery with filtering (Web3 and Full Stack projects)
- Modern skill display with categorized tags
- Educational timeline
- Contact form with modern floating labels
- Social media integration
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (Modern features like Grid, Flexbox, and CSS Variables)
- JavaScript (ES6+)
- AOS (Animate On Scroll library)
- Font Awesome Icons

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css          # Styles and animations
├── script.js          # Interactive functionality
├── assets/           # Images and other assets
└── README.md         # Documentation
```

## Setup

1. Clone the repository
2. Add your profile picture as `profile.jpg` in the `assets` folder
3. Update social media links in `index.html`
4. Update project information in `script.js`

## Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `style.css`:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #2563eb;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --accent-color: #dbeafe;
}
```

### Projects
Add or modify projects in the `projects` array in `script.js`:

```javascript
const projects = [
    {
        title: 'Project Name',
        category: 'web3', // or 'fullstack'
        image: 'assets/project-image.jpg',
        description: 'Project description',
        technologies: ['Tech1', 'Tech2'],
        links: {
            github: 'https://github.com/...',
            live: 'https://...'
        }
    }
];
```

## Features to Add

- Blog section with dynamic content
- Dark mode toggle
- Project case studies
- Achievement/certification section
- Newsletter subscription

## License

MIT License - feel free to use this template for your own portfolio!
