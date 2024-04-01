import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Dashboard = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch credentials from localStorage
    const name = localStorage.getItem('name');
    console.log(name, "nnn");
    const gmail = localStorage.getItem('email');
    console.log("gmail is", gmail);

    // Check if user with the same email already exists
    fetch(`/api/users/${gmail}`)
      .then(response => response.json())
      .then(data => {
        if (data.user_id) {
          // If user with the same email exists, get the user_id
          const userId = data.user_id;
          console.log('User already exists in the database. User ID:', userId);
          setUserId(userId);
          // Store the user_id in localStorage
          localStorage.setItem('userId', userId);
        } else {
          // If user with the same email doesn't exist, insert the user data into the database
          fetch('/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ gmail, name }),
          })
            .then(response => response.json())
            .then(data => {
              if (data.user_id) {
                // If user inserted successfully, get the user_id
                const userId = data.user_id;
                console.log('User inserted into the database successfully. User ID:', userId);
                setUserId(userId);
                // Store the user_id in localStorage
                localStorage.setItem('userId', userId);
              } else {
                console.error('Failed to insert user into the database.');
              }
            })
            .catch(error => {
              console.error('Error inserting user:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error checking user:', error);
      });

  }, []);

  return (
    <div className='flex flex-col gap-y-10 mx-10 '>
      <BookCard />
    </div>
  );
};

export default Dashboard;
