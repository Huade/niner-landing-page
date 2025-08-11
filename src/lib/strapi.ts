interface StrapiConfig {
  url: string;
  apiToken?: string;
}

const strapiConfig: StrapiConfig = {
  url: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
  apiToken: import.meta.env.VITE_STRAPI_API_TOKEN,
};

export const fetchFromStrapi = async (endpoint: string, options?: RequestInit) => {
  const url = `${strapiConfig.url}/api/${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(strapiConfig.apiToken && {
      'Authorization': `Bearer ${strapiConfig.apiToken}`,
    }),
    ...options?.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Strapi fetch error:', error);
    throw error;
  }
};

export const getStrapiMediaUrl = (url?: string) => {
  if (!url) return '/api/placeholder/600/400';
  if (url.startsWith('http')) return url;
  return `${strapiConfig.url}${url}`;
};