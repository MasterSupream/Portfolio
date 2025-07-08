// Utility functions for LeetCode data fetching
import { LEETCODE_APIS } from '../config/leetCode';

export const fetchLeetCodeData = async (username) => {
  try {
    // Try to fetch from LeetCode GraphQL API
    const response = await fetch(LEETCODE_APIS.primary, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              profile {
                ranking
                realName
                countryName
                starRating
                aboutMe
                userAvatar
              }
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
                totalSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              badges {
                id
                displayName
                icon
                category
              }
            }
          }
        `,
        variables: {
          username: username
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0]?.message || 'GraphQL error');
    }

    return data.data?.matchedUser;
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    
    // Return null to indicate failure, component will show fallback
    return null;
  }
};

// Alternative: Use a public API that scrapes LeetCode data
export const fetchLeetCodeDataAlternative = async (username) => {
  try {
    // You can use alternative APIs like:
    // - https://leetcode-stats-api.herokuapp.com/
    // - https://leetcode-api-faum.vercel.app/
    
    const response = await fetch(`${LEETCODE_APIS.alternative}/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching LeetCode data from alternative API:', error);
    return null;
  }
};

// Get the submission graph URL
export const getLeetCodeGraphUrl = (username, theme = 'light', font = 'baloo', ext = 'contest') => {
  return `${LEETCODE_APIS.graphCard}/${username}?theme=${theme}&font=${font}&ext=${ext}`;
}; 