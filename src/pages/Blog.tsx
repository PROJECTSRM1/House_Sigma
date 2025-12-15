import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from "./Blog.module.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string; 
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Infographic: Ontario home sales trends and market insights for December 2025",
      excerpt: "As the year comes to a close, residential real estate transactions in Ontario show interesting trends with fluctuations in both pricing and volume across major markets.",
      date: "December 10, 2025",
      author: "Sarah Johnson",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How strategic timing can save buyers up to 15% in today's market",
      excerpt: "Understanding market cycles and seasonal trends can significantly impact your purchasing power. Here's what data reveals about optimal buying windows.",
      date: "December 8, 2025",
      author: "Michael Chen",
      category: "Buying Tips",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Toronto's top 10 most valuable properties and their transaction history",
      excerpt: "Luxury real estate continues to fascinate buyers and observers alike. We analyze the most expensive listings in the GTA and their price evolution.",
      date: "December 5, 2025",
      author: "Emma Williams",
      category: "Luxury Homes",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Understanding the new buyer competition metrics for informed decisions",
      excerpt: "Real estate platforms are evolving with AI-powered tools that give buyers unprecedented insight into listing popularity and competitive dynamics.",
      date: "December 3, 2025",
      author: "David Park",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "GTA market update: New listings versus sales in November analysis",
      excerpt: "Recent data shows an interesting divergence between new listings and completed sales, indicating shifting market dynamics favoring strategic buyers.",
      date: "November 28, 2025",
      author: "Sarah Johnson",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=500&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Mortgage rates forecast: What homebuyers should expect in 2025",
      excerpt: "With the Bank of Canada's recent policy shifts, understanding the interest rate landscape has become crucial for both buyers and refinancing homeowners.",
      date: "November 25, 2025",
      author: "Michael Chen",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 7,
      title: "First-time homebuyer's guide: Navigating Ontario's real estate market",
      excerpt: "Breaking into the real estate market can feel overwhelming. This comprehensive guide covers everything from saving for a down payment to closing day.",
      date: "November 20, 2025",
      author: "Emma Williams",
      category: "Buying Tips",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      readTime: "10 min read"
    },
    {
      id: 8,
      title: "Investment properties: ROI analysis across Ontario markets",
      excerpt: "Which Ontario markets offer the best returns for real estate investors? We break down rental yields, appreciation trends, and cash flow potential.",
      date: "November 15, 2025",
      author: "David Park",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 9,
      title: "Smart home technology trends transforming real estate in 2025",
      excerpt: "From AI-powered security systems to energy-efficient smart thermostats, discover how technology is adding value to modern homes and attracting tech-savvy buyers.",
      date: "November 10, 2025",
      author: "David Park",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 10,
      title: "Waterfront properties: Premium pricing and investment potential",
      excerpt: "Lakefront and waterfront homes command premium prices across Ontario. We explore what makes these properties unique and their long-term appreciation prospects.",
      date: "November 5, 2025",
      author: "Emma Williams",
      category: "Luxury Homes",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop",
      readTime: "9 min read"
    },
    {
      id: 11,
      title: "Understanding property taxes: A complete guide for Ontario homeowners",
      excerpt: "Property taxes can significantly impact your homeownership costs. Learn how they're calculated, when they're due, and strategies to manage these expenses.",
      date: "October 30, 2025",
      author: "Michael Chen",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 12,
      title: "Condo vs. house: Making the right choice for your lifestyle",
      excerpt: "The eternal debate for homebuyers. We compare maintenance, costs, lifestyle factors, and investment potential to help you make an informed decision.",
      date: "October 25, 2025",
      author: "Sarah Johnson",
      category: "Buying Tips",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 13,
      title: "Suburban boom continues: Why families are leaving the city",
      excerpt: "The pandemic-driven suburban migration shows no signs of slowing. Analyze the factors driving this trend and which suburban markets are thriving.",
      date: "October 20, 2025",
      author: "Emma Williams",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=500&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 14,
      title: "Short-term rental regulations: What investors need to know",
      excerpt: "New regulations are reshaping the short-term rental landscape. Stay informed about legal requirements, licensing, and how these changes impact investment strategies.",
      date: "October 15, 2025",
      author: "David Park",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
      readTime: "10 min read"
    },
    {
      id: 15,
      title: "Green building certifications and their impact on home values",
      excerpt: "LEED and other green certifications are becoming increasingly important. Discover how eco-friendly features affect resale values and attract environmentally conscious buyers.",
      date: "October 10, 2025",
      author: "Sarah Johnson",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop",
      readTime: "7 min read"
    }
  ];

  const categories = ["All", "Market Analysis", "Buying Tips", "Luxury Homes", "Technology", "Finance", "Investment"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={styles.blogContainer}>
      <Navbar />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Real Estate Insights & Market Analysis</h1>
          <p className={styles.heroDescription}>
            Stay informed with expert analysis, market trends, and insider knowledge about Ontario's real estate landscape
          </p>
        </div>
      </section>

      <main className={styles.blogMain}>
        <div className={styles.contentWrapper}>
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.blogGrid}>
            {filteredPosts.map(post => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.categoryBadge}>{post.category}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.author}>By {post.author}</span>
                    <a href={`/blog/${post.id}`} className={styles.readMore}>
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span className={styles.pageDots}>...</span>
            <button className={styles.pageBtn}>5</button>
            <button className={`${styles.pageBtn} ${styles.next}`}>Next Posts »</button>
          </div>
        </div>
      </main>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h3>Stay Updated with Market Insights</h3>
          <p>Subscribe to receive the latest real estate analysis and market reports directly to your inbox</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
