import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Budget Meals Near College",
      excerpt: "Student life doesn't mean boring food. Check out these delicious yet affordable options that won't empty your wallet.",
      author: "TOMATO Team",
      readTime: "3 min read",
      category: "Student Life",
    },
    {
      id: 2,
      title: "Late Night Cravings? We Got You.",
      excerpt: "Discover the best late-night restaurants open till 3 AM. From midnight momos to 2 AM biryani.",
      author: "Food Explorer",
      readTime: "4 min read",
      category: "Night Owls",
    },
    {
      id: 3,
      title: "Why Food Delivery Saves You Time",
      excerpt: "Time is money. Learn how ordering food can save you hours every week and reduce decision fatigue.",
      author: "Life Hacker",
      readTime: "5 min read",
      category: "Productivity",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            From Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Food stories, tips, and the occasional meme
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover-lift card-shadow-hover group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">🍽️</span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>

                  <Link
                    to={`/blog${post.id}`}
                    className="text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
