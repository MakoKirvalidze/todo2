const API_KEY = 'GRlK5Vaaa66SjoNU-UF9Ve5yMqhrYOfEfx0mSs5v6lvN6eG4Ug';
const BASE_URL = 'https://crudapi.co.uk/api/v1';
const COLLECTION_NAME = 'tasks';

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/${COLLECTION_NAME}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  const data = await response.json();
  return data.items || [];
};

export const addTask = async (name) => {
  await fetch(`${BASE_URL}/${COLLECTION_NAME}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      name,
      isCompleted: false
    })
  });
};

export const updateTask = async (id, updates) => {
  await fetch(`${BASE_URL}/${COLLECTION_NAME}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify(updates)
  });
};


export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/${COLLECTION_NAME}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
};