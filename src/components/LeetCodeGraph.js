import React, { useState, useEffect } from 'react';
import './Resume.css';
import { fetchLeetCodeData, fetchLeetCodeDataAlternative, getLeetCodeGraphUrl } from '../utils/leetCodeUtils';
import { LEETCODE_CONFIG } from '../config/leetCode';
import { SiLeetcode } from 'react-icons/si';

function LeetCodeGraph() {
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const leetCodeUsername = LEETCODE_CONFIG.username;

  useEffect(() => {
    const loadLeetCodeData = async () => {
      try {
        setLoading(true);
        
        // Try primary API first
        let data = await fetchLeetCodeData(leetCodeUsername);
        
        // If primary fails, try alternative API
        if (!data) {
          data = await fetchLeetCodeDataAlternative(leetCodeUsername);
        }
        
        if (data) {
          setLeetCodeData(data);
          setError(null);
        } else {
          setError('Unable to fetch LeetCode data. Showing static graph as fallback.');
        }
      } catch (err) {
        console.error('Error fetching LeetCode data:', err);
        setError('Failed to load LeetCode data. Please check your username or try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadLeetCodeData();
  }, [leetCodeUsername]);

  if (loading) {
    return (
      <section className="resume-section" style={{ marginTop: '100px' }}>
        <h2><span className="icon"><SiLeetcode style={{ color: '#FFA116' }} /></span>LeetCode Profile</h2>
        <div className="resume-graph-container">
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Loading LeetCode data for {leetCodeUsername}...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="resume-section" style={{ marginTop: '100px' }}>
        <h2><span className="icon"><SiLeetcode style={{ color: '#FFA116' }} /></span>LeetCode Profile</h2>
        <div className="resume-graph-container">
          <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
            <p>{error}</p>
            <p>Showing static graph as fallback:</p>
          </div>
          <img
            src={getLeetCodeGraphUrl(leetCodeUsername)}
            alt="LeetCode Submission Graph"
            className="resume-graph-img"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="resume-section" style={{ marginTop: '100px' }}>
      <h2><span className="icon"><SiLeetcode style={{ color: '#FFA116' }} /></span>LeetCode Profile - {leetCodeUsername}</h2>
      
      {leetCodeData && (
        <div className="resume-graph-container">
          {/* Profile Information */}
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3>Profile Stats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div>
                <strong>Ranking:</strong> #{leetCodeData.profile?.ranking || 'N/A'}
              </div>
              <div>
                <strong>Star Rating:</strong> {leetCodeData.profile?.starRating || 'N/A'} ⭐
              </div>
              <div>
                <strong>Country:</strong> {leetCodeData.profile?.countryName || 'N/A'}
              </div>
            </div>
          </div>

          {/* Submission Stats */}
          {leetCodeData.submitStats && (
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3>Problem Solving Stats</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                {leetCodeData.submitStats.acSubmissionNum.map((stat, index) => (
                  <div key={stat.difficulty} style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold',
                      color: stat.difficulty === 'Easy' ? '#00af9b' : 
                             stat.difficulty === 'Medium' ? '#ffb800' : '#ff2d55'
                    }}>
                      {stat.count}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {stat.difficulty} Solved
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Badges */}
          {leetCodeData.badges && leetCodeData.badges.length > 0 && (
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3>Badges</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {leetCodeData.badges.slice(0, 5).map((badge) => (
                  <div key={badge.id} style={{ 
                    padding: '8px 12px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    borderRadius: '20px', 
                    fontSize: '12px' 
                  }}>
                    {badge.displayName}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submission Graph */}
          <div>
            <h3>Submission Activity</h3>
            <img
              src={getLeetCodeGraphUrl(leetCodeUsername)}
              alt="LeetCode Submission Graph"
              className="resume-graph-img"
              style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default LeetCodeGraph; 