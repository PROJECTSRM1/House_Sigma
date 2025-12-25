import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  const { t } = useTranslation();

  const blogPosts: BlogPost[] = [
     {
    id: 1,
    title: t("blog.posts.post1.title"),
    excerpt: t("blog.posts.post1.excerpt"),
    date: t("blog.posts.post1.date"),
    author: t("authors.sarah"),
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    readTime: t("blog.readTime.5")
  },
  {
    id: 2,
    title: t("blog.posts.post2.title"),
    excerpt: t("blog.posts.post2.excerpt"),
    date: t("blog.posts.post2.date"),
    author: t("authors.michael"),
    category: "Buying Tips",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop",
    readTime: t("blog.readTime.6")
  },
    {
      id: 3,
      title: t("blog.posts.post3.title"),
      excerpt: t("blog.posts.post3.excerpt"),
      date: t("blog.posts.post3.date"),
      author: t("authors.emma"),
      category: "Luxury Homes",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.7")
    },
    {
      id: 4,
      title: t("blog.posts.post4.title"),
      excerpt: t("blog.posts.post4.excerpt"),
      date: t("blog.posts.post4.date"),
      author: t("authors.david"),
      category: "Technology",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.5")
    },
    {
      id: 5,
      title: t("blog.posts.post5.title"),
      excerpt: t("blog.posts.post5.excerpt"),
      date: t("blog.posts.post5.date"),
      author: t("authors.sarah"),
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=500&fit=crop",
      readTime:   t("blog.readTime.6")
    },
    {
      id: 6,
      title: t("blog.posts.post6.title"),
      excerpt: t("blog.posts.post6.excerpt"),
      date: t("blog.posts.post6.date"),
      author: t("authors.michael"),
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.8")
    },
    {
      id: 7,
      title: t("blog.posts.post7.title"),
      excerpt: t("blog.posts.post7.excerpt"),
      date: t("blog.posts.post7.date"),
      author: t("authors.emma"),
      category: "Buying Tips",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.10")
    },
    {
      id: 8,
      title: t("blog.posts.post8.title"),
      excerpt: t("blog.posts.post8.excerpt"),
      date: t("blog.posts.post8.date"),
      author: t("authors.david"),
      category: "Investment",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop",
      readTime : t("blog.readTime.7")
    },
    {
      id: 9,
      title: t("blog.posts.post9.title"),
      excerpt: t("blog.posts.post9.excerpt"),
      date: t("blog.posts.post9.date"),
      author: t("authors.david"),
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.6")
    },
    {
      id: 10,
      title: t("blog.posts.post10.title"),
      excerpt: t("blog.posts.post10.excerpt"),
      date: t("blog.posts.post10.date"),
      author: t("authors.emma"),
      category: "Luxury Homes",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.9")
    },
    {
      id: 11,
      title: t("blog.posts.post11.title"),
      excerpt: t("blog.posts.post11.excerpt"),
      date: t("blog.posts.post11.date"),
      author: t("authors.michael"),
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.5")
    },
    {
      id: 12,
      title: t("blog.posts.post12.title"),
      excerpt: t("blog.posts.post12.excerpt"),
      date: t("blog.posts.post12.date"),
      author: t("authors.sarah"),
      category: "Buying Tips",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.8")
    },
    {
      id: 13,
      title: t("blog.posts.post13.title"),
      excerpt: t("blog.posts.post13.excerpt"),
      date: t("blog.posts.post13.date"),
      author: t("authors.emma"),
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.6")
    },
    {
      id: 14,
      title: t("blog.posts.post14.title"),
      excerpt: t("blog.posts.post14.excerpt"),
      date: t("blog.posts.post14.date"),
      author: t("authors.david"),
      category: "Investment",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.10")
    },
    {
      id: 15,
      title: t("blog.posts.post15.title"),
      excerpt: t("blog.posts.post15.excerpt"),
      date: t("blog.posts.post15.date"),
      author: t("authors.sarah"),
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop",
      readTime: t("blog.readTime.7")
    }
  ];

 const categories = [
    "All",
    "Market Analysis",
    "Buying Tips",
    "Luxury Homes",
    "Technology",
    "Finance",
    "Investment"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={styles.blogContainer}>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t("blog.heroTitle")}
          </h1>
          <p className={styles.heroDescription}>
            {t("blog.heroDescription")}
          </p>
        </div>
      </section>

      <main className={styles.blogMain}>
        <div className={styles.contentWrapper}>
          {/* CATEGORY FILTER */}
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {t(`blog.categories.${category}`)}
              </button>
            ))}
          </div>

          {/* BLOG GRID */}
          <div className={styles.blogGrid}>
            {filteredPosts.map(post => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.categoryBadge}>
                    {post.category}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.author}>
                      {t("blog.byAuthor")} {post.author}
                    </span>
                    <a
                      href={`/blog/${post.id}`}
                      className={styles.readMore}
                    >
                      {t("blog.readMore")} →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span className={styles.pageDots}>…</span>
            <button className={styles.pageBtn}>5</button>
            <button className={`${styles.pageBtn} ${styles.next}`}>
              {t("blog.nextPosts")} »
            </button>
          </div>
        </div>
      </main>

      {/* NEWSLETTER */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h3>{t("blog.newsletter.title")}</h3>
          <p>{t("blog.newsletter.description")}</p>
          <form
            className={styles.newsletterForm}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("blog.newsletter.placeholder")}
              required
            />
            <button type="submit">
              {t("common.subscribe")}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;