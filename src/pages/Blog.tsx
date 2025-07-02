import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "Exploring the latest trends and technologies that will shape the web development landscape in the coming year.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    category: "Technology",
    date: "December 15, 2023",
    readTime: "8 min read",
    author: "Gole Layla"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and architectural patterns for creating maintainable React applications.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      category: "React",
      date: "December 10, 2023",
      readTime: "6 min read",
      author: "Gole Layla"
    },
    {
      id: 3,
      title: "UI/UX Design Principles for Developers",
      excerpt: "Essential design principles that every developer should know to create better user experiences.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Design",
      date: "December 5, 2023",
      readTime: "5 min read",
      author: "Gole Layla"
    },
    {
      id: 4,
      title: "Introduction to Cloud Computing",
      excerpt: "A beginner's guide to cloud platforms and how they can benefit your development workflow.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      category: "Cloud",
      date: "November 28, 2023",
      readTime: "7 min read",
      author: "Gole Layla"
    },
    {
      id: 5,
      title: "Performance Optimization Techniques",
      excerpt: "Proven strategies to make your web applications faster and more efficient.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Performance",
      date: "November 20, 2023",
      readTime: "9 min read",
      author: "Gole Layla"
    },
    {
      id: 6,
      title: "The Rise of AI in Development",
      excerpt: "How artificial intelligence is transforming the way we write code and build applications.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      category: "AI",
      date: "November 15, 2023",
      readTime: "10 min read",
      author: "Gole Layla"
    },
    {
      id: 7,
      title: "Modern CSS Techniques",
      excerpt: "Advanced CSS features and techniques that will level up your styling game.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      category: "CSS",
      date: "November 8, 2023",
      readTime: "6 min read",
      author: "Gole Layla"
    }
  ];

  const categories = ["All", "Technology", "React", "Design", "Cloud", "Performance", "AI", "CSS"];

  return (
    <div>
       <Header />
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              My <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on web development, design, and technology.
              Stay updated with the latest trends and best practices.
            </p>
          </div>

          {/* Featured Post */}
          <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{featuredPost.author}</span>
                  </div>
                  <Button variant="gradient" className="rounded-full">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "gradient" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="p-12 bg-gradient-primary border-0 shadow-glow text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">Stay Updated</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter and get the latest articles and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 text-foreground"
              />
              <Button variant="secondary" className="rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;