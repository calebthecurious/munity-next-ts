// app/community/page.tsx
'use client';

import { useState } from 'react';

const CommunityBoard: React.FC = () => {
    // Sample data for the interest categories
    const categories = ['Music', 'Cooking', 'Gardening', 'Photography', 'Dance'];

    // State to manage the selected category
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    // State to manage the user's post content
    const [postContent, setPostContent] = useState<string>('');

    // Dummy data for posts
    const posts = [
        { id: 1, category: 'Music', content: 'How to tune a guitar?', author: 'Alice' },
        { id: 2, category: 'Cooking', content: 'Best vegan recipes?', author: 'Bob' },
        { id: 3, category: 'Dance', content: 'Best dance studios in town?', author: 'Charlie' },
    ];

    // Handler for form submission (just resets the form for now)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // In the real-world scenario, you'd send the postContent and selectedCategory to your backend
        console.log(`Category: ${selectedCategory}, Post: ${postContent}`);

        // Reset the form
        setSelectedCategory('');
        setPostContent('');
    };

    return (
        // ... [rest of the component as provided in the previous answers]
    );
};

export default CommunityBoard;
