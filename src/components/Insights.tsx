import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchFromStrapi, getStrapiMediaUrl } from '@/lib/strapi';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const Insights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchFromStrapi('blog-posts?populate=*');
        
        // Transform Strapi data to match our interface
        const transformedPosts = data.data?.map((item: any) => ({
          id: item.id,
          title: item.attributes.title,
          excerpt: item.attributes.excerpt,
          category: item.attributes.category,
          date: new Date(item.attributes.publishedAt || item.attributes.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }),
          image: getStrapiMediaUrl(item.attributes.image?.data?.attributes?.url),
          author: {
            name: item.attributes.author?.name || 'Guest Author',
            role: item.attributes.author?.role || 'Contributor',
            avatar: getStrapiMediaUrl(item.attributes.author?.avatar?.data?.attributes?.url)
          }
        })) || [];

        setPosts(transformedPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Unable to load insights');
        // Fallback to static data for development
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!sectionRef.current || loading) return;

    const cards = gsap.utils.toArray('.insight-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card as Element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading]);

  const fallbackPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Boost your conversion rate',
      excerpt: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla...',
      category: 'Marketing',
      date: 'Mar 16, 2020',
      image: '/api/placeholder/600/400',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        avatar: '/api/placeholder/40/40'
      }
    },
    {
      id: '2',
      title: 'How to use search engine optimization to drive sales',
      excerpt: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      category: 'Sales',
      date: 'Mar 10, 2020',
      image: '/api/placeholder/600/400',
      author: {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        avatar: '/api/placeholder/40/40'
      }
    },
    {
      id: '3',
      title: 'Improve your customer experience',
      excerpt: 'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure...',
      category: 'Business',
      date: 'Feb 12, 2020',
      image: '/api/placeholder/600/400',
      author: {
        name: 'Tom Cook',
        role: 'Director of Product',
        avatar: '/api/placeholder/40/40'
      }
    }
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        {loading && !error && (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-gray-500">{error}</p>
          </div>
        )}

        {!loading && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="insight-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                      {post.category}
                    </span>
                  </div>

                  <div className="group relative flex-1">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <a href="#" className="hover:text-blue-600 transition-colors">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-x-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Insights;